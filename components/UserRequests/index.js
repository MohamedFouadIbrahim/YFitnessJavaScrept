import React from 'react';
import { Text, View } from 'react-native';
import { loadMyInfo } from '../../utlits/Application';
import { AllRequsets, AcceptRequest, CancelRequest } from '../../Service/UserService';
import RequestItem from './RequestItem';

class Requsest extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            MyInfo: null,
            dataFetched: false,
            AllRequsets: []
        }

    }

    componentDidMount() {

        loadMyInfo(data => {
            this.setState({
                MyInfo: data
            })
        })

        AllRequsets(this.props.UserId, res => {
            this.setState({ AllRequsets: res.data })
        })

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
        CancelRequest(_id, res => {
            alert('request Canceld')
        })
    }

    onAcceptRequest(ReqId, GymId, UserId, TransPoints, Type) {

        AcceptRequest({ ReqId, GymId, UserId, TransPoints, Type }, res => {
            alert('Request Accepted')
        }, err => {
            alert('Request Decline')
        })

    }

    render() {
        const { AllRequsets } = this.state

        if (AllRequsets.length <= 0) {
            return (
                <View style={{ flex: 1, justifyContent: 'center' }} >
                    <Text style={{ color: '#fcb72b', fontSize: 20, alignSelf: 'center', textAlignVertical: 'center' }} > You did not send Requests Yet </Text>
                </View>
            )
        }
        return (
            <View>
                <RequestItem
                    Name={AllRequsets[0].Gym.Name}
                    Status={AllRequsets[0].Status}
                    Type={AllRequsets[0].Type}
                    Date={this.Getdate(AllRequsets[0].Date)}
                    onCansel={() => { this.onCansel(AllRequsets[0]._id) }}
                    Time={this.getTime(AllRequsets[0].Date)}
                    onAccept={() => {
                        this.onAcceptRequest(
                            AllRequsets[0]._id,
                            AllRequsets[0].Gym._id,
                            AllRequsets[0].User._id,
                            AllRequsets[0].TransPoints,
                            AllRequsets[0].Type)
                    }}
                />
            </View>
        )
    }

}

export default Requsest