import Validator from 'validator'
import Axios from 'axios';
import { MainUrl } from '../Root';
export const Email = (Email) => { return { type: 'Email', payload: Email } }
export const Password = (Password) => { return { type: 'Password', payload: Password } }
export const Validate = (Data, notDone, Done) => {
    const { Password, Email } = Data
    if (!Validator.isEmail(Email)) {
        notDone('Please Enter Valid Email')
        return
    }
    if (Password == '') {
        notDone('Please Enter Valid Password')
        return
    }
    Done()
}

export const LoginUser = (Data) => {
    return (dispatch) => {
        const { Password, Email } = Data
        dispatch({ type: 'Login', payload: true })
        return Axios.post(`${MainUrl}/Api/Users/login`, { Email, Password })
            .then((Value) => {
                dispatch({ type: 'LogSuc', payload: Value.data.token })
            })
            .catch((e) => {
                if (e.response) {
                    dispatch({ type: 'LogNotSuc', payload: e.response.data.Erorr })
                } else { dispatch({ type: 'LogFail', payload: e.message }) }
            })
    }
}