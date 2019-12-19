import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Image
} from 'react-native';
import { _twitterSignIn } from '../utils/functionalLogics';
import { Actions } from 'react-native-router-flux';
import Store from "../config/store";
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Form extends Component {
  
  async signup() {
    // let data =  await _twitterSignIn()
    Actions.ProfileUpload();
    data?Store.set("AccountDetails", JSON.stringify("Entered Data")):null
	}
	render(){
		return(
			<View style={styles.container}>
         <Icon.Button
          // name="twitter"
          backgroundColor="#00acee"
          onPress={this.signup}
        >
         Enter
          </Icon.Button>
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center',
    flexDirection:'row',
  },

  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      padding:5
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
});