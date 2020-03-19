import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Button from './Button'
import { Fonts } from '../Fonts/insex';
class OneRequest extends React.Component {
    state = {
        Show: false
    }
    
    render() {
        return (
            <View style={Styles.container} >
                <Text style={Styles.Text} >
                    {this.props.Name}
                </Text>
                <Text style={Styles.Text}>
                    {this.props.Email}
                </Text>
                <Text style={Styles.Text}>
                    {this.props.Date}
                </Text>
                <Text style={Styles.Text}>
                    {this.props.Type}
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                    <Button
                        style={Styles.Button}
                        textStyle={{ color: '#fcb72b', alignSelf: 'center', fontSize: 20, fontFamily: Fonts.Helvetica }}
                        Text='Decline'
                        onPress={this.props.onDecilne}
                    />
                    <Button
                        style={Styles.Button}
                        textStyle={{ color: '#fcb72b', alignSelf: 'center', fontSize: 20, fontFamily: Fonts.Helvetica }}
                        Text='Accept'
                        onPress={this.props.onAccept}
                    />
                </View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#1a1a1a', padding: 5, borderColor: '#fcb72b', borderWidth: 1, margin: 10, borderRadius: 10
    },
    Button: {
        backgroundColor: '#333333', borderRadius: 20, padding: 15, marginHorizontal: 30, marginTop: 10
    },
    Text: {
        alignSelf: 'center', color: '#fcb72b', fontSize: 20, fontFamily: Fonts.Helvetica, width: '90%', textAlign: 'center'
    }
})
export default OneRequest