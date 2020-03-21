import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';

const textInput = (props) => (
    <View style={styles.Container} >
        <Image source={props.image} resizeMode='stretch' resizeMethod='resize' style={props.imageStyle} />
        <TextInput
            placeholder={props.placeholder}
            style={props.style}
            placeholderTextColor='#fcb72b'
            secureTextEntry={props.secureTextEntry||false}
            onChangeText={props.onChangeText}
            value={props.value}
        />
    </View>
)
const styles = StyleSheet.create({
    Container: { justifyContent: 'flex-start', flexDirection: 'row' },
    
})
export default textInput