import Validator from 'validator'
import Axios from 'axios';
import { MainUrl } from '../Root';
export const Email = (Email) => { return { type: 'Email', payload: Email } }
export const Password = (Password) => { return { type: 'Password', payload: Password } }
export const Validate = (Data) => {
    const { Password, Email } = Data
    if (!Validator.isEmail(Email)) {
        alert('Please Enter Valid Email')
        return false
    }

    if (Password == '') {
        alert('Please Enter Valid Password')
        return false
    }
    return true
}
export const LoginGyms = (Data) => {
    return (dispatch) => {
        const { Password, Email } = Data
        if (Validate(Data)) {
            dispatch({ type: 'Login', payload: true })
            return Axios.post(`${MainUrl}/Api/Gyms/login`, { Email, Password })
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
}