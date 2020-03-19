import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Axios from 'axios';
import { MainUrl } from '../../Root';
class BoxInPoints extends React.Component {
    static navigationOptions = {
        headerTransparent: true,
        headerTintColor: '#ffffbe'
    }
    componentDidMount() {
        Axios.post(`${MainUrl}/Api/Y/adminpointsdetails`).then((v) => {
            const { AdminPointCount, GympointCount, UsersPointCount, OurBoxPointCount, YFitnessUserCount } = v.data
            this.setState({
                AdminTable: AdminPointCount,
                UserTable: UsersPointCount,
                GymTable: GympointCount,
                OurBoxTable: OurBoxPointCount,
                YFITNESSTABLE: YFitnessUserCount,
                AllCount: AdminPointCount + UsersPointCount + GympointCount + OurBoxPointCount 
            })
        }).catch((e) => {
            if (e.response) { alert(e.response.data) } else { alert(e.message) }
        })
    }
    state = {
        AdminTable: 0,
        YFITNESSTABLE: 0,
        UserTable: 0,
        GymTable: 0,
        OurBoxTable: 0,
        AllCount: 0
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-around', backgroundColor: 'black' }} >
                <Text style={styles.Text}>{`User Table: ${this.state.UserTable}`}</Text>
                <Text style={styles.Text}>{`Gym Table: ${this.state.GymTable}`}</Text>

                <Text style={styles.Text}>{`Admin Table: ${this.state.AdminTable}`}</Text>
                <Text style={styles.Text}>{`User Yfitness : ${this.state.YFITNESSTABLE}`}</Text>

                <Text style={styles.Text}>{`OurBox: ${this.state.OurBoxTable}`}</Text>
                <Text style={styles.Text}>{`All Point In Yor Account : ${this.state.AllCount}`}</Text>
            </View>
        )
    }
}
export default BoxInPoints
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333333', alignSelf: 'center', width: '95%', padding: 5
    },
    Text: {
        color: '#fcb72b', fontSize: 20, fontWeight: 'bold', alignSelf: 'center'
    }
}) 
