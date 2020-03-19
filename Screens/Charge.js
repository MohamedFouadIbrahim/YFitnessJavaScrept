import Axios from 'axios';
import React from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import Toast from 'react-native-easy-toast';
import BTN from '../Component/Button';
import Input from '../Component/TextInput';
import { Fonts } from '../Fonts/insex';
import { MainUrl } from '../Root';
class Charge extends React.Component {
    static navigationOptions = {
        headerTransparent: true,
        headerTintColor: '#ffffbe'
    }
    state = { Id: 0 }
    getUserDteails() {
        Keyboard.dismiss()
        const { Id } = this.state
        if (Id == 0) {
            return this.refs.tost.show(' No Player With This Id  ')
        }
        Axios.post(`${MainUrl}/Api/Users/userdetailsbynumber`, { userNumber: Id })
        
            .then((v) => {
                if (v.data) {
                    const { Name, Email, Mobile, Number } = v.data
                     this.props.navigation.navigate('UserDetails', {
                         Name,
                         Email,
                         Mobile,
                         Number
                     })
                }
            })
            .catch((e) => {
                if (e.response) {
                    this.refs.tost.show(e.response.data)
                } else {
                    this.refs.tost.show(e.message)
                }
            })
    }
    render() {
        return (
            <View style={{ paddingHorizontal: 30, flex: 1, justifyContent: 'center', backgroundColor: 'black' }} >
                <Toast ref='tost' defaultCloseDelay={100} style={{ backgroundColor: 'black', borderRadius: 20 }}
                    position='bottom'
                    fadeInDuration={1000}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{ color: 'white' }}
                />
                <Input
                    style={styles.TextInput}
                    placeholder='Player ID'
                    onChangeText={(e) => { this.setState({ Id: parseInt(e, 10) }) }}
                />
                <BTN
                    style={styles.Button}
                    textStyle={{ fontSize: 20, color: '#fcb72b', alignSelf: 'center', fontFamily: Fonts.Helvetica }}
                    Text='Get Details'
                    onPress={() => { this.getUserDteails() }}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#333333', marginTop: 40, alignSelf: 'center', width: '100%', padding: 5
    },
    TextInput: {
        paddingLeft: 70,
        paddingBottom: 5,
        borderBottomColor: '#fcb72b',
        borderBottomWidth: 0.2,
        fontSize: 20,
        fontFamily: Fonts.Helvetica,
        width: '100%',
        color: '#fcb72b',
        marginVertical: 10

    }
})

const mapStateToProps = state => {
    return {
        Sendding: state.SendPoints,
        Info: state.GymInfo
    }
}
export default Charge