import Axios from 'axios';
import { MainUrl } from '../Root';
export const AllGyms = () => {
    return async (dispatch) => {        
        return Axios.get(`${MainUrl}/Api/Gyms/allgym`)
            .then((value) => {
                dispatch({ type: 'Getall', payload: value.data })
            }).catch((e) => {
                if (e.response) {
                    dispatch({ type: 'NotGetall', payload: e.response.data })
                }
                else { dispatch({ type: 'NotGetall', payload: e.message }) }
            })
    }
}