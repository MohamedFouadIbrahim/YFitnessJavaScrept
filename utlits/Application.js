import AsyncStorage from '@react-native-community/async-storage';
import { Me } from '../Service/UserService';
export const getToken = (onSuccess, onFailure) => {

    AsyncStorage.getItem('token').then((Token) => {

        if (Token !== null) {
            onSuccess && onSuccess(Token)
            return
        }
        onFailure && onFailure(null)

    }).catch((e) => {
        onFailure && onFailure(e)
    })

}

export const setToken = (Token, onSuccess, onFailure) => {
    AsyncStorage.setItem('token', Token)
        .then(() => {
            onSuccess && onSuccess()
        })
        .catch((e) => {
            onFailure && onFailure(e)
        })
}

export const loadMyInfo = (onSuccess, onFailure) => {
    getToken(token => {
        Me(token, res => {
            onSuccess && onSuccess(res.data)
        }, err => {
            onFailure && onFailure(err)
        })
    })
}