import styles from '../Home/style'
import React, { Component } from 'react';
import { View, Text, Image, FlatList, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 0,
      duration:0,
      restimage:this.props.data.restimage
    }
  }
  componentDidMount() {
    this.renderItem(this.props.data); 
  }

  renderItem = ({ item }) => {
    fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=36.7444494,10.2824511&destinations=${this.props.data.latitude},${this.props.data.longitude}&key=AIzaSyByhtWrcuFdwFG51MI7Xy03NQ-oW0Moxt8`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          indexdist: parseFloat((responseJson.rows[0].elements[0].distance.value / 1000).toString().replace(",", ".")).toFixed(1),
          duration:responseJson.rows[0].elements[0].duration.text[0]+responseJson.rows[0].elements[0].duration.text[1]
        })
      })
      .catch(error => console.log(error))
   }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => this.props.data1.navigation.navigate('PageRestauscreen', {
          itemId: this.props.data.nom,
          data: this.props.data,
          idrestaurent: this.props.data.idrestaurant,
          duration: this.state.duration,
          distance: this.state.indexdist,
          restimage:this.state.restimage
        })
        } style={styles.shadow}>
          <Image i source={{ uri: this.props.data.restimage }} style={styles.img} />
          <Text style={styles.txt}>{this.props.data.nom}</Text>
          <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'flex-start' }}>
            <Image source={{ uri: "https://i.imgur.com/65Iz4rm.png" }} style={[styles.icons]} />
            <Text style={[styles.proptxt, { marginLeft: 6, marginTop: 5 }]}>{this.state.indexdist} Km</Text>
            <View style={styles.separator}>
            </View>
            <Image style={styles.icons} source={{ uri: "https://i.imgur.com/BRdhhOv.png" }} />
            <Text style={[styles.proptxt, { marginLeft: 6 }]}>{this.state.duration}-{parseInt(this.state.duration)+10} Min</Text>
            <View style={styles.separator}>
            </View>
            <Image style={styles.icons} source={{ uri: "https://i.imgur.com/Z9JAgsY.png" }} />
            <Text style={[styles.proptxt, { marginLeft: 6 }]}>{this.props.data.specialite}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )

  }
}