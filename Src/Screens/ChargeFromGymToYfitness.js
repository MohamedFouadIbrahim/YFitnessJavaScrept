import React from 'react';
import { ActivityIndicator,  Keyboard, StyleSheet, View } from 'react-native';
import Toast from 'react-native-easy-toast';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { Me } from '../Actions/GymInfo';
import { GymNumber, SendPointsToYFitness, TransPoints } from '../Actions/TransPointsfromGymToYfitness';
import BTN from '../Component/Button';
import Input from '../Component/TextInput';
import { Fonts } from '../Fonts/insex';
import AsyncStorage from '@react-native-community/async-storage';
class GymChargeToAdmin extends React.Component {
    static navigationOptions = {
        headerTransparent: true,
        headerTintColor: '#fcb72b'
    }
    loadInfo() {
        AsyncStorage.getItem('token')
            .then((token) => {
                if (token != null) {
                    this.props.Me(token)
                }
            })
    }
    onSendPoints() {
        Keyboard.dismiss()
        const { Number, _id } = this.props.Info
        const { TransPointss } = this.props.Sendding
        if (TransPointss <= 0 || _id == '') {
            this.refs.tost.show('Please Enter a Vaild Data ... !')
        } else {
            this.props.SendPointsToYFitness(Number, TransPointss)
                .then(() => {
                    if (this.props.Sendding.Error == '') {
                        this.refs.tost.show(this.props.Sendding.Sended)
                    } else { this.refs.tost.show(this.props.Sendding.Error) }
                })
                .catch((e) => { this.refs.tost.show(e) })
        }
        console.log(this.props.Info.Number)
        console.log(this.props.Sendding.TransPointss)
    }
    render() {
        return (
            <View style={{ paddingHorizontal: 30, flex: 1, justifyContent: 'center', backgroundColor: 'black' }} >
                <Toast ref='tost' defaultCloseDelay={100} style={{ backgroundColor: 'black', borderRadius: 20 }}
                    position='bottom'
                    fadeInDuration={1000}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{ color: 'white' }}
                />
                <NavigationEvents
                    onDidFocus={() => {
                        // const { Number } = this.props.Info
                        //   this.props.GymNumber(Number)
                        this.loadInfo()
                    }}
                />
                <Input
                    style={styles.TextInput}
                    placeholder='Point Count'
                    onChangeText={(e) => { this.props.TransPoints(parseInt(e, 10)) }}
                />
                {this.props.Sendding.Loading == true ? <ActivityIndicator size='large' color='#fcb72b' /> : <View />}
                <BTN
                    style={styles.Button}
                    textStyle={{ fontSize: 20, color: '#fcb72b', alignSelf: 'center', fontFamily: Fonts.Helvetica }}
                    Text='Repalce'
                    onPress={() => { this.onSendPoints() }}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#333333', marginTop: 40, alignSelf: 'center', width: '100%', padding: 5
    },
    TextInput: {
        paddingLeft: 70,
        paddingBottom: 5,
        borderBottomColor: '#fcb72b',
        borderBottomWidth: 0.2,
        fontSize: 20,
        fontFamily: Fonts.Helvetica,
        width: '100%',
        color: '#fcb72b',
        marginVertical: 10

    },
})

const mapStateToProps = state => {
    return {
        Sendding: state.SendPointsToYfitness,
        Info: state.GymInfo
    }
}
export default connect(mapStateToProps, { TransPoints, GymNumber, SendPointsToYFitness, Me })(GymChargeToAdmin)