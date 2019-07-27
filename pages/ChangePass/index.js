import React, { Component } from 'react';
import { View, Text, Image, TextInput,TouchableOpacity,StatusBar } from 'react-native';
import styles from './style'
class ChangePass extends Component {
    render() {
        this.state={
            Password:'',
            NewPass:'',
            Comfirm:'',
        }
        return (
            <View style={{ backgroundColor: '#FC6353', flex: 1 }}>
                    <StatusBar backgroundColor="#FC6353" barStyle="light-content" />
                <Image style={styles.change} source={require('../../assets/images/changepass.png')}></Image>
                <View style={[styles.TextInput, { flexDirection: 'row' }]}>
                    <Image style={styles.icon} source={require('../../assets/images/locked.png')} />
                    <TextInput placeholderTextColor='#fff' style={{ marginTop: 15 }}  placeholder="Your Password"></TextInput>
                </View>
                <View style={[styles.TextInput, { flexDirection: 'row' }]}>
                    <Image style={styles.icon} source={require('../../assets/images/locked.png')} />
                    <TextInput placeholderTextColor='#fff' style={{ marginTop: 15 }}  placeholder="New Password"></TextInput>
                </View>
                <View style={[styles.TextInput, { flexDirection: 'row' }]}>
                    <Image style={styles.icon} source={require('../../assets/images/locked.png')} />
                    <TextInput placeholderTextColor='#fff' style={{ marginTop: 15 }}  placeholder="Comfirm Password"></TextInput>
                </View>
                <View style={styles.seperator}></View>
                <TouchableOpacity style={styles.save}>
                    <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ChangePass;
