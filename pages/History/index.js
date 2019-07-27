import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from './style'
import DatePicker from 'react-native-datepicker';

class History extends Component {

    constructor() {
        super()
        this.state = {
            date: "01-01-2019",
            data:
                [
                    {
                        foodPic: "https://i.imgur.com/6G87SsH.png",
                        title: "Sandwich Thon",
                        hompic: "https://i.imgur.com/ftWY3gR.png",
                        Home: "Ariana FastFood",

                    },
                    {
                        foodPic: "https://i.imgur.com/6G87SsH.png",
                        title: "Sandwich Thon",
                        hompic: "https://i.imgur.com/ftWY3gR.png",
                        Home: "Rades Food",

                    },
                    {
                        foodPic: "https://i.imgur.com/6G87SsH.png",
                        title: "Sandwich Thon",
                        hompic: "https://i.imgur.com/ftWY3gR.png",
                        Home: "Baguette & Baguette",

                    },
                    {
                        foodPic: "https://i.imgur.com/6G87SsH.png",
                        title: "Sandwich Thon",
                        hompic: "https://i.imgur.com/ftWY3gR.png",
                        Home: "Mac-Donals",

                    }
                ],
        }
    }
    renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.shadow}>
                    <Image i source={{ uri: item.foodPic }} style={styles.img} />
                    <Text style={styles.txt}>{item.title}</Text>
                    <View style={{ flexDirection: 'row',        alignSelf:'flex-start', marginTop: 5 }}>
                        <Image source={{ uri: item.hompic }} style={[styles.icons]} />
                        <Text style={[styles.proptxt, { marginLeft: 6, marginTop: 5 }]}>{item.Home}</Text>
                    </View>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View>
                <Text style={styles.History}>History</Text>
                <DatePicker
                    style={styles.datepicker}
                    date={this.state.date} //initial date from state
                    mode="date" //The enum of date, datetime and time
                    placeholder="01-01-2019"
                    format="DD-MM-YYYY"
                    minDate="01-01-2016"
                    maxDate="01-01-2222"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(date) => { this.setState({ date: date }) }}
                />
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={i => i.email}
                    onEndThreshold={0}
                    showsVerticalScrollIndicator={false}
                />
                <Text style={styles.listtxt}>List Order</Text>
            </View>
        );
    }
}

export default History;
