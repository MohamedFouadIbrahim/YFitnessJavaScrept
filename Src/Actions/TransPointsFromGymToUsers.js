import Axios from 'axios';
import { MainUrl } from '../Root';
export const SendPoints = (GymId, userNumber, TransPoints) => {
    return dispatch => {
        dispatch({ type: 'Send', payload: true })
        return Axios.post(`${MainUrl}/Api/Charge/gymtoplayer`, { GymId, TransPoints, userNumber })
            .then((val) => {
                dispatch({ type: 'Sended', payload: val.data })
            })
            .catch((e) => {
               dispatch({ type: 'NotSend', payload: e.response.data.Errorr }) 
            })
    }
}
export const UserNumber = (userNumber) => {
    return { type: 'UserNumber', payload: userNumber }
}
export const TransPoints = (TransPoints)=>{
    return { type: 'TransPoints', payload: TransPoints }
}