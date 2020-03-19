import React from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import Axios from 'axios'
import { MainUrl } from '../../Root'
const h = `${MainUrl}/Api/Y/setworkingtime`;
export default class WorkTimeListView extends React.Component {
    state = {
        loading: false
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TextInput placeholder='Saturday' onChangeText={(e) => { this.setState({ Saturday: e }) }} />
                <TextInput placeholder='Sunday' onChangeText={(e) => { this.setState({ Sunday: e }) }} />
                <TextInput placeholder='Monday' onChangeText={(e) => { this.setState({ Monday: e }) }} />
                <TextInput placeholder='Tuesday' onChangeText={(e) => { this.setState({ Tuesday: e }) }} />
                <TextInput placeholder='Wednesday' onChangeText={(e) => { this.setState({ Wednesday: e }) }} />
                <TextInput placeholder='Thursday' onChangeText={(e) => { this.setState({ Thursday: e }) }} />
                <TextInput placeholder='Friday' onChangeText={(e) => { this.setState({ Friday: e }) }} />
                {this.state.loading == false ?
                    <Button title='Set' onPress={() => {
                        this.setState({ loading: true }, () => {
                            const {
                                Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday, Friday
                            } = this.state
                            const d = {
                                Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday, Friday
                            }
                            const Gender = this.props.navigation.getParam('Gender');
                            const number = this.props.navigation.getParam('Number', 0);
                            Axios.post(h, {
                                mobile: '', number, man: Gender == 'Man' ? d : '',
                                women: Gender == 'Women' ? d : ''
                            }).then((e) => {
                                this.setState({ loading: false }, () => {
                                    alert(e.data)
                                })
                            }).catch((e) => {
                                this.setState({ loading: false }, () => {
                                    alert(e)
                                })
                            })
                        })
                    }} /> : <ActivityIndicator size='large' />
                }

            </View>
        );
    }
}