import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Logo from '../Logo';
import Form from '../Form';

export default class Login extends Component {

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<Form type="Login With Twitter"/>
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