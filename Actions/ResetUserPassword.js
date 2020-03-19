import Axios from 'axios';
import { MainUrl } from '../Root';
export const OldPassword = (OldPassword) => {
    return { type: 'OldPassword', payload: OldPassword }
}
export const NewPassword = (NewPassword) => {
    return { type: 'NewPassword', payload: NewPassword }
}

export const ResetPassword = (UserNumber, OldPassword, NewPassword) => {
    return async (dispatch) => {
        dispatch({ type: 'Resiting', payload: true })
        return Axios.post(`${MainUrl}/Api/Users/changepassword`, {
            userNumber: UserNumber,
            oldPassword: OldPassword,
            newPassword: NewPassword
        })
            .then((value) => {
                dispatch({ type: 'Rested', payload: value.data })
            }).catch((e) => {
                if (e.response) {
                    dispatch({ type: 'FailRested', payload: e.response.data })
                }
                else { dispatch({ type: 'FailRested', payload: e.message }) }
            })
    }
}