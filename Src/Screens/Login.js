import React from 'react';
import { ActivityIndicator, Keyboard, StyleSheet, View } from 'react-native';
import Toast from 'react-native-easy-toast';
import { connect } from 'react-redux';
import { Email, Password, Validate } from '../Actions/LoginUsers';
import { LoginUser } from '../../Service/UserService';

import Button from '../Component/Button';
import Input from '../Component/TextInput';
import { Fonts } from '../Fonts/insex';
import unlocked from '../Photo/unlocked.png';
import user from '../Photo/user.png';
import AsyncStorage from '@react-native-community/async-storage';
import { setToken } from '../../utlits/Application';
class Login extends React.Component {
    static navigationOptions = {
        headerTransparent: true,
        headerTintColor: '#ffffbe'
    }
    onLogin() {
        Keyboard.dismiss()
        const { Email, Password } = this.props.Login
        if (Email == '' || Password == '') {
            this.refs.tost.show('Enter Email And Password')
            return
        }
        Validate(this.props.Login, (e) => {
            this.refs.tost.show(e)
        }, () => {
            const Data = {
                Email: Email.toLocaleLowerCase(),
                Password: Password
            }
            LoginUser(Data, res => {
                console.log(res)
                setToken(res, () => {
                    console.log('HaveSetied')
                }, err => {
                    console.log('NotHaveSetied')
                })
            })
            return
            this.props.LoginUser(Data)
                .then(() => {
                    if (this.props.Login.Token && Data.Email == 'yfitness@yfitness.com') {
                        AsyncStorage.setItem('token', this.props.Login.Token).then(() => {
                            this.props.navigation.navigate('Admin')
                        }).catch(() => {
                            alert('eroor')
                        })
                        return
                    }
                    else if (this.props.Login.Token) {
                        try {
                            AsyncStorage.setItem('token', this.props.Login.Token)
                                .then(() => { this.props.navigation.navigate('User') })
                        }
                        catch (e) { console.log(e) }
                    }
                    else { this.refs.tost.show(this.props.Login.Erorr) }
                })
                .catch((e) => { this.refs.tost.show(e) })
        })
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
                        image={user}
                        imageStyle={{ position: 'absolute', left: 20, bottom: 8, width: 15, height: 30 }}
                        placeholder='Email'
                        onChangeText={(e) => { this.props.Email(e) }}
                    />
                    <Input
                        style={[styles.TextInput, { marginTop: 20 }]}
                        image={unlocked}
                        imageStyle={{ bottom: 8, position: 'absolute', left: 17, width: 20, height: 30, }}
                        placeholder='Password'
                        onChangeText={(e) => { this.props.Password(e) }}
                        secureTextEntry
                    />
                    {this.props.Login.Loading == true ? <ActivityIndicator size='large' color='#fcb72b' style={{ marginTop: 10 }} /> : <View />}
                    <Button
                        textStyle={{ alignSelf: 'center', color: '#fcb72b', fontFamily: Fonts.Helvetica, fontSize: 20 }}
                        style={styles.Button}
                        Text='Login'
                        onPress={() => {
                            // this.onLogin()
                            alert('ok')
                        }}
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
    Conatiner: { flex: 1, backgroundColor: 'black', justifyContent: 'center', }
})
const mapStateToProps = state => {
    return {
        Login: state.Login
    }
}
export default connect(mapStateToProps, { Email, Password, })(Login)
