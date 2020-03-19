import Axios from 'axios';
import { MainUrl } from '../Root';
export const getCurrentPosition = (ScreenWidth, ScreenHeight, position) => {
    navigator.geolocation.getCurrentPosition((pos) => {
        const latitude = parseFloat(pos.coords.latitude)
        const longitude = parseFloat(pos.coords.longitude)
        const latitudeDelta = 0.0922
        const ASS = ScreenWidth / ScreenHeight
        const longitudeDelta = latitudeDelta * ASS;
        let region = {
            longitude,
            latitude,
            latitudeDelta,
            longitudeDelta
        }
        position(region)
    }, (e) => { console.log(e) }, { timeout: 60000, enableHighAccuracy: true })
}
export const SetLocation = (_id, Adress) => {
    return Axios.post(`${MainUrl}/Api/Gyms/setlocaction`, { Adress: Adress, _id: _id })
        .then(() => { return true })
        .catch((e) => { return e })
}