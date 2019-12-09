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
import {verifyEmail} from '../../utils/functionalLogics';
import { Actions } from 'react-native-router-flux';
import Store from "../../config/storage";

export default class Form extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      error:"",
      emailId:"",
      PassWord:undefined,
      emailError:"",
      passWordError:"",
    }
  }
  signup = ()=> {
    let data =  {EmailId:this.state.emailId}
    Actions.ProfileUpload();
    console.log("came here",data)
    data?Store.set("AccountDetails", JSON.stringify(data)):null
  }

  onChangeText = (text,type) =>{
    type == "Email"?this.setState({emailId:text,emailError:""}):this.setState({PassWord:text,passWordError:""})
  }

  onVerify = () =>{
   verifyEmail(this.state.emailId)?
   this.state.PassWord?this.signup():this.setState({passWordError:"Please Enter the PassWord"})
   :this.setState({emailError:"Please Enter Valid EmailId"})
  }
	render(){
		return(
			<View style={styles.container}>
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Email"
          placeholderTextColor = "#ffffff"
          selectionColor="#fff"
          keyboardType="email-address"
          onChangeText={text => this.onChangeText(text,"Email")}
          value={this.state.Email}
          // onSubmitEditing={()=> this.password.focus()}
        />
         <Text
          style={{
            textAlign: "center",
            color: "red",
            fontStyle: "italic",
            fontSize: 12
          }}
        >
          {this.state.emailError}
        </Text>
        <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor = "#ffffff"
            onChangeText={text => this.onChangeText(text,"Pass")}
            value={this.state.PassWord}
            // ref={(input) => this.password = input}
          />
          <Text
          style={{
            textAlign: "center",
            color: "red",
            fontStyle: "italic",
            fontSize: 12
          }}
        >
          {this.state.passWordError}
        </Text>
        <TouchableOpacity style={styles.button} onPress={this.onVerify}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:200,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }

});