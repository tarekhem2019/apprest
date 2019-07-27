import React, { Component } from 'react';
import { View, Text, Image, ScrollView, FlatList,TouchableOpacity } from 'react-native';
import styles from './style'
import { object } from '../Class/item'
const ACCESS_TOKEN = 'access_token';
import AsyncStorage from '@react-native-community/async-storage';
import Order from '../Order'
import { createStackNavigator } from 'react-navigation';
const stateee = 'state';
const adr = 'adresse';
import moment from 'moment'; 

class Basket extends Component {
 
    constructor(props){
        super(props)
        this.state={
            myitems:[],
            acctoken:'',
            state:'',
            adresse:''
        }
    }
     componentDidMount(){
        const item = this.props.navigation.state.params.data
        const Comments = this.props.navigation.state.params.Comments
        const quantite = this.props.navigation.state.params.quantite
        const itemid = this.props.navigation.state.params.item
        const nom = this.props.navigation.state.params.nom
        const prix = this.props.navigation.state.params.prix
        object.quantite=quantite
        object.item=itemid
        object.nom=nom
        object.prix=prix
        console.log(object)
            this.setState({ myitems: [...this.state.myitems, object] }) //simple value
        
    }  
    async getToken(){
        try{
          let token = await AsyncStorage.getItem(ACCESS_TOKEN);
          let stat = await AsyncStorage.getItem(stateee);
          let adress = await AsyncStorage.getItem(adr);

            this.setState({
              acctoken: token,
              state:stat,
              adresse:adress
            });
        }catch(error){
    
        }
      }
      async additem(item){

        await this.getToken()
        let name='Bearer '
        console.log(this.state.adresse)
        console.log(this.state.acctoken)
        url='http://192.168.43.161:8080/company/commandee/'+item.item
        fetch(url, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            headers:{
                //this what's exactly look in my postman
                'Authorization': name + this.state.acctoken
            }
          })
            .then((response) => response.text())
            .then((responseJson) => {
              console.log(responseJson)    
            })
            .catch(error => alert(error)
            ) //to catch the errors if any
            
        }
        async buynow(){
          const prix = this.props.navigation.state.params.prix
           console.log('prix',prix)
          var currentDate = moment().format("DD/MM/YYYY");
          let jsos={
            "prix": prix,
            "datecmd": currentDate.toString(),
            "etat":true
          }
          console.log(jsos)
                      await this.getToken()
            let name='Bearer '
            console.log(this.state.acctoken)
            
            url='http://192.168.43.161:8080/company/commande/list'
            fetch(url, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': name + this.state.acctoken
                              },
              
                body:JSON.stringify( jsos),           
              })
                .then((response) => response.text())
                .then((responseJson) => {
                  console.log(responseJson)    
                })
                .catch(error => alert(error)
                ) //to catch the errors if any
                this.props.navigation.navigate('Order')
            }
    renderItem = ({ item }) => {
        
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'flex-start' }}>
                    <Text style={styles.qt}>* {item.quantite}</Text>
                    <Image style={styles.img} source={require("../../assets/images/food.png")} />
                    <Text style={styles.name}>{item.nom}</Text>
                    <Text style={styles.price}>{item.prix} dt</Text>
                    <TouchableOpacity onPress={()=>this.additem(item)} style={styles.add}>
                        <Text style={styles.saveText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={{ backgroundColor: '#f7f7f7f7', flex: 1 }}>

            <View style={{ flexDirection: "row" }}>
                <Image source={require('../../assets/images/back.png')} style={{ margin: 13 }} />
                <Text style={styles.Basket}>Basket</Text>
            </View>
            <Text style={styles.Pur}>Your Purchases</Text>
            <ScrollView>
            <FlatList style={{ marginTop: 40 }}
              data={this.state.myitems}
              renderItem={this.renderItem}
            />
          </ScrollView>
            <TouchableOpacity onPress={()=>this.buynow()} style={styles.save}>
                <Text style={styles.saveText}>Comfirm Purchases</Text>
            </TouchableOpacity>
        </View>
        )}}


        export const AppStackNavigator = createStackNavigator(
          {
            Basket: {
              screen: Basket,
              navigationOptions: {
                header: null,
              }
            },
            Order: {
              screen: Order,
              navigationOptions: {
                header: null
              }
            }
          },
          {
            initialRouteName: 'Basket',
          },
        )
        export default AppStackNavigator;