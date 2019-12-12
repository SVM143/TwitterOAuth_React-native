import React from "react";
import {  View, Image, Dimensions, StatusBar } from "react-native";
import { Actions } from "react-native-router-flux";
import Store from "../config/storage"
const { width } = Dimensions.get("screen");
const { height } = Dimensions.get("screen");
import {getAllData} from "../ApiFetch/accountActions"

const styles = {
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width,
    height
  }
};

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      account_Details:undefined,
      user_Details:undefined
    }
    //console.log("this.props.data", this.props.data)
  }
  
  componentDidMount(){
    getAllData();
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
      setTimeout(() => {
      this.state.account_Details && this.state.user_Details ? Actions.Home() : 
      this.state.account_Details ? Actions.ProfileUpload() : Actions.login()
      },2000)
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#455a64" barStyle="light-content" translucent={false} />
        <View>
          <Image
            source={require("../assets/images/recruit.jpg")}
            style={{ height: height, width: width }}
            resizeMode="cover"
          />
        </View>
      </View>
    );
  }
}

export default (Splash);
