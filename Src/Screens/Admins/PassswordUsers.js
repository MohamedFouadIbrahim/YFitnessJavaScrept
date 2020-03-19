import React from 'react';
import { View, TextInput, Button } from 'react-native';
import Axios from 'axios';
import { MainUrl } from '../../Root';
class PasswordUser extends React.Component {
    state = {
        UserNumber: '',
        UserMobile: ''
    }
    onSend() {
        const { UserMobile, UserNumber } = this.state
        if (UserMobile == '' && UserNumber == '') {
            return alert('Enter Vaild Data')
        }
        if (UserMobile == '' && UserNumber !== '') {
            Axios.post(`${MainUrl}/Api/Users/userdetailsbynumber`, {
                userNumber: UserNumber,
            }).then((v) => {
                this.props.navigation.navigate('Detalis', {
                    Name: v.data.Name,
                    Email: v.data.Email,
                    Mobile: v.data.Mobile,
                    Points: v.data.Points,
                    Number: v.data.Number,
                    type: 'User'
                })
            })

                .catch((e) => {
                    if (e.response) { alert(e.response.data) } else { alert(e.message) }
                })
        } else if (UserNumber == '' && UserMobile !== '') {
            Axios.post(`${MainUrl}/Api/Users/userdetailsbymobile`, { Mobile: UserMobile }).then((v) => {
                this.props.navigation.navigate('Detalis', {
                    Name: v.data.Name,
                    Email: v.data.Email,
                    Mobile: v.data.Mobile,
                    Points: v.data.Points,
                    Number: v.data.Number,
                    type: 'User'
                })
            }).catch((e) => { if (e.response) { alert(e.response.data) } else { alert(e.message) } })
        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }} >
                <TextInput placeholder='Id' onChangeText={(e) => { this.setState({ UserNumber: parseInt(e, 10), UserMobile: '' }) }} />
                <TextInput placeholder='mobile' onChangeText={(e) => { this.setState({ UserMobile: e, UserNumber: '' }) }} />
                <Button title='Get Details ' onPress={() => { this.onSend() }} />
            </View>
        )
    }
}
export default PasswordUser