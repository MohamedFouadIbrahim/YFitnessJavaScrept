import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import Button from '../../components/Button';
import backround from '../../Photo/Logo.png';
import { HowIsMe } from '../../Service/ApplicationService';
import { getToken } from '../../utlits/Application';

class Loading extends React.Component {

    state = {
        Loading: false
    }

    handelType = (type) => {
        switch (type) {
            case 'Gym':
                this.props.navigation.navigate('Gym')
                break;
            case 'User':
                this.props.navigation.navigate('User')
                break;
            case 'Admin':
                this.props.navigation.navigate('Admin')
                break;
            default:
                this.props.navigation.navigate('Auth')
                return
        }
    }

    Init = () => {

        this.setState({ Loading: true })

        getToken(token => {
            if (token) {

                HowIsMe(token, type => {
                    this.handelType(type)
                }, () => {
                    this.setState({ Loading: false })
                    alert('No Connection')
                })

            } else {
                this.props.navigation.navigate('Auth')
                return
            }

        }, err => {
            this.setState({ Loading: false })
            this.props.navigation.navigate('Auth')
        })


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
                            style={{ backgroundColor: '#fcb72b', padding: 10, marginTop: 40 }}
                            onPress={this.Init} />
                        <Button
                            style={{ backgroundColor: '#1a1a1a', padding: 10, marginTop: 330, width: 60 }}
                            textStyle={{ alignSelf: 'center', color: 'black', fontSize: 10 }}
                            Text='Log out'
                            onPress={() => { AsyncStorage.clear().then(() => { this.props.navigation.navigate('Auth') }) }}
                        />
                    </View>
                }

            </View>
        )
    }
}
//#
export default Loading