import GymProfile from '../Screens/GymProfile';
import HistoryForGyms from '../Screens/HistoryForGyms';
import Charge from '../Screens/Charge';
import { createStackNavigator, createAppContainer } from 'react-navigation';
const Gym = createStackNavigator({ GymProfile, HistoryForGyms, Charge })
export default createAppContainer(Gym)