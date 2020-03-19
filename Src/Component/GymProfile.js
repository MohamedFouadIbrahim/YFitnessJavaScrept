import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { Me } from '../Actions/GymInfo';
import Button from '../Component/Button';
import { Fonts } from '../Fonts/insex';
import { getToken } from '../Screens/Application';
class GymProfile extends React.Component {
    constructor() {
        super()
    }
    _getData = async () => {
        const Token = await getToken()
        if (Token !== null) {
            this.props.Me(Token)
        } else { console.log('isnolll') }
    }
    render() {
        return (
            <View style={Styles.Container} >
                <NavigationEvents onDidFocus={() => { this._getData(); }} />
                <Text style={{ color: '#fcb72b', fontSize: 25, alignSelf: 'center', marginTop: 5, fontFamily: Fonts.Helvetica }} >
                    {this.props.Info.Name || 'Un Named'}
                </Text>
                <View style={{ flexDirection: 'row',justifyContent: 'space-between', marginTop: 5, marginHorizontal: 10 }} >
                    <Text style={{ color: '#fcb72b', fontSize: 25 }}>
                        {this.props.Info.Points || 0} Y
                 </Text>
                    <Text style={Styles.NumberTxt}>
                         {`ID : ${this.props.Info.Number || 0}`} 
                    </Text>
                </View>
                <Text style={{ color: '#fcb72b', fontSize: 20, alignSelf: 'center', marginTop: 5, fontFamily: Fonts.Helvetica }}>
                    {this.props.Info.Email || 'No Email'}
                </Text>
                <Button
                    style={Styles.Button}
                    Text='Charge For Players'
                    textStyle={{ alignSelf: 'center', color: '#fcb72b', fontSize: 20, fontFamily: Fonts.Helvetica }}
                    onPress={this.props.onPress}
                />
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    Button: {
        backgroundColor: '#333333',
        marginVertical: 20,
        paddingVertical: 10,
        alignSelf: 'center',
        width: '70%',
        textAlignVertical: 'center',
    },
    Container: {
        backgroundColor: '#1a1a1a', borderColor: '#fcb72b', borderWidth: 1, borderRadius: 10, margin: 10, padding: 5
    },
    NumberTxt: {
        paddingHorizontal: 10, color: '#fcb72b', fontSize: 15, backgroundColor: '#262626',borderRadius: 120,textAlignVertical: 'center', textAlign: 'center' 
    }
})
const mapStateToProps = state => {
    return {
        Info: state.GymInfo
    }
}
export default connect(mapStateToProps, { Me })(GymProfile)