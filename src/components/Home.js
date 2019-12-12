import React from "react";
import { Body, Container, Drawer, Header, Icon, Left, Right, Tab, TabHeading, Tabs, Text, Button } from "native-base";
import { BackHandler, Image, StatusBar, ToastAndroid, TouchableOpacity, View, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import Profile from "./Profile";
import TrendingHashtags from "./TrendingHashTags";

var backButtonPressedOnceToExit = false;
import Timeline from './Timeline'

class Home extends React.Component {
  constructor(props) {
    super(props);
    const drawer = Drawer;
    this.state = {
      openReportMurmurModal:false,
      scrollTopTab: false,
      showToast: false,
      currentTab: 0
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentWillMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  };
  renderTabs = (tabId) => {
    let normalTab = (
      <View style={styles.tabContentBox}>
        <Image
          source={this.returnTabImageUri(tabId)}
          resizeMode="cover"
          style={this.state.currentTab == tabId ? styles.activeTab : styles.inactiveTab}
        />
      </View>
    );

    let tab;
    if (tabId == this.state.currentTab) {
      tab = (
        <TabHeading style={{ backgroundColor: "white" }}>
          <TouchableOpacity
            style={styles.touchables}
            // onPress={() => (this.state.currentTab == tabId) ? this.onTabPress(tabId) : ''
            // }
            >
            {normalTab}
          </TouchableOpacity>
        </TabHeading>
      );
    } else {
      tab = (
        <TabHeading style={{ backgroundColor: "white" }}>
          {normalTab}
        </TabHeading>
      );
    }

    let tabContent;
    if (tabId == 0) 
      tabContent = (<Timeline screen="home"/>);
    else if(tabId == 1) 
      tabContent = (<Timeline screen="like"/>);
      // tabContent = (<RecycleView screen="feed" scrollTop={this.state.scrollTopTab} setTopFalse={this.setScrollFalse} {...this.props} />);
    else if (tabId == 2) 
      tabContent = (<Timeline screen="bookMark"/>);
    else
      tabContent = (<Timeline screen="profile"/>);
  

    let tabContainer = (
      <Tab
        tabStyle={{ backgroundColor: "#ebebe0" }}
        textStyle={styles.tabHeadingText}
        activeTabStyle={{ backgroundColor: "#d4ccff" }}
        activeTextStyle={{ fontSize: 25, fontWeight: "bold" }}
        heading={tab}>
        {tabContent}
      </Tab>
    );

    return tabContainer;
  }
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

  returnTabImageUri = (tabId) => {
    if (tabId == 0) return require("../assets/images/home_icon.png");
    if (tabId == 1) return require("../assets/images/like_icon.png");
    if (tabId == 2) return require("../assets/images/bookmark_icon.png");
    if (tabId == 3) return require("../assets/images/profile_icon.png");
  }

  changeTab = (i, ref, from) => {
    this.setState({ currentTab: i });
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
            <Right style={{ height: "70%", alignItems: "center" }}>
              <TouchableOpacity
                transparent
                onPress={() => {
                 
                }}
                style={{ width: "40%", alignItems: "flex-end", height: "70%" }}
              >
                <Image
                  source={require("../assets/images/search.png")}
                  resizeMode="contain"
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
            </Right>
          </Header>
          <TrendingHashtags/>
          <Tabs locked tabBarPosition="bottom" transparent
            ref={component => (this._tabs = component)}
            onChangeTab={({ i, ref, from }) => this.changeTab(i, ref, from)}
          >
            {this.renderTabs(0)}
            {this.renderTabs(1)}
            {this.renderTabs(2)}
            {this.renderTabs(3)}
          </Tabs>
        </Container>
      </Drawer>
    );
  }
}
const styles = StyleSheet.create({
  tabHeadingText: {
    color: "white",
    fontSize: 25,
    fontFamily: "ProximaNova-Regular"
  },
  tabContentBox: {
    flexDirection: "column",
    alignItems: 'center'
  },
  inactiveTab: {
    width: 18,
    height: 18,
    tintColor: '#a6a6a6',
    borderWidth: 1
  },
  activeTab: {
    width: 20,
    height: 20,
    tintColor: "#455a64",
    borderWidth: 1.2
  },
  touchables: {
    backgroundColor: 'white',
    flex: 1,
    height: 50,
    justifyContent: 'center'
  }
});
export default (Home);
