import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fonts } from '../Fonts/insex';
const History = (props) => (
    <View style={Styles.container} >
        <Text style={Styles.Text} >
        {`${props.Name}   ${props.Date} `} 
        </Text>
        <Text style={Styles.Text}>
            {props.RequestType}
        </Text>
        <Text style={Styles.Text}>
            {props.Time}
        </Text>
        <Text style={Styles.Text}>
            {props.Status}
        </Text>
    </View>
)
const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#1a1a1a', padding: 5, borderColor: '#333333', borderWidth: 1
    },
    Button: {
        backgroundColor: '#333333', borderRadius: 20, borderWidth: 1, padding: 15, marginHorizontal: 30, marginTop: 10
    },
    Text: {
        color: '#fcb72b', alignSelf: 'center', fontSize: 15, fontFamily: Fonts.Helvetica,
         marginTop: 5, paddingVertical: 5
    }
})

export default History
