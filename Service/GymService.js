import { GET, POST } from '../utlits/Network'
import Axios from 'axios';
export const GetAllGyms = (onSuccess, onFailure) => {
    GET('Api/Gyms/allgym', res => { onSuccess && onSuccess(res) }, err => { onFailure && onFailure(err) })
}

export const SendPoints = (data, onSuccess, onFailure) => {
    //GymId, userNumber, TransPoints = data
    POST('Api/Charge/gymtoplayer', data, res => {
        onSuccess && onSuccess(res)
    }, err => {
        onFailure && onFailure(err)
    })
}


export const Me = (token, onSuccess, onFailure) => {
    Axios.get(`${MainUrl}/Api/Gyms/me`, { headers: { Authorization: token } })
        .then((value) => {
            onSuccess && onSuccess(value)
        })
        .catch((e) => {
            onFailure && onFailure(e)
        })
}

export const SetLocation = (data, onSuccess, onFailure) => {
    //_id, Adress = data
    POST('Api/Gyms/setlocaction', data, res => {
        onSuccess && onSuccess(res)
    }, err => {
        onFailure && onFailure(err)
    })
}

export const SendPointsToYFitness = (data, onSuccess, onFailure) => {
    //gymNumber, TransPoints = data
    POST('Api/Charge/gymtoadmin', data, res => {
        onSuccess && onSuccess(res)
    }, err => {
        onFailure && onFailure(err)
    })
}


export const RegistGym = (data, onSuccess, onFailure) => {
    // const { Name, Password, Email, ConfimPassword, Mobile, Price } = data

    POST('Api/Gyms/regist', data, res => {
        onSuccess && onSuccess(res)
    }, err => {
        onFailure && onFailure(err)
    })

}


export const AllRequsets = (GymId, onSuccess, onFailure) => {
    POST('Api/Requets/allrequestforgym', GymId, res => { onSuccess && onSuccess(res) }, err => {
        onFailure && onFailure(err)
    })
}

export const AllRequsetss = (GymId, onSuccess, onFailure) => {
    POST('Api/Requets/allrequestforgyms', GymId, res => { onSuccess && onSuccess(res) }, err => {
        onFailure && onFailure(err)
    })
}