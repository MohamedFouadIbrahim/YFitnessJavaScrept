import Axios from 'axios';
import { MainUrl } from '../Root';
export const Me = (token) => {
    return async (dispatch) => {
       return Axios.get(`${MainUrl}/Api/Users/me`, { headers: { Authorization: token } })
        .then((value) => {
            dispatch({ type: 'Sucess', payload: value.data })
        }).catch((e) => {
            dispatch({ type: 'Fail', payload: e.response.data.Erorr })
        })
    }
}