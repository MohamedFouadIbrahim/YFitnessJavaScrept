import Axios from 'axios';
import { MainUrl } from '../Root';
export const AllRequsets = (UserId) => {
    return dispatch => {
        Axios.post(`${MainUrl}/Api/Requets/allrequsetforuser`, { UserId: UserId })
            .then((value) => {
                dispatch({ type: 'allrequest', payload: value.data })
            })
            .catch((e) => { dispatch({ type: 'erorr', payload: e.Error.response.data }) })
    }
}
export const AllRequsetss = (UserId) => {
    return dispatch => {
        Axios.post(`${MainUrl}/Api/Requets/allrequsetforusers`, { UserId: UserId })
            .then((value) => {
                dispatch({ type: 'allrequests', payload: value.data })
            })
            .catch((e) => { dispatch({ type: 'erorrs', payload: e.Error.response.data }) })
    }
}