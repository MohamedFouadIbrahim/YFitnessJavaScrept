import React from 'react';
import { View, TextInput, Button, ActivityIndicator } from 'react-native';
import Axios from 'axios';
import { MainUrl } from '../../Root';
class WorkTime extends React.Component {
    state = {
        GymNumber: '',
        GymMobile: '',
        loading: false
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
                this.setState({loading: false},()=>{
                    this.props.navigation.navigate('DtailsForSetWorkTime', {
                        Name: v.data.Name,
                        Email: v.data.Email,
                        Mobile: v.data.Mobile,
                        Points: v.data.Points,
                        Number: v.data.Number,
                        type: 'Gym'
                    })
                })
            })
                .catch((e) => {
                    this.setState({loading: false})
                    if (e.response) { alert(e.response.data) } else { alert(e.message) }
                })
        } else if (GymNumber == '' && GymMobile !== '') {
            Axios.post(`${MainUrl}/Api/Gyms/gymdetailsbymobile`, { Mobile: GymMobile }).then((v) => {
                this.setState({loading: false},()=>{
                    this.props.navigation.navigate('DtailsForSetWorkTime', {
                        Name: v.data.Name,
                        Email: v.data.Email,
                        Mobile: v.data.Mobile,
                        Points: v.data.Points,
                        Number: v.data.Number,
                        type: 'Gym'
                    })
                })
            }).catch((e) => {
                this.setState({loading: false})
                if (e.response) { alert(e.response.data) } else { alert(e.message) } })
        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <TextInput placeholder='Id' onChangeText={(e) => { this.setState({ GymNumber: parseInt(e, 10), GymMobile: '' }) }} />
                <TextInput placeholder='mobile' onChangeText={(e) => { this.setState({ GymMobile: e, GymNumber: '' }) }} />
                {this.state.loading == true ?
                    <ActivityIndicator size='large' /> :
                    <Button title='Get Details ' onPress={() => {
                        this.setState({ loading: true }, () => {
                            this.onSend()
                        })
                    }} />
                }
            </View>
        )
    }
}
export default WorkTime