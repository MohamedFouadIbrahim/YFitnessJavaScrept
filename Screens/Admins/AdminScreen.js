import React from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import BTn from '../../Component/Button';
class Admin extends React.Component {
    static navigationOptions = {
        headerTransparent: true,
        headerTintColor: '#ffffbe'
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-around', backgroundColor: 'black' }} >
                <BTn style={styles.container} textStyle={styles.Text} Text='Points In Box' onPress={() => { this.props.navigation.navigate('BoxInPoints') }} />
               
                <BTn style={styles.container} textStyle={styles.Text} Text='Charge For Gym' onPress={() => { this.props.navigation.navigate('ChargeForGym') }} />
                <BTn style={styles.container} textStyle={styles.Text} Text='Charge For User' onPress={() => { this.props.navigation.navigate('ChargeForPlayer') }} />
                <BTn style={styles.container} textStyle={styles.Text} Text='Set Work Time' onPress={() => { this.props.navigation.navigate('WorkTime') }} />
                <BTn style={styles.container} textStyle={styles.Text} Text='set One class' onPress={() => { this.props.navigation.navigate('OnClassSet') }} />
               
                <BTn style={styles.container} textStyle={styles.Text} Text='AcceptGym And SetLocation' onPress={() => { this.props.navigation.navigate('SetLocation') }} />
                <BTn style={styles.container} textStyle={styles.Text} Text='Change Passwords' onPress={() => { AsyncStorage.clear().then(() => { this.props.navigation.navigate('ChangePassword') }) }} />
               
                <BTn style={styles.container} textStyle={styles.Text} Text='diactived gym' onPress={() => { this.props.navigation.navigate('diactivedgym') }} />
                <BTn
                        style={styles.container}
                        onPress={() => { this.props.navigation.navigate('RegistGyms') }}
                        Text='Regist'
                        textStyle={styles.Text}
                    />
                <BTn style={styles.container} textStyle={styles.Text} Text='Log out' onPress={() => { AsyncStorage.clear().then(() => { this.props.navigation.navigate('LoadingScreen') }) }} />

            </View>
        )
    }
}
export default Admin
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333333', alignSelf: 'center', width: '95%', padding: 5
    },
    Text: {
        color: '#fcb72b', fontSize: 20, fontWeight: 'bold', alignSelf: 'center'
    }
}) 
