import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  BackHandler,
  ToastAndroid
} from 'react-native';

import Logo from './Logo';
import Form from './Form';
import { Actions } from 'react-native-router-flux';
var backButtonPressedOnceToExit = false;
export default class Login extends Component {

  constructor(props){
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
  }

  componentWillMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  };

  handleBackButtonClick() {
    if (backButtonPressedOnceToExit) {
      BackHandler.exitApp();
    } else {
        backButtonPressedOnceToExit = true;
        ToastAndroid.show(
          "Press Back Button again to exit",
          ToastAndroid.SHORT
        );
        setTimeout(() => {
          backButtonPressedOnceToExit = false;
        }, 2000);
        return true;
    }
  };
	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<Form/>
			</View>	
			)
	}
}
const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
});