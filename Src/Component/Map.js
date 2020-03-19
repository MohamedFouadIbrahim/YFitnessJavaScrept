import React from 'react';
import { Image, StyleSheet, Text, View, Platform } from 'react-native';
import MapVeiw, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';

class MapComponent extends React.Component {
    render() {
        return (
            <MapVeiw style={{ flex: 1 }}
                customMapStyle={this.props.mapStyle}
                initialRegion={this.props.Init_region}
                region={this.props.region}
                provider={PROVIDER_DEFAULT}
            >
                {Platform.OS == 'ios' ?
                    <FlatList
                        data={this.props.AllGyms}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <Marker key={index}
                                    coordinate={item.Adress}
                                    onPress={() => { this.props.onMarkerPress(item) }}
                                >
                                    <Text style={Styles.Text}> {item.Name} </Text>
                                    <Image
                                        source={require('../Photo/Logo.png')}
                                        style={Styles.Image}
                                    />
                                </Marker>
                            )
                        }}
                    /> :
                    this.props.AllGyms.map((item, index) => (
                        <Marker key={index}
                            coordinate={item.Adress}
                            onPress={() => { this.props.onMarkerPress(item) }}
                        >
                            <Text style={Styles.Text}> {item.Name} </Text>
                            <Image
                                source={require('../Photo/Logo.png')}
                                style={Styles.Image}
                            />
                        </Marker>
                    ))
                }
                {this.props.me ?
                    <MapVeiw.Marker coordinate={this.props.me} >
                        <View style={Styles.Redious} >
                            <View style={Styles.marker} />
                        </View>
                    </MapVeiw.Marker>
                    :
                    <View />
                }
            </MapVeiw>
        )
    }
}
const Styles = StyleSheet.create({
    Redious: {
        width: 50,
        borderWidth: 1,
        height: 50,
        borderRadius: 25,
        overflow: 'hidden',
        backgroundColor: 'rgba(0,122,225,0.1)',
        borderColor: 'rgba(0,122,225,0.3)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    marker: {
        height: 20, width: 20, borderWidth: 3, borderColor: 'white', borderRadius: 10, overflow: 'hidden', backgroundColor: '#007aff'
    },
    Text: {
        backgroundColor: 'white', color: 'black', textAlign: 'center', borderRadius: 5, textAlignVertical: 'center'
    },
    Image: {
        width: 50, height: 50, justifyContent: 'center', alignSelf: 'center'
    }
})

export default MapComponent