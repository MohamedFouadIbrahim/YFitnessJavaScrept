import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Fonts } from '../Fonts/insex';
const UserProfile = (props) => (
    <View style={Styles.container} >
        <Text style={Styles.Text} >
            {props.Name}
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }} >
            {props.Points == null ? <Text style={Styles.e} >
                {props.Mobile}
            </Text> : <Text style={Styles.e} >
                    {`${props.Points} Y`}
                </Text>}
            <Text style={Styles.NumberTxt}>
                {`ID : ${props.Number}`}
            </Text>
        </View>
        <Text style={Styles.Text}>
            {props.Email}
        </Text>
    </View>
)
const Styles = StyleSheet.create({
    e: {
        color: '#fcb72b', fontSize: 15, fontFamily: Fonts.Helvetica, textAlign: 'center', textAlignVertical: 'center'
    },
    container: {
        backgroundColor: '#1a1a1a', padding: 15, marginTop: 10
    }, Text: { color: '#fcb72b', fontSize: 15, alignSelf: 'center', marginTop: 5, fontFamily: Fonts.Helvetica, width: '90%', textAlign: 'center' }
    , NumberTxt: {
        paddingHorizontal: 10, color: '#fcb72b', fontSize: 15, backgroundColor: '#262626', borderRadius: 120, textAlignVertical: 'center', textAlign: 'center'
    }
})

export default UserProfile