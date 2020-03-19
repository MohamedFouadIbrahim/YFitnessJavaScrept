import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
const Buttt = (props)=>(
    <TouchableOpacity style={Styles.Button}
    onPress={props.onPress} >
    <Image source={require('../Photo/Location.png')} style={Styles.Image} />
</TouchableOpacity>
)
const Styles = StyleSheet.create({
    Button: {
        zIndex: 1, position: 'absolute', width: 50, height: 50, borderRadius: 25,
        bottom: 10, right: 10,
        justifyContent: 'center', alignItems: 'center',
    },
    Image: {
        zIndex: 1, position: 'absolute', width: 50, height: 50, borderRadius: 25, backgroundColor: 'white',
        bottom: 10, right: 10,
        justifyContent: 'center', alignItems: 'center',
    }
})
export default Buttt