import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import Button from '../Component/Button';
import { Requet, RequetCardio } from '../Actions/AddRequests';
import { connect } from 'react-redux';
import DayesView from '../Component/DayesView';
class GymDetails extends React.Component {

    static navigationOptions = {
        headerTransparent: true,
        headerTintColor: '#fcb72b'
    }

    render() {
        const Name = this.props.navigation.getParam('Name');
        const Points = this.props.navigation.getParam('Points');
        const GymId = this.props.navigation.getParam('GymId');
        const UserId = this.props.navigation.getParam('UserId');
        const Man = this.props.navigation.getParam('Man');
        const Women = this.props.navigation.getParam('Women');
        return (
            <View style={styles.container} >
                <Text style={styles.Text}>
                    {Name}
                </Text>
                <ScrollView style={styles.containerOf} >
                    <View>
                    </View>
                    {this.props.add.Loading == true ?
                        <ActivityIndicator size='large' color='#fcb72b' /> :
                        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }} >
                            <Button
                                style={styles.Button}
                                textStyle={styles.ButtonText}
                                Text='Gym Request'
                                onPress={() => {
                                    if (GymId == '' || UserId == '' || Points == 0) {
                                        alert('Some Thing Wrong Please Try agin Later.....')
                                    } else {
                                        this.props.Requet(GymId, UserId, Points).then(() => {
                                            if (this.props.add.Sucess != '') {
                                                alert(this.props.add.Sucess)
                                                this.props.navigation.navigate('Profile')
                                            } else {
                                                alert(this.props.add.Fail)
                                                this.props.navigation.navigate('Profile')
                                            }
                                        }).catch(() => { alert(this.props.add.Fail) })
                                    }
                                }}
                            />
                            <Text style={styles.Text}>
                                {Math.ceil(Points * 20 / 100) + Points} Y
                    </Text>
                        </View>
                    }
                    {this.props.addC.LoadingC == true ?
                        <ActivityIndicator size='large' color='#fcb72b' /> :
                        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }} >
                            <Button
                                style={styles.Button}
                                textStyle={styles.ButtonText}
                                Text=' Gym With Cardio Request'
                                onPress={() => {
                                    if (GymId == '' || UserId == '' || Points == 0) {
                                        alert('Some Thing Wrong Please Try agin Later.....')
                                    } else {
                                        this.props.RequetCardio(GymId, UserId, Points).then(() => {
                                            if (this.props.addC.SucessC != '') {
                                                alert(this.props.addC.SucessC)
                                                this.props.navigation.navigate('Profile')
                                            } else {
                                                alert(this.props.addC.FailC)
                                                this.props.navigation.navigate('Profile')
                                            }
                                        }).catch(() => { alert(this.props.addC.FailC) })
                                    }
                                }}
                            />
                            <Text style={styles.Text}>
                                {Math.ceil(Points * 25 / 100) + Points + Math.ceil(Points * 25 / 100)} Y
                                </Text>
                        </View>
                    }
                    <View style={{ marginTop: 20, marginLeft: 30 }} >
                        <DayesView Man={Man} Women={Women} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        add: state.AddRequset,
        addC:state.AddRequestc
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', backgroundColor: 'black' },
    Text: {
        color: '#fcb72b', fontSize: 15, alignSelf: 'center', marginVertical: 10
    },
    Button: {
        backgroundColor: '#fcb72b', padding: 5, marginHorizontal: 30, marginTop: 10, alignSelf: 'center',
        width: 250
    },
    ButtonText: {
        color: 'black', alignSelf: 'center', fontSize: 15
    },
    containerOf: {
        backgroundColor: '#1a1a1a', padding: 5, borderRadius: 20
    },
})
export default connect(mapStateToProps, { Requet, RequetCardio })(GymDetails)