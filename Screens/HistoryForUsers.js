import React from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import HistoryList from '../Component/HistoryList';
import { AllRequsetss } from '../Actions/RequestForUsers';
import { connect } from 'react-redux';
import { Fonts } from '../Fonts/insex';
import Button from '../Component/Button';
import AsyncStorage from '@react-native-community/async-storage';
class HistoryForUsers extends React.Component {
    constructor(props) {
        super(props)
        this._laodData()
        this.state = {
            Refresh: false
        }
    }
    static navigationOptions = {
        headerTransparent: true,
        headerTintColor: '#fcb72b'

    }
    handelOnRefresh = () => {
        this.setState({ Refresh: true }, () => {
            this._laodData()
        })
        this.setState({ Refresh: false })
    }
    _laodData = () => { this.props.AllRequsetss(this.props.Info._id) }
    render() {
        return (
            <ScrollView
                refreshControl={<RefreshControl refreshing={this.state.Refresh} onRefresh={this.handelOnRefresh} />}
                contentContainerStyle={Styles.Contailner}>
                {this.props.Requests.Allrequests.length == 0 && this.props.Requests.Loading == false ? <View style={Styles.SubContainer} >
                    <Text style={Styles.Text} > No History For You </Text>
                </View> : <HistoryList ref='H' type='User' data={this.props.Requests.Allrequests.reverse()} />
                }
                <View style={{ bottom: 10, flexDirection: 'row', justifyContent: 'space-around' }} >
                    <Button style={styles.container} textStyle={styles.Text} Text='Change Password' onPress={() => { this.props.navigation.navigate('ChangeUserPassword') }} />
                    <Button style={styles.container} textStyle={styles.Text} Text='Log out' onPress={() => { AsyncStorage.clear().then(() => { this.props.navigation.navigate('LoadingScreen') }) }} />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1a1a1a', borderColor: '#333333', borderWidth: 1,
        marginTop: 20, alignSelf: 'center', width: '40%', padding: 5
    },
    Text: {
        color: '#fcb72b', fontSize: 15, alignSelf: 'center'
    }
})
const Styles = StyleSheet.create({
    Contailner: {
        flex: 1, paddingTop: 50, backgroundColor: 'black'
    },
    SubContainer: {
        flex: 1, justifyContent: 'center'
    },
    Text: {
        color: '#fcb72b', alignSelf: 'center', fontSize: 20, fontFamily: Fonts.Helvetica
    }
})
const mApsateToProps = state => {
    return {
        Requests: state.Requests,
        Info: state.MyInfo,
    }
}
export default connect(mApsateToProps, { AllRequsetss })(HistoryForUsers)