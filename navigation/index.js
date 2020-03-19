import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Login from "../Screens/Login";
import Welcome from "../Screens/Welcome";
import UserOrGym from "../Screens/UserOrGym";
import RegistUsers from "../Screens/RegistUsers";
import RegistGyms from "../Screens/RegistGyms";
import WelcomeGym from "../Screens/WelcomeGym";
import LoginGyms from '../Screens/LoginGyms';
import Maps from '../Screens/Map';
import Charge from '../Screens/Charge';
import Profile from '../Screens/Profile';
import GymProfile from '../Screens/GymProfile';
import GymDetails from '../Screens/GymDetails';
import Registting from '../Screens/RegistGym2';
import HistoryForGyms from '../Screens/HistoryForGyms';
import RegistUserss from '../Screens/RegistUser2';
import LoadingScreen from '../Screens/LoadingScreen';
import ChargeFromGymToYfitness from '../Screens/ChargeFromGymToYfitness';
import ChangeUserPassword from '../Screens/ChangePassword';
import UserDetails from '../Screens/UserDetailsForCharge';
import HistoryForUsers from '../Screens/HistoryForUsers';
import YFitnessPage from '../Screens/YfitnessPage';
import User from './User';
import {
    AdminScreen, ChargeForGym, RForGym, Rewards, RforUser,
    SetLocation, OnClassSet,
    ChargeForPlayer,
    ChangePassword,
    Detalis,
    PassswordUsers, PasswordGyms
    , BoxInPoints, DtailsForSetWorkTime, WorkTime, diactivedgym,
    WorkTimeListView
} from '../Screens/Admins/index';
const Auth = createStackNavigator({ UserOrGym, Welcome, Login, LoginGyms, RegistUsers, WelcomeGym, RegistUserss });
const Gym = createStackNavigator({ GymProfile, HistoryForGyms, Charge, ChargeFromGymToYfitness, UserDetails })
const Admin = createStackNavigator({
    AdminScreen,
    ChargeForGym,
    RForGym,
    Rewards,
    RforUser,
    SetLocation,
    OnClassSet,
    ChargeForPlayer,
    ChangePassword,
    Detalis,
    PassswordUsers,
    PasswordGyms,
    BoxInPoints,
    DtailsForSetWorkTime,
    WorkTime,
    diactivedgym,
    RegistGyms, Registting,
    WorkTimeListView
})
const Main = createSwitchNavigator({ LoadingScreen, Auth, User, Gym, Admin },{headerTransparent: true})
export default createAppContainer(Main);
