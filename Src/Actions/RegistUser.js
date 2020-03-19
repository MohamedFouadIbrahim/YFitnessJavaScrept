import Validator from 'validator'
import Axios from 'axios';
import { MainUrl } from '../Root';
export const Name = (Name) => { return { type: 'Name', payload: Name } }
export const Email = (Email) => { return { type: 'Email', payload: Email } }
export const Password = (Password) => { return { type: 'Password', payload: Password } }
export const ConfirmPassword = (ConfimPassword) => { return { type: 'ConfimPassword', payload: ConfimPassword } }
export const Mobile = (Mobile) => { return { type: 'Mobile', payload: Mobile } }
export const Age = (Age) => { return { type: 'Age', payload: Age } }
export const Adress = (Adress) => { return { type: 'Adress', payload: Adress } }
export const Validate = (Data) => {
    const { Name, Email, Password, ConfimPassword, Mobile, Age } = Data
    if (Name == '') {
        return 'Name Is Empty'
        //return
    }
    if (!Validator.isEmail(Email)) {
        return 'Please Enter Valid Email'
    }
    if (!Validator.isInt(Age.toString()) || Age < 10 || Age > 80) {
        return 'Please Enter Valid Age'
    }
    if (Mobile == '') {
        return 'Please Enter Valid Mobile'
    }
    if (Password == '') {
       return 'Please Enter Valid Password'
    }
    if (ConfimPassword == '' || !Validator.equals(Password, ConfimPassword)) {
       return 'Password is not Equal'
    }
    return true
}
export const RegistUser = (Data) => {
    return (dispatch) => {
        const { Name, Password, Email, ConfimPassword, Mobile, Age } = Data
        if (Validate(Data)) {
            // alert('then')
            dispatch({ type: 'Regist', payload: true })
            return Axios.post(`${MainUrl}/Api/Users/regist`, { Name, Email, Password, ConfimPassword, Mobile, Age })
                .then((Value) => {
                    dispatch({ type: 'RegistUserSuc', payload: Value.data.token })
                })
                .catch((e) => {
            // alert('catch')
                    if (e.response) {
                        dispatch({ type: 'RegistUserNotSuc', payload: e.response.data.Erorr })
                    } else { dispatch({ type: 'RegistUserFail', payload: e.message }) }
                })
        }
    }
}
