import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Button from './Button'
import { Fonts } from '../Fonts/insex';
const OneRequest = (props) => {
    if (props.loading== true) { return <ActivityIndicator size='large' color='#fcb72b' /> } else {
        return (
            <View style={styles.container} >
                <Text style={styles.text} >
                    {props.Name}
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }} >
                    <Text style={styles.text}>
                        {props.Date}
                    </Text>
                    <Text style={styles.text}>
                        {props.Status}
                    </Text>
                </View>
                <Text style={[styles.text]}>
                    {props.Time}
                </Text>
                <Text style={[styles.text]}>
                    {props.Type || ''}
                </Text>
                
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }} >
                    <Button
                        style={styles.Button}
                        textStyle={styles.NumberTxt}
                        Text='Cancel'
                        onPress={props.onCansel}
                    />
                    <Button
                        style={styles.Button}
                        textStyle={styles.NumberTxt}
                        Text='Accept'
                        onPress={props.onAccept}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#333333',  padding: 5, marginHorizontal: 30, marginVertical: 10, alignItems: 'center', justifyContent: 'center'
    },
    container: {
        backgroundColor: '#1a1a1a', borderColor: '#333333', borderWidth: 1 , padding: 10 , margin: 10 , marginTop : 20
    },
    text: { color: '#fcb72b', fontSize: 15, alignSelf: 'center', marginTop: 5, fontFamily: Fonts.Helvetica, textAlignVertical: 'center', textAlign: 'center' }
    , NumberTxt: {
        color: '#fcb72b', alignSelf: 'center', fontSize: 15, fontFamily: Fonts.Helvetica, padding: 5
    }
})

export default OneRequest