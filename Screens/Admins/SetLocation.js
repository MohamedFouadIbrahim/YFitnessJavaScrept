import React from 'react';
import { View, TextInput, Button, PermissionsAndroid, Dimensions } from 'react-native';
import Axios from 'axios';
import { MainUrl } from '../../Root';
class SetLocation extends React.Component {
    state = {
        GymNumber: 0,
        Adrees: {},
        OneClass: 0
    }
    constructor() {
        super()
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
            .then((ok) => {
                if (!ok) {
                    console.log('i dont Have Permision and i will request ');
                    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
                }
            })
            .catch((e) => { alert(e) })
    }
    setLocation(Then) {
        const { width, height } = Dimensions.get('window')
        navigator.geolocation.getCurrentPosition((pos) => {
            const latitude = parseFloat(pos.coords.latitude)
            const longitude = parseFloat(pos.coords.longitude)
            const latitudeDelta = 0.0922
            const ASS = width / height
            const longitudeDelta = latitudeDelta * ASS;
            const adrees = {
                latitude,
                longitude,
                latitudeDelta,
                longitudeDelta
            }
            this.setState({ Adrees: adrees }, () => {
                Then()
            })
        }, () => {
            alert('Make Sure You Have Connection and Open Location ')
        })
    }
    postRequest() {
        const { GymNumber, OneClass, Adrees } = this.state
        Axios.post(`${MainUrl}/Api/Gyms/setlocactionandacceptgym`, {
            GymNumber: GymNumber,
            OneClass: OneClass,
            Adress: Adrees
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
    onAccept() {
        const { Count, OneClass } = this.state
        if (Count == '' || Count <= 0 || OneClass == '' || OneClass <= 0) {
            alert('Data Not Valid')
            return
        }
        this.setLocation(() => { this.postRequest() })
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }} >
                <TextInput placeholder='Gym Number' onChangeText={(e) => { this.setState({ GymNumber: parseInt(e, 10) }) }} />
                <TextInput placeholder='One Class' onChangeText={(e) => { this.setState({ OneClass: parseInt(e, 10) }) }} />
                <Button title='SetAndAccept' onPress={() => { this.onAccept() }} />
            </View>
        )
    }
}
export default SetLocation