// Here i should have gone for device height but for Demo purpose it have hard Coded the height according to my device
// Map height dynamic when keyboard opens not done

import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View, Image, TextInput, SafeAreaView } from "react-native";
import MapView from 'react-native-maps';

import marker from './assets/images/pin.png'

const latitudeDelta = 0.025
const longitudeDelta = 0.025

class Home extends React.Component {
  state = {
    region: {
      latitudeDelta,
      longitudeDelta,
      latitude: 25.1948475,
      longitude: 55.2682899
    }
  }

  onRegionChange = region => {
    this.setState({
      region
    })
  }

  render() {
    const { region } = this.state

    return (
      <View style={{flex:1}}>
        <MapView
          style={styles.map}
          initialRegion={region}
          onRegionChangeComplete={this.onRegionChange}
        />
        <View style={styles.markerFixed}>
          <Image style={styles.marker} source={marker} />
        </View>
        <SafeAreaView style={styles.footer}>
          <View style={{ flex: 1 }}>
            <TextInput
            style={styles.textInput}
            // onChangeText={text => onChangeText(text)}
            value={JSON.stringify(region, null, 2)}
            />
            <TouchableOpacity 
            style={styles.btnText} 
            onPress={() => console.log("pressed") }>
            <Text style={{color:'#fff'}}>Submit</Text></TouchableOpacity>
           </View>
        </SafeAreaView>
          
      </View>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    height:550 // Here i should have gone for device height but for Demo purpose it have hard Coded it
  },
  textInput:{
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    width:240, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginLeft:40,
    marginRight:40 
  },
  markerFixed: {
    alignSelf:'center',
    position: 'absolute',
    top: '40%'
  },
  marker: {
    height: 35,
    width: 35
  },
  footer: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
    padding: 20,
    width: "100%",
    borderWidth: 0.3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor:'#fff'
  },
  btnText:{
    backgroundColor: '#876eff', 
    height: 44, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginLeft:40,
    marginRight:40,
    marginTop:40,
    borderRadius: 8,
  }
})

export default (Home);