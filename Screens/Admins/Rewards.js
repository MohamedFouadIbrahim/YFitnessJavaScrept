import React from 'react';
import { View, Button } from 'react-native';

class Rewards extends React.Component{
    render(){
        return(
            <View style={{flex: 1, justifyContent: 'space-around' }} >
                <Button title='ForGym' onPress={()=>{this.props.navigation.navigate('RForGym') }} />
                <Button title='ForUser' onPress={()=>{this.props.navigation.navigate('RforUser') }} />
            </View>
        )
    }
}
export default Rewards