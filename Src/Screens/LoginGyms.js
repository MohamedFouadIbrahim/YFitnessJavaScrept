import React from 'react';
import { View, ImageBackground, StyleSheet, ActivityIndicator, Keyboard } from 'react-native';
import Button from '../Component/Button';
import { connect } from 'react-redux';
import user from '../Photo/user.png';
import unlocked from '../Photo/unlocked.png';
import backround from '../Photo/backround.png';
import { Fonts } from '../Fonts/insex';
import Toast, { DURATION } from 'react-native-easy-toast'
import Input from '../Component/TextInput';
import { setToken } from '../Screens/Application';
import { Email, Password, LoginGyms, Validate } from '../Actions/LoginGyms';
class Login extends React.Component {
    static navigationOptions = {
        headerTransparent: true,
        headerTintColor: '#fcb72b'
    }
    // componentDidMount(){
    //     this.props.navigation.navigate('Admin')
    // }
   async onLogin() {
        Keyboard.dismiss()
        const { Email, Password } = this.props.Login
        if (Email == '' || Password == '') {
            this.refs.tost.show('Make Sure To Enter Your Email And Password')
            return
        } 
        else {
            const Data = {
                Email: Email.toLocaleLowerCase(),
                Password: Password
            }
            
             this.props.LoginGyms(Data)
                 .then( async () => {
                     if (this.props.Login.Token) {
                     const s =  await setToken(this.props.Login.Token)
                         if(s == true){
                            this.props.navigation.navigate('Gym')
                         }
                     } else { this.refs.tost.show(this.props.Login.Erorr) }
                 })
        }
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
                        onPress={() => { this.onLogin() }}
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
    Conatiner: { flex: 1, backgroundColor: 'black', justifyContent: 'center' }
})

const mapStateToProps = state => {
    return {
        Login: state.LoginGyms
    }
}
export default connect(mapStateToProps, { Email, Password, LoginGyms })(Login)
