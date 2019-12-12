import { Container } from "native-base";
import React, { Component } from "react";
import {FlatList, View , ActivityIndicator,StyleSheet ,  Text } from "react-native";
import MyListItem from "./sharedComponents/MyListItem"
import {youtubeData} from "../utils/data"
import {NewsPreview} from "./sharedComponents/NewsPreview"
import {getNews} from "../ApiFetch/accountActions"
import {connect} from "react-redux";
import {PreviewFooter} from "../components/sharedComponents/PreviewFooter"

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state={
      loader:false,
      data:[]
    }
    this.props.getNews()
  }

  componentDidMount(){
    
  }

  componentWillReceiveProps(props){
    props.timeLineFeed ?this.setState({loader:true,data:props.timeLineFeed}):null
  }
  renderItem = ({ item, index }) => (
   <NewsPreview previewLink={item} />
    // console.log("item",item)
  );

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 12,
          width: "86%",
          // backgroundColor: "#CED0CE",
          // marginLeft: "14%"
        }}
      />
    );
  };

  render() {
    return (
      <Container style={{ backgroundColor: "#f2f2f4", paddingTop: 0 }}>
        <View style={{ paddingTop: 0, flex: 1 }}>
          {this.state.loader?
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
              keyboardDismissMode="on-drag"
              extraData={this.state}
              data={this.state.data}
              renderItem={this.renderItem}
              onEndReachedThreshold={0.7}
              windowSize={61}
              ItemSeparatorComponent={this.renderSeparator}
            />
            :
            <View style={styles.MainContainer}>
            <ActivityIndicator size="large" color="#876eff" />
            <Text
              style={{
                textAlign: "center",
                fontFamily: "ProximaNova-Regular",
                color: "#bfbac0"
              }}
            >
              Loading News ...
            </Text>
          </View>
            }
       
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
    height: "100%"
  }
});

const mapDispatchToProps = dispatch => {
    return {
      getNews: () =>{
        dispatch(getNews());
      },
      getLikes:()=>{
        dispatch(getLikes());
      }
    }
};

const mapStateToProps = (state) => {
  return {
    timeLineFeed: state.accountData.timeLineFeed,
    // recommendations: state.accoutData
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);
