import Validator from 'validator';
import Axios from 'axios'
import { MainUrl } from '../Root';

export const Name = Name => {
    return {
        type: 'Name',
        payload: Name
    }
}
export const Email = Email => {
    return {
        type: 'Email',
        payload: Email
    }
}
export const Price = Price => {
    return {
        type: 'Price',
        payload: Price
    }
}
export const Password = Password => {
    return {
        type: 'Password',
        payload: Password
    }
}
export const ConfirmPassword = ConfimPassword => {
    return {
        type: 'ConfimPassword',
        payload: ConfimPassword
    }
}
export const Mobile = Mobile => {
    return {
        type: 'Mobile',
        payload: Mobile
    }
}
export const Validate = (Data) => {
    const { Name, Email, Password, ConfimPassword, Price, Mobile } = Data
    if (Name == '') {
        return 'Name Is Empty'
    }
    if (!Validator.isEmail(Email)) {
       return 'Please Enter Valid Email'
    }
    if (Password == '') {
       return 'Please Enter Valid Password'
    }
    if (ConfimPassword == '' || !Validator.equals(Password, ConfimPassword)) {
       return 'Password is not Equal'
    }
    if (!Validator.isInt(Price) || Price < 40 ) {
       return 'Please Enter Valid Price'
    }
    if (Mobile == '') {
       return 'Please Enter Valid Mobile'
    }
    return true
}
export const RegistGym = (Data) => {
    return (dispatch) => {
        const { Name, Password, Email, ConfimPassword, Mobile, Price } = Data
        if (Validate(Data)) {
            dispatch({ type: 'Regist', payload: true })
            return Axios.post(`${MainUrl}/Api/Gyms/regist`, { Name, Email, Password, ConfimPassword, Mobile, Price })
                .then((Value) => {
                    dispatch({ type: 'RegistSuc', payload: Value.data.token })
                })
                .catch((e) => {
                    if (e.response) {
                        dispatch({ type: 'RegistNotSuc', payload: e.response.data.Erorr })
                    } else { dispatch({ type: 'RegistFail', payload: e.message }) }
                })
        }
    }
}