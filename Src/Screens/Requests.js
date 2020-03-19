import React from 'react';
import { FlatList } from 'react-native';
import OneRequest from '../Component/OneRequest';
import Data from '../Screens/Requests.json';
class Requsets extends React.Component {
    render() {
        return (
            <FlatList
                data={Data}
                keyExtractor={(v, i) => i.toString()}
                style={{ backgroundColor: '#fcb72b', flex: 1 }}
                renderItem={({ item }) => <OneRequest onAccept={()=>{ alert('ok') }} onDecline={()=>{ alert('notOk') }} Points={item.points} Name={item.Name} />}
            />
        )
    }
}
export default Requsets