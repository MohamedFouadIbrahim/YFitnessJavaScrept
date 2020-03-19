import React from 'react';
import { View, TextInput, Button, ActivityIndicator, Text } from 'react-native';
import Axios from 'axios';
import { MainUrl } from '../../Root';
class ChargeForUser extends React.Component {
    state = {
        userNumber: 0,
        Count: 0,
        err: '',
        Chargeing: false,
        Getting: false,
        Name: '',
        Email: '',
        Mobile: '',
        Points: '',
        Number: '',
    }
    Check() {
        const { userNumber } = this.state
        if (userNumber == '' || userNumber == 0) {
            return alert('Enter Vaild Data')
        }
        this.setState({ Getting: true }, () => {
            Axios.post(`${MainUrl}/Api/Users/userdetailsbynumber`, {
                userNumber: userNumber,
            }).then((v) => {
                this.setState({
                    Name: v.data.Name,
                    Email: v.data.Email,
                    Mobile: v.data.Mobile,
                    Points: v.data.Points,
                    Number: v.data.Number,
                    Getting: false
                })
            })
                .catch((e) => {
                    this.setState({ Getting: false })
                    if (e.response) { alert(e.response.data) } else { alert(e.message) }
                })
        })
    }


    onCharge() {
        const { userNumber, Count } = this.state
        if (userNumber == '' || userNumber <= 0 || Count == '' || Count <= 0) {
            alert('data not correct  ')
            return
        }
        this.setState({ Chargeing: true }, () => {
            Axios.post(`${MainUrl}/Api/Charge/admintouser`, {
                AdminId: "5c595923c49cac17ac008bc4",
                userNumber: userNumber,
                TransPoints: Count
            }).then((v) => {
                this.setState({ Chargeing: false })
                alert(v.data)
            })
                .catch((e) => {
                    this.setState({ Chargeing: false })
                    if (e.response) {
                        alert(e.response.data)
                    } else { alert(e.message) }
                })
                .then(() => { this.props.navigation.navigate('AdminScreen') })
        })
    }
    
    render() {
        const { Name, Email, Mobile, Points, Getting } = this.state
        return (
            <View style={{ flex: 1, justifyContent: 'center' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ fontSize: 17, alignSelf: 'center' }} >{`Name: ${Name}`}</Text>
                    <Text style={{ fontSize: 17, alignSelf: 'center' }} >{`Email: ${Email}`}</Text>
                    <Text style={{ fontSize: 17, alignSelf: 'center' }} >{`Mobile: ${Mobile}`}</Text>
                    <Text style={{ fontSize: 17, alignSelf: 'center' }} >{`Points: ${Points}`}</Text>
                </View>
                <View >
                    <TextInput placeholder='User Number' style={{ marginVertical: 5 }} onChangeText={(e) => { this.setState({ userNumber: parseInt(e, 10) }) }} />
                    <TextInput placeholder='Point Count' style={{ marginVertical: 5 }} onChangeText={(e) => { this.setState({ Count: parseInt(e, 10) }) }} />
                    {Getting == true ?
                        <ActivityIndicator size='large' color='black' /> :
                        <View style={{ marginVertical: 5 }} >
                            <Button title='GetUserDetails' onPress={() => { this.Check() }} />
                        </View>
                    }
                    {this.state.Chargeing == true ?
                        <ActivityIndicator size='large' color='black' /> :
                        <View style={{ marginVertical: 5 }} >
                            <Button title='Charge' onPress={() => { this.onCharge() }} />
                        </View>
                    }
                </View>


            </View>
        )
    }
}
export default ChargeForUser