import { combineReducers } from 'redux';
import Regist from './RegistUser'
import Login from './LoginUsers';
import RegistGyms from './RegistGyms';
import LoginGyms from './LoginGyms';
import Maps from './Maps';
import MyInfo from './MyInfo';
import GymInfo from './GymInfo';
import allrequest from './ReusetsForGyms';
import AcceptOrDecline from './AcceptOrDecline';
import SendPoints from './TransPointsFromGymToUsers';
import SendPointsToYfitness from './TransPointsFromGymToYfitness';
import RequestsForUsers from './RequestsForUsers';
import CancelRequest from './CancelRequest';
import AddRequset from './AddRequset';
import AllGymsForMap from './AllGymsForMap';
import ResetUserPassword from './ResetUserPassword';
import AddRequestc from './AddRequestc';
export default combineReducers({
    Regist,
    Login,
    RegistGyms,
    LoginGyms,
    Maps,
    MyInfo,
    GymInfo,
    Requests: allrequest,
    AcceptOrDecline,
    SendPoints,
    RequestsForUsers,
    CancelRequest,
    AddRequset,
    AllGymsForMap,
    SendPointsToYfitness,
    ResetUserPassword,
    AddRequestc
})