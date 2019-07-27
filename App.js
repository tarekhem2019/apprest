import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import LoginStack from './pages/Login'
import SignUp from './pages/SignUp'
import PageRestau from './pages/PageRestau'
import Home from './pages/Home'
import History from './pages/History'
import ProductDetails from './pages/ProductDetails'
import ProfilInfo from './pages/ProfilInfo'
import ChangePass from './pages/ChangePass'
import ChangeEmail from './pages/ChangeEmail'
import Order from './pages/Order'
import Filters from './pages/Filters'
import SelectPosition from './pages/SelectPosition'
import Basket from './pages/Basket'
import OneSignal from 'react-native-onesignal';
export default class Aspp extends Component {
  constructor(){
    super()
 
  }
  componentDidMount(){
    OneSignal.init("1e37428b-9670-4154-a31c-7437ecdfe511");
    OneSignal.addEventListener('ids', this.onIds); 
    OneSignal.configure(); 	// triggers the ids event
    OneSignal.addEventListener('received', this.onReceived);
  }
  onReceived(notification) {
   alert(notification.payload.body);
  }
  _onOpened(openResult) {
    alert('Notification body: ', openResult.notification.payload.body); // working well
    }
    
    
  onIds(device) {
  }
  render() {
    return (
      <LoginStack/>
    );
  }
}

