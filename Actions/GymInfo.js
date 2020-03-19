import Axios from 'axios';
import { MainUrl } from '../Root';
export const Me = (token) => {
    return dispatch => {
        return Axios.get(`${MainUrl}/Api/Gyms/me`, { headers: { Authorization: token } })
            .then((value) => {
                dispatch({ type: 'GymInfo', payload: value.data })
            })
            .catch((e) => {
                if (e.response) {
                    dispatch({ type: 'GymInfoFail', payload: e.response.data.Erorr })
                } else { dispatch({ type: 'GymInfoFail', payload: e.message }) }
            })
    }
}