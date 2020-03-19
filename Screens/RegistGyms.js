import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../Component/Button';
import { Email, Name, Password, ConfirmPassword } from '../Actions/RegistGyms';
import { connect } from 'react-redux';
import unlocked from '../Photo/unlocked.png';
import { Fonts } from '../Fonts/insex';
import Input from '../Component/TextInput';
import User from '../Photo/user.png';
class RegistGyms extends React.Component {
    static navigationOptions = {
        headerTransparent: true,
        headerTintColor: '#fcb72b'
    }
    
    render() {
        return (
            <View style={styles.Conatiner}  >
            <View style={{ marginHorizontal: 50, alignItems: 'center' }} >
                <Input
                    image={User}
                    imageStyle={{  position: 'absolute', left: 20, bottom: 17, width: 15, height: 30 }}
                    style={styles.TextInput}
                    placeholder='Name'
                    onChangeText={(e) => { this.props.Name(e) }}
                />
                <Input
                    image={User}
                    imageStyle={{ position: 'absolute', left: 20, bottom: 17, width: 15, height: 30 }}
                    style={styles.TextInput}
                    placeholder='Email'
                    onChangeText={(e) => { this.props.Email(e) }}
                />
                <Input
                    image={unlocked}
                    imageStyle={{ bottom: 17, position: 'absolute', left: 17, width: 20, height: 30 }}
                    style={styles.TextInput}
                    placeholder='Password'
                    onChangeText={(e) => { this.props.Password(e) }}
                    secureTextEntry
                />
                <Input
                    image={unlocked}
                    imageStyle={{ bottom: 17, position: 'absolute', left: 17, width: 20, height: 30 }}
                    style={styles.TextInput}
                    placeholder='ConfirmPassword'
                    onChangeText={(e) => { this.props.ConfirmPassword(e) }}
                    secureTextEntry
                />
                <Button
                    style={styles.Button}
                    textStyle={{ color: '#fcb72b', fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }}
                    Text='Next'
                    onPress={() => {  this.props.navigation.navigate('Registting') }}
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
         color: '#fcb72b',
         marginVertical: 10

     },
     Button: { backgroundColor: '#333333', marginTop: 40, alignSelf: 'center', width: '100%', padding: 5 },
     Conatiner: { flex: 1, justifyContent: 'center', backgroundColor: 'black' }
 })
const mapStateToProps = state => {
    return {Regist: state.RegistGyms}
}
export default connect(mapStateToProps, { Email, Name, Password, ConfirmPassword,  })(RegistGyms)