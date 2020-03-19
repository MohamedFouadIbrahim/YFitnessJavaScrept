import React from 'react';
import { View, TextInput, Button } from 'react-native';
import Axios from 'axios';
import { MainUrl } from '../../Root';
class PasswrdGyms extends React.Component {
    state = {
        GymNumber: '',
        GymMobile: '',
        type: 'Gym'
    }
    onSend() {
        const { GymMobile, GymNumber } = this.state
        if (GymMobile == '' && GymNumber == '') {
            return alert('Enter Vaild Data')
        }
        if (GymMobile == '' && GymNumber !== '') {
            Axios.post(`${MainUrl}/Api/Gyms/gymdetailsbynumber`, {
                gymNumber: GymNumber,
            }).then((v) => {
                this.props.navigation.navigate('Detalis', {
                    Name: v.data.Name,
                    Email: v.data.Email,
                    Mobile: v.data.Mobile,
                    Points: v.data.Points,
                    Number: v.data.Number,
                    type: 'Gym'
                })
            })
                .catch((e) => {
                    if (e.response) { alert(e.response.data) } else { alert(e.message) }
                })
        } else if (GymNumber == '' && GymMobile !== '') {
            Axios.post(`${MainUrl}/Api/Gyms/gymdetailsbymobile`, { Mobile: GymMobile }).then((v) => {
                this.props.navigation.navigate('Detalis', {
                    Name: v.data.Name,
                    Email: v.data.Email,
                    Mobile: v.data.Mobile,
                    Points: v.data.Points,
                    Number: v.data.Number,
                    type: 'Gym'
                })
            }).catch((e) => { if (e.response) { alert(e.response.data) } else { alert(e.message) } })
        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }} >
                <TextInput placeholder='Id' onChangeText={(e) => { this.setState({ GymNumber: parseInt(e, 10), GymMobile: '' }) }} />
                <TextInput placeholder='mobile' onChangeText={(e) => { this.setState({ GymMobile: e, GymNumber: '' }) }} />
                <Button title='Get Details ' onPress={() => { this.onSend() }} />
            </View>
        )
    }
}
export default PasswrdGyms