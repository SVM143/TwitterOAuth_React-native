import {
    Card, CardItem, Container,
    // Title,
    // Content,
    Footer,
    FooterTab,
    Button,
    Icon,
    Header,
    Left,
    Body,
    Right, Text,
    // Thumbnail,
    View,
    Content
  } from "native-base";
  import React from "react";
  import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
  import { Actions } from "react-native-router-flux";
  import Store from "../config/storage";

  
  const { width, height } = Dimensions.get("screen");
  
  var self;
  class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        account_Details: undefined,
        user_Details:undefined
      };
      self = this;
    }
  
  
    componentDidMount() {
        this.mounted = true;
        Store.get("AccountDetails").then(
          keyValue => {
            if (keyValue) {
              this.setState({ account_Details: JSON.parse(keyValue) });
            }
          }, error => console.log(error)
        );
        Store.get("userDetails").then(
          keyValue => {
            if (keyValue) {
              this.setState({ user_Details: JSON.parse(keyValue) });
            }
          }, error => console.log(error)
        );
      }
  
  
    profileContent = () => {
      return (
        <View style={{flex:1,flexDirection:'row',paddingTop:50,paddingLeft:10,backgroundColor:"#455a64"}}>
          <View style={{flex:0.4,}}>
            <Image
                source={this.state.user_Details && this.state.user_Details?{uri:this.state.user_Details.uri}:require("../assets/images/avatar.png")}
                resizeMode="center"
                style={styles.avatar}
            >
            </Image>
           </View>
          <View style={{flex:0.6}}>
             <Text style={{ color: "white", fontFamily: "ProximaNova-Semibold", fontSize: 16 }}>
              </Text>
              <TouchableOpacity
                style={{ paddingTop: 2 }}
              >
                {this.state.account_Details ?
                <Text style={styles.normalText}>
                  { this.state.account_Details.EmailId}
                </Text>
                 : null
                }
              </TouchableOpacity>
          </View>
        </View>
      );
    };
  
    render() {
      return (
        <Container style={styles.container}>
          <View style={{ flex: 1 }}>
              <View style={{height:250,backgroundColor:"#fff"}}>
                {this.profileContent()}
              </View>
            <Footer>
              <FooterTab style={{ backgroundColor: 'white' }}>
                <CardItem>
                  <TouchableOpacity
                    onPress={() => {
                    Store.clearAll()
                    Actions.reset("login");
                    }}
                  >
                    <Left style={styles.logout}>
                      <Image
                        source={require("../assets/images/logout.png")}
                        resizeMode="contain"
                        style={{ width: 20, height: 20 }}
                      />
                      <Text style={styles.drawerItems}>Logout</Text>
                    </Left>
                  </TouchableOpacity>
                </CardItem>
              </FooterTab>
            </Footer>
          </View>
        </Container>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      height: height,
      backgroundColor: "white",
      width: width * 0.85
    },
    accountDrawer: {
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: 20,
      paddingBottom: 8,
      paddingTop: 8,
      alignItems: "center"
    },
    mainProfileContainer: {
    //   flex: 1,
    //   justifyContent: "center",
    //   alignItems: "center",
    //   paddingTop: 20,
    //   paddingRight: 15
    },
    profileContainer: {
      flexDirection: 'column',
      justifyContent: "center",
    //   paddingLeft: 20
    },
    avatar: {
      height: 100,
      borderRadius: 20,
      width: 100
    },
    normalText: {
      color: "#fff",
      fontFamily: "ProximaNova-Regular",
      fontSize: 14,
      paddingTop:10
    },
    drawerItems: {
      fontSize: 15,
      color: "#414042",
      fontFamily: "ProximaNova-Regular"
    },
    normalBold: {
      fontFamily: 'ProximaNova-Bold',
      color: '#fff',
      fontSize: 14
    },
    logout: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
  
  export default (Profile);
  