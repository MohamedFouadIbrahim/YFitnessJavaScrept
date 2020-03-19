// import React from 'react';
// import { TouchableOpacity, Text } from 'react-native';
// import Picker from 'react-native-picker';
// export default class PickerComponent extends React.Component {
//     state = { PlaceHolder : this.props.PlaceHolder || 'Choose The Day' }
//     onpress() {
//         Picker.init({
//             pickerData: this.props.data,
//             onPickerConfirm: data => {
//                 this.setState({ PlaceHolder: data }, () => {
//                     this.props.onPickerConfirm(data)
//                 })
//             },
//             onPickerCancel: data => {
//                 // this.setState({ d: 'Choose The Day ..' })
//                 //this.props.onPickerCancel(data)
//             },
//             onPickerSelect: data => {
//                 this.setState({ PlaceHolder: data })
//             }
//         });
//         Picker.show();
//     }
//     render() {
//         return (
//             <TouchableOpacity onPress={() => { this.onpress() }}>
//                 <Text style={[this.props.style, { borderWidth: 1, borderRadius: 10, textAlignVertical: 'center', textAlign: 'center' }]}>{this.state.PlaceHolder}</Text>
//             </TouchableOpacity>
//         );
//     }
// }