import React from "react";
import { Body, Container, Drawer, Header, Icon, Left, Right, Tab, TabHeading, Tabs, Text, Button } from "native-base";
import { BackHandler, Image, StatusBar, ToastAndroid, TouchableOpacity, View, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
// import ReferToast from './ReferToast';

var backButtonPressedOnceToExit = false;

class Home extends React.Component {
  constructor(props) {
    super(props);
    const drawer = Drawer;
    this.state = {
      openReportMurmurModal:false,
      scrollTopTab: false,
      showToast: false
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentDidMount() {
    // setTimeout(this._tabs.goToPage.bind(this._tabs, 0));
    // Store.get('mumrmur_account').then((keyValue) => {
    //   if (keyValue) {
    //     this.props.getUserData(JSON.parse(keyValue).account_name);
    //     // get account_id
    //     getUserProfileByID(JSON.parse(keyValue).account_name).then(response => {
    //       Store.set(
    //         "mumrmur_account_id",
    //         JSON.stringify(response.data._id)
    //       )
    //     })
    //   }
    // }, (error) => console.log(error));
  }

//   componentWillMount() {
//     BackHandler.addEventListener(
//       "hardwareBackPress",
//       this.handleBackButtonClick
//     );
//   };

//   componentWillReceiveProps(props) {
//     if(props.openReportMurmurModal){
//       this.setState({ openReportMurmurModal: props.openReportMurmurModal })
//     } else {
//       this.setState({ openReportMurmurModal: props.openReportMurmurModal })
//     }
//     if (props.openCommentModal) {
//       this.setState({ openCommentModal: props.openCommentModal })
//     } else {
//       this.setState({ openCommentModal: props.openCommentModal })
//     }
//     if (props.openReportModal) {
//       this.setState({ openReportModal: props.openReportModal })
//     } else {
//       this.setState({ openReportModal: props.openReportModal })
//     }
//     if (props.openVideoModal) {
//       this.setState({ openVideoModal: props.openVideoModal })
//     } else {
//       this.setState({ openVideoModal: props.openVideoModal })
//     }
//     if (props.openGalleryModal) {
//       this.setState({ openGalleryModal: props.openGalleryModal })
//     } else {
//       this.setState({ openGalleryModal: props.openGalleryModal })
//     }
//   };

  changeTab = (i, ref, from) => {
    this.setState({ currentTab: i });
  };

  onTabPress = (i) => {
    if (this.state.currentTab == i && this.state.scrollTopTab == false) {
      this.setState({
        scrollTopTab: true
      });
    }
  };

  setScrollFalse = () => {
    this.setState({
      scrollTopTab: false
    });
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
            onPress={() => (this.state.currentTab == tabId) ? this.onTabPress(tabId) : ''
            }>
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
    if (tabId == 0) {
      tabContent = (<RecycleView screen="timeline" scrollTop={this.state.scrollTopTab} setTopFalse={this.setScrollFalse} {...this.props} />);
    } else if (tabId == 1) {
      tabContent = (<RecycleView screen="feed" scrollTop={this.state.scrollTopTab} setTopFalse={this.setScrollFalse} {...this.props} />);
    } else if (tabId == 2) {
      tabContent = (<Wishper scrollTop={this.state.scrollTopTab} setTopFalse={this.setScrollFalse} />);
    } else if (tabId == 3) {
      tabContent = (<Notification scrollTop={this.state.scrollTopTab} setTopFalse={this.setScrollFalse} />);
    }

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

  returnTabImageUri = (tabId) => {
    if (tabId == 0) return require("../assets/home.png");
    if (tabId == 1) return require("../assets/feed.png");
    if (tabId == 2) return require("../assets/whispers.png");
    if (tabId == 3) return require("../assets/notification.png");
  }

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
          <Header style={{ backgroundColor: "#876eff", height: 40 }}>
            <StatusBar
              backgroundColor="#876eff"
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
            <Right style={{ height: "80%" }}>
              <TouchableOpacity
                transparent
                onPress={() => {
                  if (Actions.currentScene === ScreenKey.Home) {
                    Actions.search({ currentTab: this.state.currentTab });
                  }
                }}
                style={{ width: "40%", alignItems: "flex-end", height: "80%" }}
              >
                <Image
                  source={require("../assets/search.png")}
                  resizeMode="contain"
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
            </Right>
          </Header>
          {/* <ReferToast /> */}
          <TrendingHashTags />
          <Tabs locked tabBarPosition="bottom" transparent
            ref={component => (this._tabs = component)}
            onChangeTab={({ i, ref, from }) => this.changeTab(i, ref, from)}
          >
            {this.renderTabs(0)}
            {this.renderTabs(1)}
            {this.renderTabs(2)}
            {this.renderTabs(3)}
          </Tabs>
          {this.state.openReportModal ? <ReportModal /> : null}
          {this.state.openCommentModal ? <CommentModal/> : null}
          {this.state.openVideoModal ? <VideoPlayerComponent /> : null}
          {this.state.openGalleryModal ? <Gallery /> : null}
          {this.state.openReportMurmurModal? <ReportMurmur/>:null}
          <MurmurPost />
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
    tintColor: '#876eff',
    borderWidth: 1.2
  },
  touchables: {
    backgroundColor: 'white',
    flex: 1,
    height: 50,
    justifyContent: 'center'
  }
});

const mapDispatchToProps = dispatch => {
  return {
    getUserData: (account_name) => {
      dispatch(getUserData(account_name));
    }
  };
};

const mapStateToProps = state => {
  return {
    // userData: state.userData,
    openReportModal: state.accoutData.openReportModal,
    openVideoModal: state.accoutData.openVideoModal,
    openGalleryModal: state.accoutData.openGalleryModal,
    openCommentModal: state.accoutData.openCommentModal,
    openReportMurmurModal:state.accoutData.openReportMurmurModal
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
