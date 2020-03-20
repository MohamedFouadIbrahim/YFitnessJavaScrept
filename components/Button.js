import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
const Button = (props) => (
    <TouchableOpacity style={props.style} ref={props.ref} disabled={props.disabled} onPress={props.onPress}>
        <Text style={[{ alignSelf: 'center', color: 'black', fontSize: 20 }, props.textStyle]} >
            {props.Text}
        </Text>
    </TouchableOpacity>
)
export default Button;