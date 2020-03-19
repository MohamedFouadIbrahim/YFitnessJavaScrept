import React from 'react';
import { View, Dimensions, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { MyPlace, GetOrCheckForPermisions, modal } from '../Actions/Maps';
import { Me } from '../Actions/MyInfo';
import { AllGyms } from '../Actions/AllGymsForMap';
import MapComponent from '../Component/Map';
import NotficatonButton from '../Component/NotficatonButton';
import { GetAllGyms } from '../Service/GymService';
import AsyncStorage from '@react-native-community/async-storage';
const { height, width } = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const Sty = require('../Styles/Map.json')
const Loadding = () => (
    <View style={{ flex: 1, justifyContent: 'center' }} >
        <ActivityIndicator size='large' color='#ffffbe' />
    </View>
)
class Map extends React.Component {
    constructor(props) {
        super(props)
        this.loadMyInfo()
        this.state = {
            didDataFetched: false,
            gyms: []
        }
    }


    loadMyInfo() {
        try {
            AsyncStorage.getItem('token')
                .then((token) => {
                    if (token != null) {
                        this.props.Me(token)
                    } else { this.props.navigation.navigate('Auth') }
                })
                .catch(() => {
                    this.props.navigation.navigate('Auth')
                })
        } catch (e) {
            this.props.navigation.navigate('Auth')
        }
    }
    componentDidMount() {
        this.props.GetOrCheckForPermisions()
        this.onMyPlace()
        GetAllGyms(res => {
            this.setState({ gyms: res.data, didDataFetched: true })
        })
    }
    onMyPlace() {
        this.props.MyPlace(SCREEN_WIDTH, SCREEN_HEIGHT)
    }
   
    show() {
        const { didDataFetched, gyms } = this.state
        if (!didDataFetched) {
            return <Loadding />
        } else {
            return (
                <View style={{ flex: 1, }} >
                    <NotficatonButton onPress={() => { this.onMyPlace() }} />
                    <MapComponent
                        me={this.props.map.region}
                        Init_region={this.props.map.region || this.props.map.Init_region}
                        region={this.props.map.region}
                        AllGyms={gyms}
                        onMarkerPress={(item) => {
                            const Id = this.props.Info._id
                            if (item.name != '') {
                                this.props.navigation.navigate('GymDetails', {
                                    GymId: item._id,
                                    Name: item.Name,
                                    Points: item.OneClass,
                                    UserId: Id,
                                    Man: item.Working.Man,
                                    Women: item.Working.Women,
                                })
                            }
                        }

                        }
                        mapStyle={Sty}
                    />
                </View>
            )
        }
    }
    render() {
        return this.show()
    }
}
const mapStateToProps = state => {
    return {
        map: state.Maps,
        Info: state.MyInfo,
        All: state.AllGymsForMap
    }
}
export default connect(mapStateToProps, { MyPlace, GetOrCheckForPermisions, modal, Me, AllGyms })(Map)