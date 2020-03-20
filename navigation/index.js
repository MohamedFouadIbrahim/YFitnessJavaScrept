import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { AdminScreen, BoxInPoints, ChangePassword, ChargeForGym, ChargeForPlayer, Detalis, diactivedgym, DtailsForSetWorkTime, OnClassSet, PassswordUsers, PasswordGyms, Rewards, RForGym, RforUser, SetLocation, WorkTime, WorkTimeListView } from '../Screens/Admins/index';
import Charge from '../Screens/Charge';
import ChargeFromGymToYfitness from '../Screens/ChargeFromGymToYfitness';
import GymProfile from '../Screens/GymProfile';
import HistoryForGyms from '../Screens/HistoryForGyms';
import LoadingScreen from '../containers/Splash/index';
import Login from "../Screens/Login";
import LoginGyms from '../Screens/LoginGyms';
import Registting from '../Screens/RegistGym2';
import RegistGyms from "../Screens/RegistGyms";
import RegistUserss from '../Screens/RegistUser2';
import RegistUsers from "../Screens/RegistUsers";
import UserDetails from '../Screens/UserDetailsForCharge';
import UserOrGym from "../Screens/UserOrGym";
import Welcome from "../Screens/Welcome";
import WelcomeGym from "../Screens/WelcomeGym";
import User from './User';

const Auth = createStackNavigator({
    UserOrGym,
    Welcome,
    Login,
    LoginGyms,
    RegistUsers,
    WelcomeGym,
    RegistUserss
});

const Gym = createStackNavigator({
    GymProfile,
    HistoryForGyms,
    Charge,
    ChargeFromGymToYfitness,
    UserDetails
})

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

const Main = createSwitchNavigator({
    LoadingScreen,
    Auth,
    User,
    Gym,
    Admin
}, { headerTransparent: true })

export default createAppContainer(Main);
