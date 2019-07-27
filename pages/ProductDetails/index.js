import React, { Component } from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import styles from './style'
import { CheckBox } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Basket from '../Basket'
import { object } from '../Class/item'
var items = [];

class ProductDetails extends Component {
    constructor() {
        super()
        this.state = {
            selectedId: 0,
            selectedId1: 0,
            quantite: 1,
            checked1: false,
            checked2: false,
            checked3: false,
            checked4: false,
            Comments: '',
            items:[],
            sum:0
        };

    }
    check1(value) {
        this.setState({
            checked1: !this.state.checked1,
            items: [...this.state.items, value],
            sum:this.state.sum+2
        });

    }
    check2(value) {
        this.setState({
            checked2: !this.state.checked2,
            items: [...this.state.items, value],
            sum:this.state.sum+2,

        });

    }
    check3(value) {
        this.setState({
            checked3: !this.state.checked3,
            items: [...this.state.items, value],
            sum:this.state.sum+2,

        });

    }
    check4(value) {
        this.setState({
            checked4: !this.state.checked4,
            items: [...this.state.items, value],
            sum:this.state.sum+2

        });

    }
    add() {
        const { navigation } = this.props;
        const itm = navigation.getParam('data', 'item');
        console.log('price ', itm.prix)
        this.setState({
            quantite: this.state.quantite + 1,
            sum:this.state.sum+(this.state.quantite+1*itm.prix)
        })
    }
   
    min() {
        const { navigation } = this.props;
        const itm = navigation.getParam('data', 'item');
        if (this.state.quantite > 1) {
            this.setState({
                quantite: this.state.quantite - 1,
                sum:this.state.sum-itm.prix
            })
        }
    }

    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('data', 'item');
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor="#f7f7f7" barStyle="dark-content" />
                <ImageBackground style={{ height: 130 }} source={{ uri: item.itemimage }}></ImageBackground>
                <Text style={styles.name}>{item.nom}</Text>
                <Text style={styles.par}>Test Sandwich thon ..Test Sandwich thonTest Sandwich thonTest Sandwich thonTest Sandwich thonTest Sandwich thons</Text>
                <View style={styles.shadow}>
                    <CheckBox
                        containerStyle={{ backgroundColor: '#fff', borderColor: '#fff', alignSelf: 'flex-start' }}
                        onPress={() => this.check1('Scalope 2 dt')}
                        title='Scalope 2 dt'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.checked1}

                    />
                    <CheckBox
                        containerStyle={{ marginTop: -10, backgroundColor: '#fff', borderColor: '#fff', alignSelf: 'flex-start' }}
                        onPress={() => this.check2('Thon 1.2 dt')}
                        title='Thon 1.2 dt'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.checked2}

                    />
                    <View style={styles.seperator}></View>
                    <CheckBox
                        containerStyle={{ backgroundColor: '#fff', borderColor: '#fff', alignSelf: 'flex-start' }}
                        onPress={() => this.check3('Frites 1dt')}
                        title='Frites 1dt'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.checked3}

                    />
                    <CheckBox
                        containerStyle={{ marginTop: -10, backgroundColor: '#fff', borderColor: '#fff', alignSelf: 'flex-start' }}
                        onPress={() => this.check4('Salami 1dt')}
                        title='Salami 1dt'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.checked4}

                    />
                    <Text style={styles.comment}>Special Requests</Text>
                    <TextInput onChangeText={(Text) => this.setState({ Comments: Text })} underlineColorAndroid='#adadad' style={styles.TxtInput} placeholder="Add Your Comments"></TextInput>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: "center" }}>
                    <TouchableOpacity onPress={() => this.min()} style={styles.add_}>
                        <Text style={styles.compt}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.compteur}>{this.state.quantite}</Text>
                    <TouchableOpacity onPress={() => this.add()} style={styles.add_}>
                        <Text style={styles.compt}>+</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Bask', {
                    data: this.state.items,
                    quantite: this.state.quantite,
                    Comments: this.state.Comments,
                    item:item.item,
                    nom:item.nom,
                    prix:this.state.sum

                })} style={styles.buy}>
                    <Text style={styles.buyText}>Buy Now</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
export const AppStackNavigator = createStackNavigator(
    {
        ProductDetails: {
            screen: ProductDetails,
            navigationOptions: {
                header: null,
            }
        },
        Bask: {
            screen: Basket,
            navigationOptions: {
                header: null
            }
        },
    },
    {
        initialRouteName: 'ProductDetails',
    },
);
export default AppStackNavigator;
