import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OneRow = ({ Man, Women }) => {
    const Manarray = Object.keys(Man)
    return Manarray.map((vlaue, i) => (
        <View key={i} >
            <Text style={[styles.Text, { fontSize: 20, marginLeft: 5, marginTop: 10 }]} >{`${vlaue} : `}</Text>
            {Man ? <Text style={styles.Text}>{` Man : ${Man[vlaue]}`}</Text> : null}
            {Women ? <Text style={styles.Text}>{` Women : ${Women[vlaue]}`}</Text> : null}
        </View>
    ))
}
const styles = StyleSheet.create({
    Text: {
        color: '#fcb72b', fontSize: 15,
        marginVertical: 5,
        marginLeft: 10,
    }
})
export default OneRow