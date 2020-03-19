import React from 'react';
import { View, TextInput, Button } from 'react-native';
import Axios from 'axios';
import { MainUrl } from '../../Root';
class ChargeForGym extends React.Component {
    state = {
        gymNumber: 0,
    }
    onCharge() {
        const { gymNumber } = this.state
        if ( gymNumber <= 0 ) {
            alert('حط الداتا صح يا عرص  ')
            return
        }
        Axios.post(`${MainUrl}/Api/Y/diactivedgym`, {
            gymNumber: gymNumber,
        }).then((v) => { alert(v.data) })
            .catch((e) => {
                if (e.response) {
                    alert(e.response.data)
                } else { alert(e.message) }
            })
            .then(() => { this.props.navigation.navigate('AdminScreen') })
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }} >
                <TextInput placeholder='Gym Number' onChangeText={(e) => { this.setState({ gymNumber: parseInt(e, 10) }) }} />
                <Button title='diactived' onPress={() => { this.onCharge() }} />
            </View>
        )
    }
}
export default ChargeForGym