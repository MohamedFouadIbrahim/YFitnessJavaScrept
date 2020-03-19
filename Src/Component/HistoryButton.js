import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const HistoryButton = (props) => (
    <TouchableOpacity onPress={props.onPress} style={styles.container} >
        <Text style={styles.Text} > History </Text>
    </TouchableOpacity>
)
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1a1a1a', marginTop: 20, borderColor: '#333333', borderWidth: 1, alignSelf: 'center', width: '30%', padding: 5
    },
    m: {
        backgroundColor: '#333333',
        marginVertical: 20,
        paddingVertical: 10,
        alignSelf: 'center',
        width: '70%',
        textAlignVertical: 'center',
    },
    Text: {
        color: '#fcb72b', fontSize: 20,  alignSelf: 'center'
    }
})
export default HistoryButton