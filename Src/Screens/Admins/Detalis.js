import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import Axios from 'axios';
import { MainUrl } from '../../Root';
class GymDetails extends React.Component {
    state = {
        Password: '',
        Name: '',
        Email: '',
        Mobile: '',
        Points: '',
        Number: '',
        type: ''
    }
    componentDidMount() {
        const Name = this.props.navigation.getParam('Name', '');
        const Email = this.props.navigation.getParam('Email', '');
        const Mobile = this.props.navigation.getParam('Mobile', '');
        const Points = this.props.navigation.getParam('Points', '');
        const Number = this.props.navigation.getParam('Number', '');
        const type = this.props.navigation.getParam('type', '');
        this.setState({ Name, Email, Mobile, Points, Number, type })
    }
    onSend() {
        const { Number, type, Password } = this.state
        if (type !== '' && Password !== '') {
            Axios.post(`${MainUrl}/Api/Y/rsesetpasswordbynumber`, {
                type: type,
                number: Number,
                newPassword: Password
            }).then((v) => {
                alert(v.data)
            })
                .then(() => { this.props.navigation.navigate('AdminScreen') })
                .catch((e) => {
                    if (e.response) { alert(e.response.data) } else { alert(e.message) }
                })
        } else { alert('دخل الداتا صح يا عرص تاني هههههه') }
    }
    render() {
        const { Name, Email, Mobile, Points, Number } = this.state
        return (
            <View style={{ flex: 1, justifyContent: 'space-around' }} >
                <Text style={{ textAlign: 'left', fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }} >{`Name: ${Name}`}</Text>
                <Text style={{ textAlign: 'left', fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }} >{`Email: ${Email}`}</Text>
                <Text style={{ textAlign: 'left', fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }} >{`Mobile: ${Mobile}`}</Text>
                <Text style={{ textAlign: 'left', fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }} >{`Points: ${Points}`}</Text>
                <Text style={{ textAlign: 'left', fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }} >{`Number: ${Number}`}</Text>
                <View>
                    <TextInput placeholder='newPassword' onChangeText={(e) => { this.setState({ Password: e }) }} />
                    <Button title='Set' onPress={() => { this.onSend() }} />
                </View>

            </View>
        )
    }
}
export default GymDetails