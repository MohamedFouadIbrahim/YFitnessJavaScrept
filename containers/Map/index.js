import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import MapComponent from '../../components/Map';
import NotficatonButton from '../../components/NotficatonButton';
import { Me } from '../../Service/UserService';
import { getToken } from '../../utlits/Application';
import { MyPlace } from '../../utlits/Map';
import { GetAllGyms } from '../../Service/GymService';

const Sty = require('../../Styles/Map.json')

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
            gyms: [],
            myInfo: {}
        }
    }


    loadMyInfo() {
        getToken(token => {
            Me(token, res => {
                this.setState({
                    myInfo: res.data
                })
            })
        })
    }

    componentDidMount() {

        this.onMyPlace()
        GetAllGyms(res => {
            this.setState({ gyms: res.data, didDataFetched: true })
        })

    }

    onMyPlace() {
        MyPlace(region => {
            this.setState({ region })
        })
    }


    render() {

        const { didDataFetched, gyms, region, myInfo } = this.state

        if (!didDataFetched) {
            return <Loadding />
        }

        return (
            <View style={{ flex: 1, }} >
                <NotficatonButton onPress={() => { this.onMyPlace() }} />
                <MapComponent
                    initialRegion={{
                        latitude: 0,
                        longitude: 0,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1
                    }}
                    region={{
                        ...region,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1
                    }}
                    AllGyms={gyms}
                    onMarkerPress={(item) => {
                        const { Id } = myInfo
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

export default Map