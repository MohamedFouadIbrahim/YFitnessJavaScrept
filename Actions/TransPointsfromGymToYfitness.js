import Axios from 'axios';
import { MainUrl } from '../Root';
export const SendPointsToYFitness = (gymNumber, TransPoints) => {
    return dispatch => {
        dispatch({ type: 'Sending', payload: true })
        return Axios.post(`${MainUrl}/Api/Charge/gymtoadmin`, { gymNumber, TransPoints })
            .then((val) => {
                dispatch({ type: 'SendedToYfitness', payload: val.data })
            })
            .catch((e) => {
                if (e.response) {
                    dispatch({ type: 'NotSendedToYfitness', payload: e.response.data })
                } else {
                    dispatch({ type: 'NotSendedToYfitness', payload: e.message })
                }
            })
    }
}
export const GymNumber = (GymNumber) => {
    return { type: 'GymNumber', payload: GymNumber }
}
export const TransPoints = (TransPoints) => {
    return { type: 'TransPointss', payload: TransPoints }
}