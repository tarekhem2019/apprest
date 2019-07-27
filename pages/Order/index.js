import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, DeviceEventEmitter } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps'
import styles from './style'
import MapViewDirections from 'react-native-maps-directions'

class Order extends Component {
  constructor() {
    super()
    this.state = {
      latitude: 36.7970974,
      longitude: 10.1779125,
      error: null,
      coordinates: [
        {
          latitude: 36.7970974,
          longitude: 10.1779125,
        },
        {
          latitude: 36.8152179,
          longitude: 10.1815715,
        },
      ],
      coords: []

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          minZoomLevel={17}
          region={{
            latitude: this.state.coordinates[0].latitude,
            longitude: this.state.coordinates[0].longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}

        >
          <Marker coordinate={this.state.coordinates[0]} />
          <Marker coordinate={this.state.coordinates[1]} />
          <MapView.Circle
            center={this.state.coordinates[0]}
            radius={60}
            strokeWidth={0}
            fillColor={'rgba(255,51,51,0.5)'}
          />

          <MapViewDirections
            origin={this.state.coordinates[0]}
            destination={this.state.coordinates[1]}
            apikey={"AIzaSyByhtWrcuFdwFG51MI7Xy03NQ-oW0Moxt8"}
            strokeWidth={3}
            strokeColor="#4286f4"
            optimizeWaypoints={false}
            zoomEnabled={true}

          />
        </MapView>
        <View style={styles.time}>
          <Text style={styles.txt}>0:37</Text>
        </View>
        <Text style={styles.txt1}>Your Order is on the way...</Text>
        <TouchableOpacity onPress={() => this.test()} style={styles.btnorder}>
          <Text style={styles.orderText}>See my Order</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

export default Order;