import { GET, POST } from '../utlits/Network'
import Axios from 'axios';

export const AcceptRequest = (data, onSuccess, onFailure) => {
    // ReqId, GymId, UserId, TransPoints,Type
    POST('Api/Requets/acceptrequest', data, res => {
        onSuccess && onSuccess(res)
    }, err => { onFailure && onFailure(err) })
}

export const DeclineRequest = (ReqId, onSuccess, onFailure) => {

    POST('Api/Requets/declinerequest', ReqId, res => {
        onSuccess && onSuccess(res)
    }, err => {
        onFailure && onFailure(err)
    })

}


export const LoginUser = (data, onSuccess, onFailure) => {

    POST('Api/Users/login', data, res => {
        onSuccess && onSuccess(res)
    }, err => {
        onFailure && onFailure(err)
    })

}

export const RegistUser = (data, onSuccess, onFailure) => {

    // const { Name, Password, Email, ConfimPassword, Mobile, Age } = data
    POST('Api/Users/regist', data, res => {
        onSuccess && onSuccess(res)
    }, err => {
        onFailure && onFailure(err)
    })
}


export const AllRequsets = (UserId, onSuccess, onFailure) => {
    POST('Api/Requets/allrequsetforuser', UserId, res => {
        onSuccess && onSuccess(res)
    }, err => {
        onFailure && onFailure(err)
    })
}

export const AllRequsetss = (UserId, onSuccess, onFailure) => {
    POST('Api/Requets/allrequsetforusers', UserId, res => {
        onSuccess && onSuccess(res)
    }, err => {
        onFailure && onFailure(err)
    })
}


export const Requet = (data, onSuccess, onFailure) => {
    // Make Default Type == Gym
    //GymId, UserId, TransPoints, Type = 'Gym'
    POST('Api/Requets/request', data, res => { onSuccess && onSuccess(res) }, err => {
        onFailure && onFailure(err)
    })
}

export const RequetCardio = (data, onSuccess, onFailure) => {
    // Make Default Type == Gym
    //GymId, UserId, TransPoints, Type = 'Cardio'
    POST('Api/Requets/request', data, res => { onSuccess && onSuccess(res) }, err => {
        onFailure && onFailure(err)
    })
}


export const ResetPassword = (data, onSuccess, onFailure) => {
    //UserNumber, OldPassword, NewPassword
    POST('Api/Users/changepassword', data, res => { onSuccess && onSuccess(res) }, err => {
        onFailure && onFailure(err)
    })

}


export const CancelRequest = (ReqId, onSuccess, onFailure) => {
    POST('Api/Requets/cancelrequset', ReqId, res => { onSuccess && onSuccess(res) }, err => {
        onFailure && onFailure(err)
    })
}


export const Me = (token, onSuccess, onFailure) => {

    Axios.get(`${MainUrl}/Api/Users/me`, { headers: { Authorization: token } })
        .then((value) => {
            onSuccess && onSuccess(value)
        }).catch((e) => {
            onFailure && onFailure(e)
        })

}