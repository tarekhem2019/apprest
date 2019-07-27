import React, { Component } from 'react';
import { View, Text, Image, TextInput,TouchableOpacity,StatusBar } from 'react-native';
import styles from './style'
class ChangeEmail extends Component {
    render() {
        this.state={
            Mail:'',
            NewMail:'',
            Comfirm:'',
        }
        return (
            <View style={{ backgroundColor: '#FC6353', flex: 1 }}>
                    <StatusBar backgroundColor="#FC6353" barStyle="light-content" />

                <Image style={styles.change} source={require('../../assets/images/changemail.png')}></Image>
                <View style={[styles.TextInput, { flexDirection: 'row' }]}>
                    <Image style={styles.icon} source={require('../../assets/images/mail64.png')} />
                    <TextInput placeholderTextColor='#fff' style={{ marginTop: 15 }}  placeholder="Your Mail"></TextInput>
                </View>
                <View style={[styles.TextInput, { flexDirection: 'row' }]}>
                    <Image style={styles.icon} source={require('../../assets/images/mail64.png')} />
                    <TextInput placeholderTextColor='#fff' style={{ marginTop: 15 }}  placeholder="New Mail"></TextInput>
                </View>
                <View style={[styles.TextInput, { flexDirection: 'row' }]}>
                    <Image style={styles.icon} source={require('../../assets/images/mail64.png')} />
                    <TextInput placeholderTextColor='#fff' style={{ marginTop: 15 }}  placeholder="Comfirm Mail"></TextInput>
                </View>
                <View style={styles.seperator}></View>
                <TouchableOpacity style={styles.save}>
                    <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ChangeEmail;
