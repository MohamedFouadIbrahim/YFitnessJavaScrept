import Axios from 'axios';
import { MainUrl } from '../Root';
import AsyncStorage from '@react-native-community/async-storage';
const getToken = async () => {
    try {
        const Token = await AsyncStorage.getItem('token')
        if (Token !== null) {
            return Token
        }
        return null
    }
    catch (e) {
        return null
    }
}
const setToken = async (Token) => {
    return AsyncStorage.setItem('token', Token)
        .then(() => {
            return true
        })
        .catch(() => {
            return false
        })
}
const HowIsMe = async (token, noConnetction) => {
    return Axios.get(`${MainUrl}/Api/Gyms/me`, { headers: { Authorization: token } })
        .then((value) => {
            if (value.data.Age && value.data.Email !== 'yfitness@yfitness.com') {
                return 'User'
            } else if (value.data.Email == 'yfitness@yfitness.com') {
                return 'Admin'
            }
            else { return 'Gym' }
        })
        .catch(() => {
            noConnetction()
        })
}
export {
    setToken,
    getToken,
    HowIsMe
}