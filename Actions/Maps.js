import { PermissionsAndroid } from 'react-native';
export const MyPlace = (ScreenWidth, ScreenHeight) => {
    return (dispatch) => {
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
            dispatch({ type: 'MyPlace', payload: region })
        }, (e) => {
            if (e.code == 2) {
                alert('Please Open Location Service')
            } else {
                alert(`${e.message}`)
            }

        }, { timeout: 60000, enableHighAccuracy: true })
    }
}

export const GetOrCheckForPermisions = () => {
    return (dispatch) => {
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
            .then((ok) => {
                if (!ok) {
                    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
                    dispatch({ type: 'PermisionRequested' })
                }
                else { dispatch({ type: 'HavePermision' }) }
            })
            .catch((e) => { alert(e) })
    }
}
export const modal = (bool) => {
    return {
        type: 'Modal',
        payload: bool
    }
}