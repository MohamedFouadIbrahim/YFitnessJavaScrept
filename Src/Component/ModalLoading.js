import React from 'react';
import { ActivityIndicator, View, Modal, TouchableOpacity, Text } from 'react-native';

class ModalLoading extends React.Component {
    render() {
        return (
            <View style={{ justifyContent: 'center' }} >
                <Modal visible={this.props.visible} onRequestClose={() => { alert('Request Not Complete ...!'); this.props.onClose }} >
                    <View style={{ backgroundColor: 'black', justifyContent: 'center', flex: 1 }} >
                        <ActivityIndicator color='#fcb72b' size='large' />
                        <TouchableOpacity onPress={this.props.onPress} >
                            <Text style={{ color: 'white' }} >hgfhjkjhgfgh</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        )
    }
}
export default ModalLoading