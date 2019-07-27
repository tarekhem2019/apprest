import React, { Component } from 'react';
import { View, TextInput, ImageBackground, Text, Image, FlatList, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import styles from './style'
import ProductDetails from '../ProductDetails'
import { createStackNavigator } from 'react-navigation';
import tools from '../../services/tools'
const ACCESS_TOKEN = 'access_token';
import AsyncStorage from '@react-native-community/async-storage';

class PageRestau extends Component {
  constructor(props) {
    super(props)

    this.state = {
      acctoken:'',
      data:
        [],
      text: ''
    }
    this.getData()
  }
  clear = () => {
    this.search.clear();
  };
    async getToken(){
      try{
        let token = await AsyncStorage.getItem('access_token');
        console.log('faut ',token)
        console.log("ss")
          this.setState({
            acctoken: token,
          });
      }catch(error){
  
      }
  }
  
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.state.data.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.nom ? item.nom.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      data: newData,
      text: text,
    });
  }

  async getData() {
    let name='Bearer '
    await this.getToken()
    const { navigation } = this.props;
    const idrestaurent = navigation.getParam('idrestaurent', 'no-idrestaurent');
    var day=new Date();
    console.log('succes '+ this.state.acctoken)
    console.log(day.getDay())
    var test=day.getDay()
  
    return fetch(`${tools.getUrlItem(day.getDay())}`,{
      method: 'GET', 
      headers:{
          //this what's exactly look in my postman
          'Authorization': name + this.state.acctoken
      }
    })
      .then((response) => response.text())
      .then((responseJson) => {
        var n=JSON.parse(responseJson).length
      for(let i=0;i<n;i++){
        if (JSON.parse(responseJson)[i].idrestaurent==idrestaurent){
          this.setState({ data: JSON.parse(responseJson)[i].items
            , isLoading: true });
        }
        console.log(JSON.parse(responseJson)[i].items)
        }   
      })
      .catch(error => console.log(error)
      ) //to catch the errors if any
  }
  renderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetails', {
          data: item
        })} style={styles.shadow}>
          <Image i source={{ uri: item.itemimage }} style={styles.img} />
          <Text style={styles.txt}>{item.nom}</Text>
          <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'flex-start' }}>
            <Image style={styles.icons} source={{ uri: "https://i.imgur.com/rY2lsQj.png" }} />
            <Text style={[styles.proptxt, { marginLeft: 6, marginTop: 5 }]}>{item.temps_prep} Min</Text>
            <View style={styles.separator}>
            </View>
            <Image style={styles.icons} source={{ uri: "https://i.imgur.com/Vsb6TIC.png" }} />
            <Text style={[styles.proptxt, { marginLeft: 6 }]}>{item.prix} D</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const item = navigation.getParam('data', 'data');
    const duration = navigation.getParam('duration', 'no-duration');
    const distance = navigation.getParam('distance', 'no-dis');
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#f7f7f7" barStyle="dark-content" />

        <View style={{ backgroundColor: '#000000' }}>
          <TextInput       onChangeText={text => this.SearchFilterFunction(text)}

            placeholder="Search" style={styles.search}></TextInput>
        </View>
        <ImageBackground style={{ height: 135 }} source={require('../../assets/images/food.png')}>
          <View style={[styles.information]}>
            <Text style={styles.txt}>{itemId}</Text>
            <View style={{ flex: 1, flexDirection: 'row', marginRight: 199, marginTop: 5 }}>
              <Image source={{ uri: "https://i.imgur.com/65Iz4rm.png" }} style={[styles.icons]} />
              <Text style={[styles.proptxt, { marginLeft: 6, marginTop: 5 }]}>{distance} Km</Text>
              <View style={styles.separator}>
              </View>
              <Image style={styles.icons} source={{ uri: "https://i.imgur.com/rY2lsQj.png" }} />
              <Text style={[styles.proptxt, { marginLeft: 6 }]}>{duration}-{parseInt(duration)+10} Min</Text>
              <View style={styles.separator}>
              </View>
              <Image style={styles.icons} source={{ uri: "https://i.imgur.com/WkD21F9.png" }} />
              <Text style={[styles.proptxt, { marginLeft: 6 }]}>{item.specialite}</Text>
            </View>
          </View>
        </ImageBackground>
        <ScrollView>
          <FlatList style={{ marginTop: 40 }}
            data={this.state.data}
            renderItem={this.renderItem}
          />
        </ScrollView>
      </View>
    );
  }
}
export const AppStackNavigator = createStackNavigator(
  {
    PageRestau: {
      screen: PageRestau,
      navigationOptions: {
        header: null,
      }
    },
    ProductDetails: {
      screen: ProductDetails,
      navigationOptions: {
        header: null
      }
    },
  },
  {
    initialRouteName: 'PageRestau',
  },
)
export default AppStackNavigator;
