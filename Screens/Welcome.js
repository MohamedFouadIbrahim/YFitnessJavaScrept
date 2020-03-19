import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import {Fonts} from '../Fonts/insex';
import Button from '../Component/Button';
class Welcome extends React.Component {
    static navigationOptions = {
        headerTransparent: true,
        headerTintColor:'#fcb72b'
    }
    render() {
        return (
            <View style={styles.Container}  >
                <View style={{ flexDirection: 'row', width: Dimensions.get('window').width / 1.2, justifyContent: 'space-around' }} >
                    <Button
                        style={styles.Button}
                        onPress={() => {this.props.navigation.navigate('Login')} }
                        textStyle={styles.ButtonText}
                        Text='Login'
                    />
                    <Button
                        style={styles.Button}
                        onPress={() => { this.props.navigation.navigate('RegistUsers') }}
                        Text='Regist'
                        textStyle={styles.ButtonText}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Container:{
        flex: 1,  justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'
    },
    Button: {backgroundColor: '#1a1a1a', borderRadius: 20, padding: 20, alignItems: 'center'
},
    ButtonText: { fontSize: 20, color: '#fcb72b', alignSelf: 'center', fontFamily: Fonts.Helvetica, textAlign: 'center' },
})
export default Welcome