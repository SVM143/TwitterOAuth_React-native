import { Container } from "native-base";
import React, { Component } from "react";
import {FlatList, View } from "react-native";
import MyListItem from "./sharedComponents/MyListItem"
import {youtubeData} from "../utils/data"

class Timeline extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  renderItem = ({ item, index }) => (
    <MyListItem
      data={item}
      index={index}
    />
  );

  render() {
    return (
      <Container style={{ backgroundColor: "#f2f2f4", paddingTop: 0 }}>
        <View style={{ paddingTop: 0, flex: 1 }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
              keyboardDismissMode="on-drag"
              extraData={this.state}
              data={youtubeData}
              renderItem={this.renderItem}
              onEndReachedThreshold={0.7}
              windowSize={61}
            />
       
        </View>
      </Container>
    );
  }
}

export default (Timeline);
