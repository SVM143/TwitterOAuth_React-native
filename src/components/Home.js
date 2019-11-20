import React from "react";
import { Body, Container, Drawer, Header, Icon, Left, Right, Tab, TabHeading, Tabs, Text, Button } from "native-base";
import { BackHandler, Image, StatusBar, ToastAndroid, TouchableOpacity, View, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import Profile from "./Profile";

var backButtonPressedOnceToExit = false;
import Timeline from './Timeline'

class Home extends React.Component {
  constructor(props) {
    super(props);
    const drawer = Drawer;
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
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
      if (Actions.currentScene !== "Home") {
        backButtonPressedOnceToExit = false;
        Actions.pop();
        return true;
      } else if (this.drawer._root._open) {
        this.closeDrawer();
        backButtonPressedOnceToExit = false;
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
    }
  };

  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={
          <Profile navigator={this.navigator} closeDrawer={this.closeDrawer} />
        }
        onClose={() => this.closeDrawer()}
        panOpenMask={0.25}
        openDrawerOffset={0.15}
        tapToClose={false}
      >
        <Container>
          <Header style={{ backgroundColor: "#455a64", height: 40 }}>
            <StatusBar
              backgroundColor="#455a64"
              barStyle="light-content"
              translucent={false}
            />
            <Left>
              <TouchableOpacity
                transparent onPress={() => this.openDrawer()}
                style={{ marginLeft: 10, width: "100%" }}
              >
                <Icon name="menu" style={{ color: "white" }} />
              </TouchableOpacity>
            </Left>
            <Body />
          </Header>
          <Timeline/>
        </Container>
      </Drawer>
    );
  }
}

export default (Home);
