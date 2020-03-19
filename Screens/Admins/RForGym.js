import React from 'react';
import { View, TextInput, Button } from 'react-native';
import Axios from 'axios';
import { MainUrl } from '../../Root';
class RForGym extends React.Component {
    state = {
        PointCount: 0,
        GymNumber: 0
    }
    onSend() {
        const { PointCount, GymNumber } = this.state
        if (PointCount == 0 || GymNumber == 0) {
            return alert('Enter Vaild Data')
        }
        Axios.post(`${MainUrl}/Api/Charge/rewardsforgym`, {
            GymNumber: GymNumber, TransPoints: PointCount
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
                <TextInput placeholder='Point Count' onChangeText={(e) => { this.setState({ PointCount: parseInt(e, 10) }) }} />
                <Button title='Send' onPress={() => { this.onSend() }} />
            </View>
        )
    }
}
export default RForGym