import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import Button from '../Component/Button';
import { connect } from 'react-redux';
import user from '../Photo/user.png';
import unlocked from '../Photo/unlocked.png';
import { Fonts } from '../Fonts/insex';
import Input from '../Component/TextInput';
import { Name, ConfirmPassword, Password, Email } from '../Actions/RegistUser';
class RegistUsers extends React.Component {
    static navigationOptions = {
        headerTransparent: true,
        headerTintColor: '#fcb72b'
    }
    render() {
        return (
            <View style={styles.Conatiner}  >
                <View style={{ marginHorizontal: 50 }} >
                    <Input
                        style={styles.TextInput}
                        placeholderTextColor='#fcb72b'
                        placeholder='Name'
                        image={user}
                        imageStyle={{ position: 'absolute', left: 20, bottom: 17, width: 15, height: 30 }}
                        onChangeText={(e) => { this.props.Name(e) }}
                    />
                    <Input
                        image={user}
                        imageStyle={{ position: 'absolute', left: 20, bottom: 17, width: 15, height: 30 }}
                        style={styles.TextInput}
                        placeholderTextColor='#fcb72b'
                        placeholder='Email'
                        onChangeText={(e) => { this.props.Email(e) }}
                    />
                    <Input
                        image={unlocked}
                        imageStyle={{ bottom: 17, position: 'absolute', left: 17, width: 20, height: 30, }}
                        style={styles.TextInput}
                        placeholderTextColor='#fcb72b'
                        placeholder='Password'
                        onChangeText={(e) => { this.props.Password(e) }}
                        secureTextEntry
                    />
                    <Input
                        image={unlocked}
                        imageStyle={{ bottom: 17, position: 'absolute', left: 17, width: 20, height: 30, }}
                        style={styles.TextInput}
                        placeholderTextColor='#fcb72b'
                        placeholder='Confirm Password'
                        onChangeText={(e) => { this.props.ConfirmPassword(e) }}
                        secureTextEntry
                    />
                    <Button
                        style={[styles.Button, { padding: 5, width: '100%', alignSelf: 'center', fontSize: 20 }]}
                        textStyle={{ color: '#fcb72b', alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}
                        Text='Next'
                        onPress={() => { this.props.navigation.navigate('RegistUserss') }}
                    />
                </View>
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        Regist: state.Regist
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
        color: '#fcb72b',
        marginVertical: 10
    },
    Button: { backgroundColor: '#333333', padding: 10, marginTop: 40, alignSelf: 'center' },
    Conatiner: { flex: 1, justifyContent: 'center', backgroundColor:'black' }
})
export default connect(mapStateToProps, {
    Name,
    ConfirmPassword,
    Password,
    Email,
})(RegistUsers)