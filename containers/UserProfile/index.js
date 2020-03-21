import React from 'react';
import { Dimensions, Image, RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Requests from '../../components/UserRequests';
import UserProfile from '../../components/UserProfile';
import I from '../../Photo/f.png';
import { loadMyInfo } from '../../utlits/Application';

class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            refreshing: false,
            MyInfo: null,
            dataFetched: false
        }
    }

    static navigationOptions = {
        headerTransparent: true,
        headerTintColor: '#fcb72b'
    }


    componentDidMount() {
        loadMyInfo(data => {
            this.setState({
                MyInfo: data,
                dataFetched: true
            })
        })
    }

    render() {

        const { dataFetched } = this.state

        if (!dataFetched) {
            return null
        }

        const {
            _id,
            Name,
            Number,
            Points,
            Email
        } = this.state.MyInfo

        return (
            <ScrollView

                contentContainerStyle={{
                    flex: 1
                }}
                style={{ backgroundColor: 'black', paddingTop: 40 }} refreshControl={<RefreshControl onRefresh={this.onrefresh} refreshing={this.state.refreshing} />} >

                <UserProfile
                    Name={Name}
                    Number={Number}
                    Points={Points}
                    Email={Email}
                />

                <Requests
                    UserId={_id}
                />

                <View style={{ height: 80, backgroundColor: '#1a1a1a', justifyContent: 'center', alignSelf: 'center', bottom: 0, position: 'absolute', width: Dimensions.get('window').width - 10 }} >
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('YFitnessPage') }} style={{ marginVertical: 5, justifyContent: 'center', alignItems: 'center' }}  >
                        <Image source={I} style={{ width: 40, height: 40 }} />
                    </TouchableOpacity>
                    <Text style={{ color: '#fcb72b', alignSelf: 'center' }} > Contact Us </Text>
                </View>
            </ScrollView>
        )
    }
}

export default Profile

