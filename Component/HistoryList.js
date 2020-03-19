import React from 'react';
import { FlatList } from 'react-native';
import History from './History';

class HistoryList extends React.Component {
     Getdate(d) {
        const da = new Date(d)
        const Day = da.getDate() 
        const month = da.getMonth() + 1
        const Year = da.getFullYear()
        return `${Day}/${month}/${Year}`
    }
    getTime(time) {
        const d = new Date(time)
        if (d.getHours() > 12) {
            return `${d.getHours() - 12 } : ${d.getMinutes() + 1} Pm `
        } else {
            return `${d.getHours() } : ${d.getMinutes() + 1} Am `
        }
    }
    renderItem =({ item, index }) =>{
        if(this.props.type == 'User'){
           return <History Name={item.Gym.Name} Date={this.Getdate(item.Date)} Status={item.Status} RequestType={item.Type} Time={this.getTime(item.Date)} />
        } else {
          return  <History Name={item.User.Name} Date={this.Getdate(item.Date)} Status={item.Status} Email={item.User.Email} RequestType={item.Type} Time={this.getTime(item.Date)}  />
        }
    }
    render() {
        return (
            <FlatList
                data={this.props.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderItem}
            />
        )
    }
}

export default HistoryList