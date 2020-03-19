import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { AcceptRequest } from '../Actions/AceeptOrDeclineRequest';
import { CancelRequest } from '../Actions/CancelRequest';
import { Me } from '../Actions/MyInfo';
import { AllRequsets } from '../Actions/RequestForUsers';
import OneRequestForUsers from '../Component/OneRequestForUsers';
import AsyncStorage from '@react-native-community/async-storage';
class Requsest extends React.Component {
    constructor() {
        super()
    }
    componentDidMount() {
        this._loadInfo()
    }

    Getdate(d) {
        const da = new Date(d)
        const Day = da.getDate()
        const month = da.getMonth() + 1
        const Year = da.getFullYear()
        return `${Day}/${month}/${Year}`
    }
    getTime(time) {
        const d = new Date(time)
        if (d.getHours() > 12) {
            return `${d.getHours() - 12} : ${d.getMinutes() + 1} Pm `
        } else {
            return `${d.getHours()} : ${d.getMinutes() + 1} Am `
        }
    }
    onCansel(_id) {
        this.props.CancelRequest(_id)
            .then(() => {
                if (this.props.Cancel.NotCanceled == '') {
                    alert(this.props.Cancel.Canceled)
                }
            }).then(() => { this._loadInfo() })
    }
    componentDidUpdate() {
        console.log('Did Updated ..')
    }

    onAcceptRequest(ReqId, GymId, UserId, TransPoints) {
        this.props.AcceptRequest(ReqId, GymId, UserId, TransPoints)
            .then(() => {
                if (this.props.Accept.Accepted != '') {
                    alert(this.props.Accept.Accepted)
                }
                else if (this.props.Accept.NotAccepted != '') {
                    alert(this.props.Accept.NotAccepted)
                }
            }).then(() => { this._loadInfo() })
    }
    Check() {
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
                        {this.props.Accept.Accepting == true || this.props.Cancel.Canceling == true ?
                            <ActivityIndicator size='large' color='#fcb72b' />
                            : <OneRequestForUsers
                                loading={this.props.Accept.Accepting || this.props.Accept.Canceling}
                                Name={this.props.Requsests.Allrequest[0].Gym.Name}
                                Status={this.props.Requsests.Allrequest[0].Status}
                                Type={this.props.Requsests.Allrequest[0].Type}
                                Date={this.Getdate(this.props.Requsests.Allrequest[0].Date)}
                                onCansel={() => { this.onCansel(this.props.Requsests.Allrequest[0]._id) }}
                                Time={this.getTime(this.props.Requsests.Allrequest[0].Date)}
                                onAccept={() => {
                                    this.onAcceptRequest(
                                        this.props.Requsests.Allrequest[0]._id,
                                        this.props.Requsests.Allrequest[0].Gym._id,
                                        this.props.Requsests.Allrequest[0].User._id,
                                        this.props.Requsests.Allrequest[0].TransPoints,
                                        this.props.Requsests.Allrequest[0].Type)
                                }}
                            />
                        }
                    </View>
                )
            }
        }
    }
    _loadJustRequests = () => {
        this.props.AllRequsets(this.props.Info._id)
    }
    _loadJustInfo = () => {
        AsyncStorage.getItem('token')
            .then((token) => {
                if (token != null) {
                    this.props.Me(token)
                }
            })
    }
    _loadInfo = () => {
        AsyncStorage.getItem('token')
            .then((token) => {
                if (token != null) {
                    this.props.Me(token).then(() => { this.props.AllRequsets(this.props.Info._id) })
                }
            })
    }
    render() { return this.Check() }
}
const mapStateToProps = state => {
    return {
        Requsests: state.RequestsForUsers,
        Info: state.MyInfo,
        Cancel: state.CancelRequest,
        Accept: state.AcceptOrDecline
    }
}
export default connect(mapStateToProps, { AllRequsets, Me, CancelRequest, AcceptRequest })(Requsest)