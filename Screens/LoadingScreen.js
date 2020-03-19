import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import Button from '../Component/Button';
import { Fonts } from '../Fonts/insex';
import backround from '../Photo/Logo.png';
import { getToken, HowIsMe } from '../Screens/Application';
class Loading extends React.Component {
    state = {
        Loading: false
    }
    Init = async () => {
        this.setState({ Loading: true })
        try {
            const g = await getToken()
            if (g !== null) {
                const type = await HowIsMe(g, () => {
                    alert('NoConnection')
                    this.setState({ Loading: false })
                })
                if (type == 'Gym') {
                    this.props.navigation.navigate('Gym')
                } else if (type == 'User') {
                    this.props.navigation.navigate('User')
                }
                else if (type == 'Admin') {
                    this.props.navigation.navigate('Admin')
                }
            } else {
                this.props.navigation.navigate('Auth')
            }
        } catch (e) {
            this.props.navigation.navigate('Auth')
        }
    }
    componentDidMount() {
        this.Init()
    }
    render() {
        return (
            <View style={{ backgroundColor: 'black', justifyContent: 'center', flex: 1 }} >
                <Image source={backround} resizeMode='stretch' style={{ alignSelf: 'center', height: 200, width: 200 }} />
                {this.state.Loading == true ?
                    <ActivityIndicator size='large' color='#fcb72b' /> :
                    <View>
                        <Button 
                        Text='ReTry' 
                        textStyle={{ alignSelf: 'center', color: 'black', fontFamily: Fonts.Helvetica, fontSize: 20 }}
                            style={{ backgroundColor: '#fcb72b', padding: 10, marginTop: 40 }}
                        onPress={() => {
                            this.Init()
                        }} />
                        <Button 
                        style={{ backgroundColor: '#1a1a1a', padding: 10, marginTop: 330 , width: 60  }}
                        textStyle={{ alignSelf: 'center', color: 'black', fontFamily: Fonts.Helvetica, fontSize: 10 }} Text='Log out' onPress={() => { AsyncStorage.clear().then(() => { this.props.navigation.navigate('Auth') }) }}
                        />
                    </View>    
                }
                
            </View>
        )
    }
}
//#
export default Loading