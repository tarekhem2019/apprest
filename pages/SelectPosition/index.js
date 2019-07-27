import React, { Component } from 'react';
import { View, Text, Image, Picker, TouchableOpacity, DeviceEventEmitter, StatusBar } from 'react-native';
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import styles from './style'
import Geocoder from 'react-native-geocoding';
import { createStackNavigator } from 'react-navigation';
import Home from '../Home'
import AsyncStorage from '@react-native-community/async-storage';

class SelectPosition extends Component {
  constructor() {
    super()
    this.state = {
      latitude: 0,
      longitude: 0,
      state: "Select Your State",
      adresse:"",
      toState:''
    };
  }

  getGpsPer() {
    LocationServicesDialogBox.checkLocationServicesIsEnabled({
      message: "<h2>Use Location ?</h2>This app wants to change your device settings:<br/><br/>Use GPS, Wi-Fi, and cell network for location<br/>",
      ok: "YES",
      cancel: "NO",
      enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => GPS OR NETWORK PROVIDER
      showDialog: true, // false => Opens the Location access page directly
      openLocationServices: true, // false => Directly catch method is called if location services are turned off
      preventOutSideTouch: false, //true => To prevent the location services popup from closing when it is clicked outside
      preventBackClick: false, //true => To prevent the location services popup from closing when it is clicked back button
      providerListener: true // true ==> Trigger "locationProviderStatusChange" listener when the location state changes
    }).then(function (success) {
      // success => {alreadyEnabled: true, enabled: true, status: "enabled"} 
      this.getPosition()

    }.bind(this)
    ).catch((error) => {
      console.log(error.message);
    });

    DeviceEventEmitter.addListener('locationProviderStatusChange', function (status) { // only trigger when "providerListener" is enabled
      console.log(status); //  status => {enabled: false, status: "disabled"} or {enabled: true, status: "enabled"}
    })
  }
  getPosition() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        this.getAdresse()
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
    );
  }

  getAdresse() {
    Geocoder.init("AIzaSyByhtWrcuFdwFG51MI7Xy03NQ-oW0Moxt8 	"); // use a valid API key
    Geocoder.from(this.state.latitude,this.state.longitude)
		.then(json => {
        		var addressComponent = json.results[0].address_components[3].long_name;
            this.setState({ state: addressComponent});
            this.getDistance()
		})
		.catch(error => console.warn(error));

  }
  getDistance() {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=AIzaSyByhtWrcuFdwFG51MI7Xy03NQ-oW0Moxt8`)
      .then((response) => response.json())
      .then((responseJson) => {
   
        var statee=responseJson.results[1].address_components[3].long_name
        var adress=responseJson.results[1].address_components[0].long_name
        var lat=this.state.latitude
        var log=this.state.longitude
        this.setState({toState:statee,adresse:adress})  
        AsyncStorage.setItem('state', statee)
        AsyncStorage.setItem('adresse', adress)
        AsyncStorage.setItem('lat', lat)
        AsyncStorage.setItem('long', log)

        
      })
      .catch(error => console.log(error)) //to catch the errors if any
  }
  
  componentWillUnmount() {
    // used only when "providerListener" is enabled
    LocationServicesDialogBox.stopListener(); // Stop the "locationProviderStatusChange" listener.
  }
  render() {
    return (
      <View style={styles.back}>
        <StatusBar backgroundColor="#FC6353" barStyle="light-content" />
        <Text style={styles.txt}>Select Position</Text>
        <Picker style={{ marginTop: 20, marginLeft: 10 }}
          mode="dropdown"
          selectedValue={this.state.state}
          onValueChange={(itemValue, itemIndex) => this.setState({ state: itemValue })} >
          <Picker.Item label="Grand Tunis" value="Grand Tunis" />
          <Picker.Item label="Ariana" value="Ariana" />
          <Picker.Item label="Manouba" value="Manouba" />
          <Picker.Item label="Ben Arous" value="Ben Arous" />
        </Picker>       
        <View style={[styles.TextInput, { flexDirection: 'row' }]}>
          <Image style={styles.posImage} source={require('../../assets/images/pos16.png')} />
          <Text onPress={() => this.getGpsPer()} style={styles.txtpos}>Select your current Position</Text>
        </View>
        <View style={{ alignItems: 'center' }}>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomeScreen', {
          state: this.state.toState,
          adresse: 'ssrs'
        })} style={styles.save}>
            <Text style={styles.savetxt} >Search Restaurants</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export const AppStackNavigator = createStackNavigator(
  {
    SelectPosition: {
      screen: SelectPosition,
      navigationOptions: {
        header: null,
      }
    },
    HomeScreen: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    }
    
  },
  {
    initialRouteName: 'SelectPosition',
  },
)
export default AppStackNavigator;