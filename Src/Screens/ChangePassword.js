import React from 'react';
import { View, StyleSheet, ActivityIndicator, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import Input from '../Component/TextInput';
import Toast from 'react-native-easy-toast';
import { Fonts } from '../Fonts/insex';
import Button from '../Component/Button';
import { OldPassword, NewPassword, ResetPassword } from '../Actions/ResetUserPassword';
import { Me } from '../Actions/MyInfo';

class ChangePassword extends React.Component {
    onReset() {
        Keyboard.dismiss()
        const { Number } = this.props.MyInfo
        const { OldPassword, NewPassword } = this.props.ResetUserPassword
        if (OldPassword == '' || NewPassword == '' || Number == '') {
            this.refs.tost.show(' Please Enter A vaild Data ..!')
            return
        }
        this.props.ResetPassword(Number, OldPassword, NewPassword)
            .then(() => {
                if (this.props.ResetUserPassword.Rested !== '') {
                    this.refs.tost.show(this.props.ResetUserPassword.Rested)
                } else { this.refs.tost.show(this.props.ResetUserPassword.FailRested) }
            })
            .catch(() => { this.refs.tost.show(this.props.ResetUserPassword.FailRested) })
    }
    render() {
        return (
            <View style={styles.Conatiner}  >
                <View style={{ marginHorizontal: 50 }} >
                    <Toast ref='tost' defaultCloseDelay={100} style={{ backgroundColor: 'black', borderRadius: 20 }}
                        position='center'
                        fadeInDuration={1000}
                        fadeOutDuration={1000}
                        opacity={0.8}
                        textStyle={{ color: 'white' }}
                    />
                    <Input
                        style={styles.TextInput}
                        placeholder='Old Password'
                        onChangeText={(e) => { this.props.OldPassword(e) }}
                    />
                    <Input
                        style={[styles.TextInput, { marginTop: 20 }]}
                        placeholder='New Password'
                        onChangeText={(e) => { this.props.NewPassword(e) }}
                    />
                    {this.props.ResetUserPassword.Resiting == true ? <ActivityIndicator size='large' color='#fcb72b' style={{ marginTop: 10 }} /> : <View />}
                    <Button
                        textStyle={{ alignSelf: 'center', color: '#fcb72b', fontFamily: Fonts.Helvetica, fontSize: 20 }}
                        style={styles.Button}
                        Text='Reset My Password'
                        onPress={() => { this.onReset() }}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    TextInput: {
        paddingLeft: 70,
        paddingBottom: 5,
        borderBottomColor: '#fcb72b',
        borderBottomWidth: 0.2,
        fontSize: 20,
        fontFamily: Fonts.Helvetica,
        width: '100%',
        color: '#fcb72b'
    },
    Button: { backgroundColor: '#333333', padding: 10, marginTop: 40 },
    Conatiner: { flex: 1, backgroundColor: 'black', justifyContent: 'center', backgroundColor: 'black' }
})
const mapStateToProps = state => {
    return {
        MyInfo: state.MyInfo,
        ResetUserPassword: state.ResetUserPassword
    }
}
export default connect(mapStateToProps, { OldPassword, NewPassword, ResetPassword })(ChangePassword)