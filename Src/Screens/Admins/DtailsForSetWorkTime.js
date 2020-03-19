import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

class GymDetailsForWorkTime extends React.Component {
    state = {
        Password: '',
        Name: '',
        Email: '',
        Mobile: '',
        Points: '',
        Number: '',
        type: '',
    }
    componentDidMount() {
        const Name = this.props.navigation.getParam('Name', '');
        const Email = this.props.navigation.getParam('Email', '');
        const Mobile = this.props.navigation.getParam('Mobile', '');
        const Number = this.props.navigation.getParam('Number', '');
        const Points = this.props.navigation.getParam('Points', '');
        const type = this.props.navigation.getParam('type', '');
        this.setState({ Name, Email, Mobile, Points, Number, type })
    }
    
    render() {
        const { Name, Email, Mobile, Points, Number } = this.state
        return (
            <View style={{flex:1}}  >
                <Text style={styles.Text} >{`Name: ${Name}`}</Text>
                <Text style={styles.Text} >{`Email: ${Email}`}</Text>
                <Text style={styles.Text} >{`Mobile: ${Mobile}`}</Text>
                <Text style={styles.Text} >{`Points: ${Points}`}</Text>
                <Text style={styles.Text} >{`Number: ${Number}`}</Text>
                <Button title='Man' onPress={()=>{  this.props.navigation.navigate('WorkTimeListView', { Gender: 'Man', Mobile, Number })}}  />
                <Button title='Women' onPress={()=>{ this.props.navigation.navigate('WorkTimeListView', { Gender: 'Women', Mobile, Number })}  }  />
            </View >
        )
    }
}
const styles = StyleSheet.create({
    Text: { textAlign: 'left', fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }
})
export default GymDetailsForWorkTime 