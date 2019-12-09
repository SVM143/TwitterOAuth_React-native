import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView,TouchableOpacity,Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ImagePicker from "react-native-image-picker";
import Store from "../config/storage";
import { Actions } from 'react-native-router-flux';
import { mediaHandler } from '../utils/MediaPicker'


export default class ProfileUpload extends Component {

constructor(props){
    super(props);
    this.state={
        profileUri:undefined
    }
}
Validate=()=>{
  this.state.profileUri ? Actions.Home():
  Alert.alert(
    `Please Upload Profile Pic`,
    '',
    [
      { text: 'OK', style: 'Ok' },
    ],
    { cancelable: true }
  )
}

pickImageHandler = () => {
  const options = {
    noData: true,
    storageOptions: {
      skipBackup: true
    },
  };
  ImagePicker.showImagePicker(options, (response) => {
    this.setState({ picker: false })
    console.log('Response = ', response);
    //console.log('data = ', response.data);
    if (response.didCancel) {
      console.log('User cancelled photo picker');
    }
    else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }
    else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    }
    else {
      response ? Store.set("userDetails", JSON.stringify(response)): null
      let src = { uri: response.uri }
      this.setState({
        profileUri: src,
      });
    }
  });
}


render(){
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.titleBar}>
                   
                </View>
                <View style={{ alignSelf:'center'}}>
                    <View style={styles.profileImage}>
                        <Image source={this.state.profileUri?this.state.profileUri:require("../assets/images/avatar.png")} style={{height:200,width:200}}></Image>
                    </View>
                    <TouchableOpacity 
                       onPress= {this.pickImageHandler}
                      style={styles.add}
                    >
                      <Image source={require("../assets/images/pencil.png")} style={{height:50,width:50,tintColor:'#fff'}}></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Welcome</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Please Upload The Photo</Text>
                </View>
                
                <View style={{alignSelf: "center",marginTop:"20%"}}>
                <TouchableOpacity style={styles.button}
                        onPress={this.Validate}
                >
                 <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                </View>     
            </ScrollView>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop:'15%',
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "#52575D"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        // elevation: 1,
        // overflow: "hidden",
        height: 200, borderRadius: 100, width: 200 
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    mediaCount: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1
    },
    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },
    activityIndicator: {
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    },
    button: {
        width:200,
        backgroundColor:'#1c313a',
         borderRadius: 25,
          marginVertical: 10,
          paddingVertical: 13,
         
      },
      buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
      }
});