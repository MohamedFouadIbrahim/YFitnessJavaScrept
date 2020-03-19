import Axios from 'axios';
import { MainUrl } from '../Root';
export const AllRequsets = (GymId) => {
    return dispatch => {
        Axios.post(`${MainUrl}/Api/Requets/allrequestforgym`, { GymId: GymId })
            .then((value) => {
                dispatch({ type: 'allrequest', payload: value.data })
            })
            .catch((e) => {
                if (e.response) {
                    dispatch({ type: 'erorr', payload: e.Error.response.data })
                }
                else { dispatch({ type: 'erorr', payload: e.message }) }
            })
    }
}
export const AllRequsetss = (GymId) => {
    return dispatch => {
        Axios.post(`${MainUrl}/Api/Requets/allrequestforgyms`, { GymId: GymId })
            .then((value) => {
                dispatch({ type: 'allrequests', payload: value.data })
            })
            .catch((e) => {
                if (e.response) {
                    dispatch({ type: 'erorrs', payload: e.Error.response.data })
                }
                else { dispatch({ type: 'erorrs', payload: e.message }) }
            })
    }
}