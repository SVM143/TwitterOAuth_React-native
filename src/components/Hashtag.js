import React from "react";
import {
  StatusBar,
  Image
} from "react-native";
import {
  Container,
  // Tabs,
  // Tab,
  // TabHeading,
  Header,
  Left,
  Body,
  Right,
  // Title,
  Content,
  // Footer,
  // FooterTab,
  Button,
  Icon,
  Text,
  // List,
  // ListItem,
  // Switch,
  // Item,
  // Input,
  // Form,
  // DeckSwiper,
  Card,
  CardItem,
  // Thumbnail,
  View
} from "native-base";
import { Actions } from "react-native-router-flux";
import TimeLine from "./Timeline";
class HashTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {

      return (
        <Container style={{ flex: 1, backgroundColor: "#f2f2f4" }}>
          <Header style={{ backgroundColor: "#455a64" }}>
            <StatusBar backgroundColor="#455a64" barStyle="light-content" />
            <View style={{flex:1,flexDirection:"row",}}>
            <View style={{flex:0.1}}>
                <Button transparent style={{alignContent:"flex-start"}}onPress={() => Actions.pop()}>
                    <Image source={require('../assets/images/back-arrow.png')} resizeMode="contain" style={{ width: 25, height: 25 }} />
                </Button>
            </View>
            <View style={{flex:0.8,justifyContent:"center",alignContent:"center",alignItems:"center"}}>
                <Text style={{ color: 'white', fontSize: 18, fontFamily: 'ProximaNova-Bold', lineHeight: 22}}>
                    {this.props.hashTag}
                </Text>
            </View>
          </View>
          </Header>
          <Content>
            <TimeLine/>
          </Content>
        </Container>
      )
  }
}
export default HashTag;
