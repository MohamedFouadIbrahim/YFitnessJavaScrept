import React from 'react';
import { View, TextInput, Button, ActivityIndicator } from 'react-native';
import Axios from 'axios';
import { MainUrl } from '../../Root';
class ChargeForGym extends React.Component {
    state = {
        gymNumber: 0,
        Count: 0,
        err: '',
        charging: false
    }
    onCharge() {
        const { gymNumber, Count } = this.state
        if (gymNumber == '' || gymNumber <= 0 || Count == '' || Count <= 0) {
            alert(' data not correct  ')
            return
        }
        this.setState({ charging: true }, () => {
            Axios.post(`${MainUrl}/Api/Charge/adminforgym`, {
                AdminId: "5c595923c49cac17ac008bc4",
                GymNumber: gymNumber,
                TransPoints: Count
            })
            .then((v) => {
                this.setState({ charging: false })
                alert(v.data)
            })
            .catch((e) => {
                this.setState({ charging: false })
                if (e.response) {
                    alert(e.response.data)
                } else { alert(e.message) }
            })
                .then(() => { this.props.navigation.navigate('AdminScreen') })
        })

    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }} >
                <TextInput placeholder='Gym Number' onChangeText={(e) => { this.setState({ gymNumber: parseInt(e, 10) }) }} />
                <TextInput placeholder='Point Count' onChangeText={(e) => { this.setState({ Count: parseInt(e, 10) }) }} />
                {this.state.charging == true ?
                    <ActivityIndicator size='large' color='black' /> :
                    <View>
                    <Button title='Charge' onPress={() => { this.onCharge() }} />
                    </View>
                }
            </View>
        )
    }
}
export default ChargeForGym