import React, { Component } from 'react';
import { ImageBackground, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './style'
import { createStackNavigator } from 'react-navigation';
class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      Email: "",
      Password: "",
      Name: "",
      Username: ""
    }
  }
  signup(){
    fetch('http://192.168.43.161:8080/api/auth/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "username":this.state.Username,
        "email": this.state.Email,
        "password": this.state.Password,
        "name":this.state.Name
        
      }),
    })
      .then((response) => response.json())


      //If response is in json then in success
      .then((responseJson) => {
        console.log(responseJson);
        if(responseJson.status==401){
          alert("Please Check Your Information Again")
        }
        else{
          this.props.navigation.goBack(null)
        }
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error 
        alert("Please Check Your information")
        console.error(error);
      });

    ;
  }
  render() {
    return (
      <ImageBackground source={require('../../assets/images/SignUp.png')} style={styles.img}>
        <Text style={styles.Title}>Quick Deleviry</Text>
        <View style={[styles.TextInput, { marginTop: 110, flexDirection: 'row' }]}>
          <Image style={{ padding: 8, marginTop: 20, marginRight: 5, resizeMode: 'stretch' }} source={require('../../assets/images/user16.png')} />
          <TextInput  style={{ marginTop: 5 }} onChangeText={(Text) => this.setState({ Username: Text })} placeholder="Username"></TextInput>
        </View>
        <View style={[styles.TextInput, { flexDirection: 'row' }]}>
          <Image style={{ padding: 8, marginTop: 15, marginRight: 5, resizeMode: 'stretch' }} source={require('../../assets/images/mail16.png')} />
          <TextInput keyboardType={'email-address'} onChangeText={(Text) => this.setState({ Email: Text })} placeholder="Email"></TextInput>
        </View>
        <View style={[styles.TextInput, { flexDirection: 'row' }]}>
          <Image style={{ padding: 8, marginTop: 20, marginRight: 5, resizeMode: 'stretch' }} source={require('../../assets/images/user16.png')} />
          <TextInput  style={{ marginTop: 5 }} onChangeText={(Text) => this.setState({ Name: Text })} placeholder="Name"></TextInput>
        </View>
        <View style={[styles.TextInput, { flexDirection: 'row' }]}>
          <Image style={{ padding: 8, marginTop: 20, marginRight: 5, resizeMode: 'stretch' }} source={require('../../assets/images/lock16.png')} />
          <TextInput secureTextEntry={true} style={{ marginTop: 5 }} onChangeText={(Text) => this.setState({ Password: Text })} placeholder="Password"></TextInput>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={()=>this.signup()} style={styles.signup}>
            <Text style={styles.signupText}>SignUp</Text>
          </TouchableOpacity>
          <View style={styles.separator}></View>
          <View style={{ alignItems: 'center' }}>
            <Image style={[styles.imgsoc, { marginTop: 10 }]} source={require('../../assets/images/fb.png')} />
            <Image style={[styles.imgsoc]} source={require('../../assets/images/plus.png')} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.create}>Already Have an Account?</Text>
            <Text style={styles.create1} onPress={() => this.props.navigation.goBack(null)}> Login</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
export const SignUpStack =  createStackNavigator(
  {
    SignUpScreen:{
        screen:SignUp,
        navigationOptions: {
          header:null  
        }
    },


  },
  {
    initialRouteName: 'SignUpScreen',
  },
)
export default SignUpStack;