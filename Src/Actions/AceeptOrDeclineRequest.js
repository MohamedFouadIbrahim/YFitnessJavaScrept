import Axios from 'axios';
import { MainUrl } from '../Root';
export const AcceptRequest = (ReqId, GymId, UserId, TransPoints,Type) => {
    return async dispatch => {
        dispatch({ type: 'Accepting', payload: true })
        return Axios.post(`${MainUrl}/Api/Requets/acceptrequest`, { ReqId, GymId, UserId, TransPoints,Type })
            .then((value) => {
                dispatch({ type: 'Accepted', payload: value.data })
            })
            .catch((e) => {
                if (e.response) {
                    dispatch({ type: 'NotAccepted', payload: e.response.data })
                } else {
                    dispatch({ type: 'NotAccepted', payload: e.message })
                }
            })
    }
}

export const DeclineRequest = (ReqId) => {
    return async dispatch => {
        dispatch({ type: 'Declinting', payload: true })
        return Axios.post(`${MainUrl}/Api/Requets/declinerequest`, { ReqId })
            .then((value) => {
                dispatch({ type: 'Declined', payload: value.data })
            })
            .catch((e) => {
                if (e.response) {
                    dispatch({ type: 'NotDeclined', payload: e.response.data })
                } else {
                    dispatch({ type: 'NotDeclined', payload: e.message })
                }
            })
    }
}