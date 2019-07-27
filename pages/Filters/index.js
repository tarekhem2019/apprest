//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Slider } from 'react-native';
import styles from './style'

class Filters extends Component {
    constructor() {
        super()
        this.state = {
            backgroundColor: '#FC6353',
            backgroundColor1: '#FC6353',
            backgroundColor2: '#FC6353',
            backgroundColor3: '#FC6353',
            backgroundColor4: '#FC6353',
            backgroundColor5: '#FC6353',
            backgroundColor6: '#FC6353',
            backgroundColor7: '#FC6353',
            backgroundColor8: '#FC6353',
            backgroundColor9: '#FC6353',
            bool:true,
            bool1:true,
            bool2:true,
            bool3:true,
            bool4:true,
            bool5:true,
            bool6:true,
            bool7:true,
            bool8:true,
            bool9:true,
            SliderValue :0

        }
    }
    onPress = (id) => {
        switch (id) {
            case 1:
            if(this.state.bool1){
                this.setState({ backgroundColor1: '#90BC1B' ,bool1:false});
            }
            else{
                this.setState({ backgroundColor1: '#FC6353',bool1:true});
            }
                break;
            case 2:
            if(this.state.bool2){
                this.setState({ backgroundColor2: '#90BC1B' ,bool2:false});
            }
            else{
                this.setState({ backgroundColor2: '#FC6353',bool2:true});
            }            
            break;
            case 3:
            if(this.state.bool3){
                this.setState({ backgroundColor3: '#90BC1B' ,bool3:false});
            }
            else{
                this.setState({ backgroundColor3: '#FC6353',bool3:true});
            }  
            break;
            case 4:
            if(this.state.bool4){
                this.setState({ backgroundColor4: '#90BC1B' ,bool4:false});
            }
            else{
                this.setState({ backgroundColor4: '#FC6353',bool4:true});
            }  
            break;            
            case 5:
            if(this.state.bool5){
                this.setState({ backgroundColor5: '#90BC1B' ,bool5:false});
            }
            else{
                this.setState({ backgroundColor5: '#FC6353',bool5:true});
            }    
            break;
            case 6:
            if(this.state.bool6){
                this.setState({ backgroundColor6: '#90BC1B' ,bool6:false});
            }
            else{
                this.setState({ backgroundColor6: '#FC6353',bool6:true});
            }  
            break;  
            case 7:
            if(this.state.bool7){
                this.setState({ backgroundColor7: '#90BC1B' ,bool7:false});
            }
            else{
                this.setState({ backgroundColor7: '#FC6353',bool7:true});
            }    
            break;
            case 8:
            if(this.state.bool8){
                this.setState({ backgroundColor8: '#90BC1B' ,bool8:false});
            }
            else{
                this.setState({ backgroundColor8: '#FC6353',bool8:true});
            }    
            break;
            case 9:
            if(this.state.bool9){
                this.setState({ backgroundColor9: '#90BC1B' ,bool9:false});
            }
            else{
                this.setState({ backgroundColor9: '#FC6353',bool9:true});
            }    
            break;
            case 0:
            if(this.state.bool){
                this.setState({ backgroundColor: '#90BC1B' ,bool:false});
            }
            else{
                this.setState({ backgroundColor: '#FC6353',bool:true});
            }    
            break;
        }
    }
    render() {
        return (
            <View style={{ backgroundColor: '#F7F7F7' }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={this.onPress.bind(this, 0)} style={[styles.buttons, { height: 30, width: '28%', backgroundColor: this.state.backgroundColor }]}>
                        <Text style={styles.txt}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPress.bind(this, 1)} style={[styles.buttons, { height: 30, width: '32%', backgroundColor: this.state.backgroundColor1 }]}>
                        <Text style={styles.txt}>Libanais</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPress.bind(this, 2)} style={[styles.buttons, { height: 30, width: '32%', backgroundColor: this.state.backgroundColor2 }]}>
                        <Text style={styles.txt}>Makloub</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row',marginTop:5 }}>
                <TouchableOpacity onPress={this.onPress.bind(this, 3)} style={[styles.buttons, { height: 30, width: '30%', backgroundColor: this.state.backgroundColor3 }]}>
                        <Text style={styles.txt}>Pizza</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPress.bind(this, 4)} style={[styles.buttons, { height: 30, width: '30%', backgroundColor: this.state.backgroundColor4}]}>
                        <Text style={styles.txt}>Plat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPress.bind(this, 5)} style={[styles.buttons, { height: 30, width: '30%', backgroundColor: this.state.backgroundColor5 }]}>
                        <Text style={styles.txt}>Sandwich</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' ,marginTop:5}}>
                    <TouchableOpacity onPress={this.onPress.bind(this, 6)} style={[styles.buttons, { height: 30, width: '30%', backgroundColor: this.state.backgroundColor6 }]}>
                        <Text style={styles.txt}>Tunis</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPress.bind(this, 7)} style={[styles.buttons, { height: 30, width: '30%', backgroundColor: this.state.backgroundColor7 }]}>
                        <Text style={styles.txt}>Ariana</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPress.bind(this, 8)} style={[styles.buttons, { height: 30, width: '30%', backgroundColor: this.state.backgroundColor8 }]}>
                        <Text style={styles.txt}>Manouba</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={this.onPress.bind(this, 9)} style={[styles.buttons, { height: 30, width: '35%', backgroundColor: this.state.backgroundColor9,marginTop:12}]}>
                    <Text style={styles.txt}>Ben Arous</Text>
                </TouchableOpacity>
                <Text style = {styles.txtslid}>Distance : { this.state.SliderValue}</Text>
                <Slider  step = { 1 }  minimumValue = { 0 }  maximumValue = { 30 } onValueChange={(ChangedValue) => this.setState({ SliderValue: ChangedValue })} thumbTintColor={'#90BC1B'} maximumTrackTintColor={'#90BC1B'} minimumTrackTintColor={"#90BC1B"}  style = {{ width: '50%' ,marginTop:10}} />
                <View style={styles.seperator}></View>
                <TouchableOpacity style={styles.save}>
                    <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default Filters;
