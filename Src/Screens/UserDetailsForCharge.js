import React from 'react';
import { ActivityIndicator, Keyboard, StyleSheet, View } from 'react-native';
import Toast from 'react-native-easy-toast';
import { connect } from 'react-redux';
import { Me } from '../Actions/GymInfo';
import { SendPoints, TransPoints, UserNumber } from '../Actions/TransPointsFromGymToUsers';
import BTN from '../Component/Button';
import Input from '../Component/TextInput';
import UserProfile from '../Component/UserProfile';
import { Fonts } from '../Fonts/insex';
class UserDetails extends React.Component {
    static navigationOptions = {
        headerTransparent: true,
        headerTintColor: 'white'
    }
    state = { show: true }
    onSendPoints() {
        const Number = this.props.navigation.getParam('Number', '');
        Keyboard.dismiss()
        const { _id } = this.props.Info
        const { TransPoints } = this.props.Sendding
        if (Number == 0 || TransPoints <= 0 || _id == '', TransPoints == '') {
            this.refs.tost.show('Please Enter a Vaild Data ... !')
            this.setState({ show: true })
        } else {
            this.props.SendPoints(_id, Number, TransPoints)
                .then(() => {
                    if (this.props.Sendding.Error == '') {
                        this.setState({ show: true })
                        alert(this.props.Sendding.Sended)
                        this.props.navigation.navigate('GymProfile')
                    } else {
                        this.refs.tost.show(this.props.Sendding.Error)
                        this.setState({ show: true })
                    }
                })
                .catch((e) => {
                    this.refs.tost.show(e)
                    this.setState({ show: true })
                })
        }
    }
    render() {
        const Name = this.props.navigation.getParam('Name', '');
        const Number = this.props.navigation.getParam('Number', '');
        return (
            <View ref='v' style={{ paddingHorizontal: 30, flex: 1, justifyContent: 'center', backgroundColor: 'black' }}>
                <Toast ref='tost' defaultCloseDelay={100} style={{ backgroundColor: 'black', borderRadius: 20 }}
                    position='bottom'
                    fadeInDuration={1000}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{ color: 'white' }}
                />
                <UserProfile
                    Name={Name}
                    Number={Number}
                    Points={null}
                />
                <Input
                    style={styles.TextInput}
                    placeholder='Point Count'
                    onChangeText={(e) => { this.props.TransPoints(parseInt(e, 10)) }}
                />
                {this.props.Sendding.Loading == true ? <ActivityIndicator size='large' color='#fcb72b' /> : <View />}
                {this.state.show == true ?
                    <BTN
                        style={styles.Button}
                        textStyle={{ fontSize: 20, color: '#fcb72b', alignSelf: 'center', fontFamily: Fonts.Helvetica }}
                        Text='Charge'
                        onPress={() => { this.setState({ show: false }, () => { this.onSendPoints() }) }}
                    /> : <View />}
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
        Sendding: state.SendPoints,
        Info: state.GymInfo
    }
}
export default connect(mapStateToProps, { SendPoints, TransPoints, UserNumber, Me })(UserDetails)