import Axios from 'axios';
import { MainUrl } from '../Root';
export const Requet = (GymId, UserId, TransPoints,Type='Gym') => {
    return async (dispatch) => {
        dispatch({ type: 'Sending', payload: true })
        return Axios.post(`${MainUrl}/Api/Requets/request`, { 
            GymId, UserId, TransPoints, Type
         })
            .then((value) => {
                dispatch({ type: 'SendR', payload: value.data })
            }).catch((e) => {
                if (e.response) {
                    dispatch({ type: 'FailSendR', payload: e.response.data })
                }
                else { dispatch({ type: 'FailSendR', payload: e.message }) }
            })
    }
}
export const RequetCardio = (GymId, UserId, TransPoints,  Type='Cardio') => {
    return async (dispatch) => {
        dispatch({ type: 'SendingC', payload: true })
        return Axios.post(`${MainUrl}/Api/Requets/request`, { 
            GymId, UserId, TransPoints, Type
         })
            .then((value) => {
                dispatch({ type: 'SendC', payload: value.data })
            }).catch((e) => {
                if (e.response) {
                    dispatch({ type: 'FailSendC', payload: e.response.data })
                }
                else { dispatch({ type: 'FailSendC', payload: e.message }) }
            })
    }
}