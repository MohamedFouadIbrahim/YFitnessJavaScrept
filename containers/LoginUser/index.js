import React from 'react';
import { ActivityIndicator, Keyboard, StyleSheet, View } from 'react-native';
import Toast from 'react-native-easy-toast';
import Button from '../../components/Button';
import Input from '../../components/TextInput';
import { LoginUser } from '../../Service/UserService';
import { setToken } from '../../utlits/Application';
import unlocked from '../../Photo/unlocked.png';
import user from '../../Photo/user.png';
import validator from 'validator';
import AsyncStorage from '@react-native-community/async-storage';

class Login extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            lockSubmit: false,
            Email: null,
            Password: null
        }

        this.lockSubmit = false

    }

    componentDidMount() { 
        AsyncStorage.clear()
    }
    static navigationOptions = {
        headerTransparent: true,
        headerTintColor: '#ffffbe'
    }

    onLogin() {

        if (this.state.lockSubmit) {
            return
        }

        Keyboard.dismiss()

        const { Email, Password } = this.state

        if (!validator.isEmail(Email) || !Password) {
            return this.refs.tost.show('Enter Valid Email And Password')
        }

        const Data = {
            Email: Email.toLocaleLowerCase(),
            Password: Password
        }

        // console.log(Data)

        this.setState({ lockSubmit: true })
        this.lockSubmit = true

        LoginUser(Data, res => {

            this.setState({ lockSubmit: false })
            this.lockSubmit = false

            setToken(res.data.token, () => {
                if (res.data.token && Data.Email == 'yfitness@yfitness.com') {
                    this.props.navigation.navigate('Admin')
                } else {
                    this.props.navigation.navigate('User')
                }
            })

        }, err => {
            this.setState({ lockSubmit: false })
            this.lockSubmit = false
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
                        onChangeText={(Email) => { this.setState({ Email }) }}
                    />
                    <Input
                        style={[styles.TextInput, { marginTop: 20 }]}
                        image={unlocked}
                        imageStyle={{ bottom: 8, position: 'absolute', left: 17, width: 20, height: 30, }}
                        placeholder='Password'
                        onChangeText={(Password) => { this.setState({ Password }) }}
                        secureTextEntry
                    />
                    {this.state.lockSubmit == true ? <ActivityIndicator size='large' color='#fcb72b' style={{ marginTop: 10 }} /> :
                        <Button
                            style={styles.Button}
                            Text='Login'
                            onPress={() => { this.onLogin() }}
                        />
                    }

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
        width: '100%',
        color: '#fcb72b'
    },
    Button: { backgroundColor: '#333333', padding: 10, marginTop: 40 },
    Conatiner: { flex: 1, backgroundColor: 'black', justifyContent: 'center', }
})

export default Login
