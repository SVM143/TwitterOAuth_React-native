import React, { Component } from "react";
import { FlatList, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Badge } from 'native-base';
import { Actions } from "react-native-router-flux";

class TrendingHashTags extends Component {
  state = {
    trendingHashTags: ['#blockchain','#technology','#bollywood','#hollywood','#robots']
  };

  randomColorArray = [
    '#E67E22', '#8E44AD', '#E74C3C', '#27AE60', '#3498DB'
  ];

  /**
   * Fetch all the Trending hashtags from the
   * server on the mounting of the component
  */
  /**
   * Recieve all the trending hashtags and render it in the component
   */

  /**
   * Navigate to the hashtag
   */
  loadTrendingHashTagMurmur = (item) => {
    Actions.HashTag({
      hashTag: item.split("#")[1],
      screen: 'hashtag'
    })
  }

  /**
   * Get random Colors for the trending HashTags
   */
  getRandomColor() {
    let randomIndex = Math.floor(Math.random() * this.randomColorArray.length);
    let randomColor = this.randomColorArray[randomIndex];
    return randomColor;
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.trendingHashTags}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item._id + index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => this.loadTrendingHashTagMurmur(item)}
            >
              <Badge style={styles.badgeStyle}>
                <Text style={[styles.textStyle, { color: this.getRandomColor() }]}>
                  {item}
                </Text>
              </Badge>
            </TouchableOpacity>
          )
         }
        />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F4',
    height: 40
  },
  badgeStyle: {
    marginTop: 5,
    height: 30,
    paddingRight: 15,
    paddingLeft: 15,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#fff',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontFamily: 'ProximaNova-Regular'
  }
});

export default TrendingHashTags;
