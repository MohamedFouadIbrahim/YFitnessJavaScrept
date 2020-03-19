import Axios from 'axios';
import { MainUrl } from '../Root';
export const CancelRequest = (ReqId) => {
    return dispatch => {
        dispatch({ type: 'Canceling', payload: true })
        return Axios.post(`${MainUrl}/Api/Requets/cancelrequset`, { ReqId: ReqId })
            .then((value) => {
                dispatch({ type: 'Cancel', payload: value.data })
            })
            .catch((e) => { dispatch({ type: 'NotCancel', payload: e.response.data }) })
    }
}
