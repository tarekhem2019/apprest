import React, { Component } from 'react';
import { TouchableOpacity, View, ImageBackground, Image, Text, TextInput } from 'react-native';
import styles from './style'
import Home from '../Home'
import SignUp from '../SignUp';
import PageRestau from '../PageRestau'
import AsyncStorage from '@react-native-community/async-storage';
import SelectPosition from '../SelectPosition';

import { createStackNavigator } from 'react-navigation';
const ACCESS_TOKEN = 'access_token';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      Email: "",
      Password: "",
      Name: "",
      Phone: ""
    }
  }
  async storeToken(responseData){
    AsyncStorage.setItem(ACCESS_TOKEN, responseData, (err)=> {
      if(err){
        console.log("an error");
        throw err;
      }
      console.log("success");
    }).catch((err)=> {
        console.log("error is: " + err);
    });
  }
  async getToken(){
    try{
      let token = await AsyncStorage.getItem(ACCESS_TOKEN);
      console.log('token '+ token);
    }catch(error){

    }
  }
  login() {
    fetch('http://192.168.43.161:8080/api/auth/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "usernameOrEmail": this.state.Email,
        "password": this.state.Password,
      }),
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {

        if(responseJson.status==401){
          alert("Please Check Your Information Again")
        }
        else{
          this.storeToken(responseJson.accessToken)
          this.props.navigation.navigate('SelectPosition')
        }
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error 
        console.error(error);
      });

    ;

  }
  render() {
    return (
      <ImageBackground source={require('../../assets/images/Login.png')} style={styles.img}>
        <Text style={styles.Title}>Quick Deleviry</Text>
        <View style={[styles.TextInput, { flexDirection: 'row', marginTop: 130 }]}>
          <Image style={{ padding: 8, marginTop: 17, marginRight: 5, resizeMode: 'stretch' }} source={require('../../assets/images/mail16.png')} />
          <TextInput onChangeText={(Text) => this.setState({ Email: Text })} placeholder="Email"></TextInput>
        </View>
        <View style={[styles.TextInput, { flexDirection: 'row' }]}>
          <Image style={{ padding: 8, marginTop: 20, marginRight: 5, resizeMode: 'stretch' }} source={require('../../assets/images/lock16.png')} />
          <TextInput secureTextEntry={true} style={{ marginTop: 5 }} onChangeText={(Text) => this.setState({ Password: Text })} placeholder="Password"></TextInput>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => this.login()} style={styles.login}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.forget}>Forget Password</Text>
          <View style={styles.separator}></View>
          <View style={{ alignItems: 'center' }}>
            <Image style={[styles.imgsoc, { marginTop: 20 }]} source={require('../../assets/images/fb.png')} />
            <Image style={[styles.imgsoc]} source={require('../../assets/images/plus.png')} />
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.create}>Don't Have Account?</Text>
          <Text onPress={() => this.props.navigation.navigate('SignUpScreen')} style={styles.create1}> Create Account</Text>
        </View>
      </ImageBackground>
    );
  }
}
export const AppStackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      }
    },
    HomeScreen: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    SignUpScreen: {
      screen: SignUp,
      navigationOptions: {
        header: null
      }
    },
    SelectPosition: {
      screen: SelectPosition,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Login',
  },
)
export default AppStackNavigator;