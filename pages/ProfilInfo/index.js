import React, { Component } from 'react';
import { View, Text, Image, TextInput,TouchableOpacity,StatusBar } from 'react-native';
import styles from './style'
import AsyncStorage from '@react-native-community/async-storage';
import { updateExpression } from '@babel/types';
const ACCESS_TOKEN = 'access_token';
const stateee = 'state';
const adress = 'adresse';

class ProfilInfo extends Component {
    constructor(props){
        super(props)
        this.state={
            Name:'',
            Phone:'',
            Adresse:'',
            State:''
        }        

    }
    
    async getToken(){
        try{
          let token = await AsyncStorage.getItem(ACCESS_TOKEN);
          let adr = await AsyncStorage.getItem(adress);
          let state = await AsyncStorage.getItem(stateee);
            this.setState({
              acctoken: token,
              State:state,
              Adresse:adr,
            });
        }catch(error){
    
        }
      }
    componentDidMount(){
        this.getToken()
    }
    async update(){
        AsyncStorage.setItem('state', this.state.State)
        AsyncStorage.setItem('adresse', this.state.Adresse)
        alert("Update Succeeded")
        }
    render() {

        return (
            <View style={{ backgroundColor: '#FC6353', flex: 1 }}>
                    <StatusBar backgroundColor="#FC6353" barStyle="light-content" />

                <Image style={styles.profile} source={require('../../assets/images/userav.png')}></Image>

              
                <View style={[styles.TextInput, { flexDirection: 'row' }]}>
                    <Image style={styles.icon} source={require('../../assets/images/adress.png')} />
                    <TextInput onChangeText={(Text) => this.setState({ Adresse: Text })} style={{color:'#fff'}} placeholderTextColor='#fff' style={{ marginTop: 15 }}  placeholder="Adresse">{this.state.Adresse}</TextInput>
                </View>
                <View style={[styles.TextInput, { flexDirection: 'row' }]}>
                    <Image style={styles.icon} source={require('../../assets/images/state.png')} />
                    <TextInput style={{color:'#fff'}} onChangeText={(Text) => this.setState({ State: Text })} placeholderTextColor='#fff' style={{ marginTop: 15}}  placeholder="State">{this.state.State}</TextInput>
                </View>
                <View style={styles.seperator}></View>
                <TouchableOpacity onPress={()=>this.update()} style={styles.save}>
                    <Text style={styles.saveText}>Update</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ProfilInfo;
