import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Button from '../Component/Button';
import { Fonts } from '../Fonts/insex';
class UserOrGym extends React.Component {
    static navigationOptions = {
        headerTransparent: true,
        headerTintColor: '#fcb72b'
    }
    render() {
        return (
            <View style={styles.Conatiner}  >
                <Image
                    resizeMode='stretch'
                    style={{ alignSelf: 'center', height: 400, width: 400 }}
                    source={require('../Photo/Logo.png')}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                    <Button
                        onPress={() => { this.props.navigation.navigate('Welcome') }}
                        style={styles.Button}
                        textStyle={styles.ButtonText}
                        Text='Player'
                    />
                    <Button
                        onPress={() => { this.props.navigation.navigate('WelcomeGym') }}
                        style={styles.Button}
                        Text='Trainer'
                        textStyle={styles.ButtonText}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Button: { backgroundColor: '#1a1a1a', borderRadius: 20, padding: 20, width: '30%', alignItems: 'center' },
    ButtonText: { fontSize: 20, color: '#fcb72b', alignSelf: 'center', fontFamily: Fonts.Helvetica, textAlign: 'center' },
    Conatiner: { backgroundColor: 'black', flex: 1, justifyContent: 'center' }

})
export default UserOrGym;