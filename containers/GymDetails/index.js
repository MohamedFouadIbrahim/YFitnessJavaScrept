import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import Button from '../../components/Button';
import { Requet, RequetCardio } from '../../Service/UserService';
import DayesView from '../../components/DayesView';

class GymDetails extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            lockSubmit: false
        }

        this.lockSubmit = false
    }

    static navigationOptions = {
        headerTransparent: true,
        headerTintColor: '#fcb72b'
    }

    render() {

        const { 
            Name,
            Points,
            GymId,
            UserId,
            Man,
            Women
        } = this.props.navigation.state.params

        return (
            <View style={styles.container} >
                <Text style={styles.Text}>
                    {Name}
                </Text>
                <ScrollView style={styles.containerOf} >
                    <View>
                    </View>
                    {this.state.lockSubmit == true ?
                        <ActivityIndicator size='large' color='#fcb72b' /> :
                        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }} >
                            <Button
                                style={styles.Button}
                                Text='Gym Request'
                                onPress={() => {
                                    this.setState({ lockSubmit: true })
                                    this.lockSubmit = true
                                    Requet({ GymId, UserId, TransPoints: Points, Type: 'Gym' }, (res) => {
                                        this.setState({ lockSubmit: false })
                                        this.lockSubmit = false
                                        this.props.navigation.navigate('Profile')
                                    }, err => {
                                        this.setState({ lockSubmit: false })
                                        this.lockSubmit = false
                                    })
                                }}
                            />
                            <Text style={styles.Text}>
                                {Math.ceil(Points * 20 / 100) + Points} Y
                    </Text>
                        </View>
                    }
                    {this.state.lockSubmit ?
                        <ActivityIndicator size='large' color='#fcb72b' /> :
                        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }} >
                            <Button
                                style={styles.Button}
                                textStyle={styles.ButtonText}
                                Text=' Gym With Cardio Request'
                                onPress={() => {

                                    this.setState({ lockSubmit: true })
                                    this.lockSubmit = true
                                    RequetCardio({
                                        GymId, UserId, TransPoints: Points, Type = 'Cardio'
                                    }, res => {
                                        this.props.navigation.navigate('Profile')
                                        this.setState({ lockSubmit: false })
                                        this.lockSubmit = false
                                    }, err => {
                                        this.setState({ lockSubmit: false })
                                        this.lockSubmit = false
                                    })

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
export default GymDetails