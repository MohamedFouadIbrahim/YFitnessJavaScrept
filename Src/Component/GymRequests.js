import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { AcceptRequest, DeclineRequest } from '../Actions/AceeptOrDeclineRequest';
import { Me } from '../Actions/GymInfo';
import { AllRequsets } from '../Actions/RequestForGyms';
import OneRequesForGym from '../Component/OneRequesForGym';
import { Fonts } from '../Fonts/insex';
class Requsest extends React.Component {
    constructor(props) {
        super(props);
        this._LoadData()
    }
    state = {
        s: false
    }

    Getdate(d) {
        const da = new Date(d)
        const Day = da.getDate() 
        const month = da.getMonth() + 1
        const Year = da.getFullYear()
        return `${Day}/${month}/${Year}`
    }

    AcceptRequest(ReqID, GymID, UserID, TransPoints) {
        this.props.AcceptRequest(ReqID, GymID, UserID, TransPoints)
            .then(() => {
                if (this.props.AcceptOrDecline.Accepted !== '') {
                    alert(this.props.AcceptOrDecline.Accepted)
                } else {
                    const { NotAccepted } = this.props.AcceptOrDecline;
                    alert(NotAccepted)
                }
            })
    }
    DeclineRequest(ReqID) {
        this.props.DeclineRequest(ReqID)
            .then(() => {
                if (this.props.AcceptOrDecline.Declined !== '') {
                    alert(this.props.AcceptOrDecline.Declined)
                    this.props.AllRequsets(this.props.Info._id)
                } else {
                    const { NotDeclined } = this.props.AcceptOrDecline;
                    alert(NotDeclined)
                }
            })
    }
    _LoadData = () => {
        AsyncStorage.getItem('token')
            .then((token) => {
                if (token != null) {
                    this.props.Me(token).then(() => { this.props.AllRequsets(this.props.Info._id) })
                }
            })
    }
    check() {
        if (this.props.Requsests.Loading == true) {
            return (
                <View style={{ flex: 1, justifyContent: 'center' }} >
                    <ActivityIndicator size='large' color='#fcb72b' />
                </View>
            )
        }
        else {
            if (this.props.Requsests.Allrequest.length == 0 && this.props.Requsests.Loading == false) {
                return (
                    <View style={{ flex: 1, justifyContent: 'center' }} >
                        <Text style={{ color: '#fcb72b', fontSize: 20, alignSelf: 'center', textAlignVertical: 'center' }} > You did not send Requests Yet </Text>
                    </View>
                )
            }
            else {
                if (this.props.Requsests.Loading == true) {
                    return (
                        <View style={{ flex: 1, justifyContent: 'center' }} >
                            <ActivityIndicator size='large' color='#fcb72b' />
                        </View>
                    )
                }
                return (
                    <View style={{ flex: 1 }} >
                        {this.props.AcceptOrDecline.Accepting == true || this.props.AcceptOrDecline.Declinting == true ?
                            <ActivityIndicator size='large' color='#fcb72b' /> :
                            <FlatList
                                data={this.props.Requsests.Allrequest}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => (
                                    <OneRequesForGym
                                        Type={item.Type}
                                        Show={false}
                                        Name={item.User.Name}
                                        Date={this.Getdate(item.Date)}
                                        onDecilne={() => { this.DeclineRequest(item._id) }}
                                        onAccept={() => {
                                            const ReqID = item._id
                                            const GymID = item.Gym._id
                                            const UserID = item.User._id
                                            const TransPoints = item.TransPoints
                                            this.AcceptRequest(ReqID, GymID, UserID, TransPoints)
                                        }}
                                    />
                                )
                                }
                            />
                        }
                    </View>
                )
            }
        }
    }
    render() { return this.check() }
}
const Styles = StyleSheet.create({
    Text: { color: '#fcb72b', alignSelf: 'center', fontSize: 20, fontFamily: Fonts.Helvetica, marginTop: 30 }
})
const mapStateToProps = state => {
    return {
        Requsests: state.Requests,
        Info: state.GymInfo,
        AcceptOrDecline: state.AcceptOrDecline
    }
}
export default connect(mapStateToProps, { AllRequsets, Me, AcceptRequest, DeclineRequest })(Requsest)