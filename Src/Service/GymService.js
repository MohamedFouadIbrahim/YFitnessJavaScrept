import { GET } from '../utlits/Network'

export const GetAllGyms = (onSuccess, onFailure) => {
    GET('Api/Gyms/allgym', res => { onSuccess && onSuccess(res) }, err => { onFailure && onFailure(err) })
}