import React from 'react';
import { View, TextInput, Button, PermissionsAndroid, Dimensions } from 'react-native';
import Axios from 'axios';
import { MainUrl } from '../../Root';
class OneClass extends React.Component {
    state = {
        GymNumber: 0,
        OneClass: 0
    }
    constructor() {
        super()
    }

    postRequest() {
        const { GymNumber, OneClass, Adrees } = this.state
        Axios.post(`${MainUrl}/Api/Gyms/changeoneclass`, {
            GymNumber: GymNumber,
            OneClass: OneClass,
        })
            .then((v) => {
                alert(v.data)
            })
            .then(() => { this.props.navigation.navigate('AdminScreen') })
            .catch((e) => {
                if (e.response) {
                    alert(e.response.data)
                } else { alert(e.message) }
            })
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }} >
                <TextInput placeholder='Gym Number' onChangeText={(e) => { this.setState({ GymNumber: parseInt(e, 10) }) }} />
                <TextInput placeholder='One Class' onChangeText={(e) => { this.setState({ OneClass: parseInt(e, 10) }) }} />
                <Button title='SetAndAccept' onPress={() => { this.postRequest() }} />
            </View>
        )
    }
}
export default OneClass