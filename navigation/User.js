import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Hist from '../Photo/H.jpg';
import MapImage from '../Photo/Map.png';
import Noti from '../Photo/Noti.png';
import ChangeUserPassword from '../Screens/ChangePassword';
import GymDetails from '../containers/GymDetails';
import HistoryForUsers from '../Screens/HistoryForUsers';
import Maps from '../containers/Map';
import Profile from '../Screens/Profile';
import YFitnessPage from '../Screens/YfitnessPage';

const MapStack = createStackNavigator({
    Maps,
    GymDetails
}, { headerTransparent: true, headerMode: 'none' })

const ProfileStack = createStackNavigator({
    Profile,
    YFitnessPage,
    ChangeUserPassword
}, { headerTransparent: true, headerMode: 'none' })

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
    History: {
        screen: HistoryForUsers,
        navigationOptions: {
            tabBarIcon: <Image source={Hist} style={{ width: 25, height: 25 }} />
        }
    }
})
export default createAppContainer(UserApp)