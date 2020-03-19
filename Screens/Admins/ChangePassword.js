import React from 'react';
import { View, StyleSheet } from 'react-native';
import BTn from '../../Component/Button';
class ChangPassword extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-around', backgroundColor: 'black' }} >
                <BTn style={styles.container} textStyle={styles.Text} Text='Change Passwords For Gym' onPress={() => {  this.props.navigation.navigate('PasswordGyms')  }} />
                <BTn style={styles.container} textStyle={styles.Text} Text='Change Passwords For User' onPress={() => {  this.props.navigation.navigate('PassswordUsers')  }} />
            </View>
        )
    }
}
export default ChangPassword
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333333', alignSelf: 'center', width: '95%', padding: 5
    },
    Text: {
        color: '#ffffbe', fontSize: 20, fontWeight: 'bold', alignSelf: 'center'
    }
}) 
