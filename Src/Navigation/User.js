import React from 'react';
import { Image } from 'react-native';
import MapImage from '../Photo/Map.png';
import Noti from '../Photo/Noti.png';
import S from '../Photo/S.png';
import Hist from '../Photo/H.jpg';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Maps from '../Screens/Map';
import Profile from '../Screens/Profile';
import ChangeUserPassword from '../Screens/ChangePassword';
import HistoryForUsers from '../Screens/HistoryForUsers';
import YFitnessPage from '../Screens/YfitnessPage';
import GymDetails from '../Screens/GymDetails';
const MapStack = createStackNavigator({ Maps, GymDetails },{headerTransparent: true, headerMode: 'none'})
const ProfileStack = createStackNavigator({ Profile, YFitnessPage, ChangeUserPassword },{headerTransparent: true, headerMode: 'none'})
const UserApp = createBottomTabNavigator({
    Map: {
        screen: MapStack,
        navigationOptions: {
            tabBarIcon: <Image source={MapImage} style={{ width: 25, height: 25 }} />,
            headerMode: 'none'
        },
        
    }, Profile: {
        screen: ProfileStack,
        navigationOptions: {
            tabBarIcon: <Image source={Noti} style={{ width: 25, height: 25 }} />
        }
    },
    History:{
        screen: HistoryForUsers,
        navigationOptions: {
            tabBarIcon: <Image source={Hist} style={{ width: 25, height: 25 }} />
        }
    }
})
export default createAppContainer(UserApp)