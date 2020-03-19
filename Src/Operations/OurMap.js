import { PermissionsAndroid } from 'react-native';
class MapOperaton {
    latitudeDelta = 0;
    latitude = 0;
    longitude = 0;
      askForPermations(Done) {

        // this.granted = await PermissionsAndroid.request(
        //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        //     { 'title': 'Location Permission', 'message': 'We Want To Know your Location' }
        // )
        // if(this.granted !== null){
        //     this.getCurentPosision()
        // }
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
            .then((ok) => {
                if (ok) {
                    this.getCurentPosision()
                    return Done()
                }
                else {
                    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
                        .then((granted) => {
                            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                                this.getCurentPosision()
                                return Done()
                            }
                        })
                }
            })
    }
    getCurentPosision() {
        navigator.geolocation.getCurrentPosition((pos) => {
            this.latitude = parseFloat(pos.coords.latitude)
            this.longitude = parseFloat(pos.coords.longitude)
            this.latitudeDelta = 0.0922
        })
    }
}
export default new MapOperaton()