import React, { Component } from 'react';
import { View, Text, Image, FlatList, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import styles from './style'
import PageRestau from '../PageRestau'
import { createStackNavigator, DrawerNavigator } from 'react-navigation';
import ChangePass from '../ChangePass'
import ProfilInfo from '../ProfilInfo'
import ChangeEmail from '../ChangeEmail'
import Icon from "react-native-vector-icons/Entypo";
import tools from '../../services/tools';
import Item from '../item';
import AsyncStorage from '@react-native-community/async-storage';
const ACCESS_TOKEN = 'access_token';
const stateee = 'state';
const adress = 'adresse';

class Homescreen extends Component {
  constructor() {
    super()
    this.state = {
      backgroundHome: '#FC6353',
      backUser: '#A1A1A1',
      bool1: true,
      bool2: false,
      indexdist: 1,
      state:'',
      adr:'',
      km: 0,
      acctoken:'',
      data:
        [
        ],
      latutide: 36.755997,
      longtitude: 10.2758091,
      distance: [],
      type:
        [
          {
            image: "https://i.imgur.com/qrxtwDt.png",
            title: "Most Nearby",

          },
          {
            image: "https://i.imgur.com/ysaShdj.png",
            title: "Food",

          },
          {
            image: "https://i.imgur.com/rJdeDns.png",
            title: "Pizza",

          },
          {
            image: "https://i.imgur.com/GA4NJBd.png",
            title: "Sandwich",

          },
        ],
    };
    this.getData()
  }
  async getToken(){
    try{
      let token = await AsyncStorage.getItem(ACCESS_TOKEN);
      let adr = await AsyncStorage.getItem(adress);
      let state = await AsyncStorage.getItem(stateee);

      console.log(adr)
        this.setState({
          acctoken: token,
          state:state,
          adr:adr,
        });
    }catch(error){

    }
  }
  PressedHome = () => {
    if (this.state.bool1 == false) {
      this.setState({
        backgroundHome: '#FC6353',
        backUser: '#A1A1A1',
        bool1: true,
        bool2: false
      });
    }
  }
  PressedUser = () => {
    if (this.state.bool2 == false) {
      this.setState({
        backUser: '#FC6353',
        backgroundHome: '#A1A1A1',
        bool2: true,
        bool1: false
      });
    }
  }
   async getData() {
  
     let name='Bearer '
     await this.getToken()
    return fetch(`${tools.getUrlRest('')}`,{
      method: 'GET', 
      headers:{
          //this what's exactly look in my postman
          'Authorization': name + this.state.acctoken
      }
    })
      .then((response) => response.text())
      .then((responseJson) => {
        console.log(this.state.ACCESS_TOKEN)
        console.log(this.state.state)
        console.log(this.state.adr)

        this.setState({ data: JSON.parse(responseJson)});
      })
      .catch(error => alert(error)
      ) //to catch the errors if any
      
  }
  rend = ({ item }) => {
    return (
      <TouchableOpacity style={styles.card}>
        <Image source={{ uri: item.image }} style={{ height: 48, width: 48, marginBottom: 9 }} />
        <Text style={styles.txt1}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  async getdatafiltrer(title) {
    let name='Bearer '
    await this.getToken()
    if (title == "Most Nearby") {
      return fetch(`${tools.getUrlRest('')}`,{
        method: 'GET', 
        headers:{
            //this what's exactly look in my postman
            'Authorization': name + this.state.acctoken
        }
      })
      .then((response) => response.text())
        .then((responseJson) => {
          this.setState({ data: JSON.parse(responseJson) });
        })
        .catch(error => alert(error)
        ) //to catch the errors if any
    }
    else {
      console.log(tools.getUrlRestBySpec(title))
      return fetch(`${tools.getUrlRestBySpec(title)}`,{
        method: 'GET', 
        headers:{
            //this what's exactly look in my postman
            'Authorization': name + this.state.acctoken
        }
      })
        .then((response) => response.text())
        .then((responseJson) => {
          this.setState({ data: JSON.parse(responseJson), isLoading: true });
          console.log(this.state.data)
        })
        .catch(error => alert(error)
        ) //to catc
    }
  }
 
  rend = ({ item,index }) => {

    return (
      <TouchableOpacity onPress={() => this.getdatafiltrer(item.title)} style={styles.card}>
        <Image source={{ uri: item.image }} style={{ height: 48, width: 48, marginBottom: 9 }} />
        <Text style={styles.txt1}>{item.title}</Text>
      </TouchableOpacity>
    )
  }


 render() {
  const { navigation } = this.props;
  const item = navigation.getParam('adresse', 'no-adresse');  
  console.log(item)
    return (
      <View style={styles.back}>
        <StatusBar backgroundColor="#f7f7f7" barStyle="dark-content" />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1 }}>
            <Image source={require('../../assets/images/filt24.png')} style={styles.filt}></Image>
          </View>
          <Text style={styles.start}>Let's Start</Text>

        </View>

        <TextInput placeholder="Search" style={styles.search}></TextInput>

        <Text style={styles.TypeTxt}>Type</Text>
        <FlatList 
        data={this.state.type}
        renderItem={this.rend}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={ (item, index) => index.toString() }

        />
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (<Item data={item} data1={this.props}/>)}
          onEndThreshold={0}
          showsVerticalScrollIndicator={false}
          initialNumToRender={4}
          keyExtractor={ (item, index) => index.toString() }
          />
        <View style={styles.navBar} >
          <Icon name='home' onPress={() => this.PressedHome()} color={this.state.backgroundHome} style={styles.iconsnav} size={27} />
          <Icon name='user' onPress={() => this.PressedUser()} color={this.state.backUser} style={[styles.iconsnav, { marginLeft: 275 }]} size={25} />
        </View>
      </View>
    );
  }
}
export const AppStackNavigator = createStackNavigator(
  {
    Homescreen: {
      screen: Homescreen,
      navigationOptions: {
        header: null,
      }
    },
    PageRestauscreen: {
      screen: PageRestau,
      navigationOptions: {
        header: null,
      }
    }
  },
  {
    initialRouteName: 'Homescreen',
  },
);
const AppDrawerNavigator = DrawerNavigator({
  Home: { screen: AppStackNavigator },

  'Profile Information': { screen: ProfilInfo },
  'Change Password': { screen: ChangePass },
  'Change Email': { screen: ChangeEmail },
}
)

export default AppDrawerNavigator;