import { PermissionsAndroid } from 'react-native';

export const MyPlace = (onSuccess, onFailure) => {
    navigator.geolocation.getCurrentPosition((position) => {
        const { coords: { latitude, longitude } } = position

        let region = {
            longitude,
            latitude
        }
        onSuccess && onSuccess(region)
    }, err => {

        if (err.code == 2) {
            alert('Please Open Location Service')
        }

        onFailure && onFailure(err)

    }, { timeout: 60000, enableHighAccuracy: true })

}

export const GetOrCheckForPermisions = (onSuccess, onFailure) => {

    PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
        .then((ok) => {
            if (!ok) {
                PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
            }
            else {
                onSuccess && onSuccess(ok)
            }
        })
        .catch((e) => { onFailure && onFailure(e) })
}
