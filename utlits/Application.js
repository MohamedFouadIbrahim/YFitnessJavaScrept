import AsyncStorage from '@react-native-community/async-storage';

export const getToken = (onSuccess, onFailure) => {

    AsyncStorage.getItem('token').then((Token) => {

        if (Token !== null) {
            onSuccess && onSuccess(Token)
            return
        }
        onFailure && onFailure(null)
    
    }).catch((e)=>{
        onFailure && onFailure(e)
    })
   
}

export const setToken = async (Token, onSuccess, onFailure) => {
    AsyncStorage.setItem('token', Token)
        .then(() => {
            onSuccess && onSuccess()
        })
        .catch(() => {
            onFailure && onFailure()
        })
}

