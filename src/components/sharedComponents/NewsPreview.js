import {Body, CardItem } from "native-base";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import renderIf from "./renderif";
import { openCustomTab } from '../../utils/CustomTabs';
import FastImage from "react-native-fast-image";
import {PreviewFooter} from "./PreviewFooter"
export class NewsPreview extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <View style={{flex:1}}>
          <TouchableOpacity 
          style={{ paddingLeft: 10, paddingRight: 10, 
          paddingBottom: 20, height: 306, width: "100%"}}
          onPress={() => {
            this.props.previewLink.url? openCustomTab(this.props.previewLink.url):null
         }}
          >
          <CardItem style={{
              height: 306,
              borderWidth: 0.3,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              overflow: 'hidden',
              paddingLeft: 0,
              paddingBottom: 0,
              paddingTop: 0,
              paddingRight: 0,
              marginTop:0,
              marginBottom:0,
              borderColor: '#bdb9c1',
              backgroundColor:"#ececec",
          }}>
              <Body>
                <View style={{height: 180, padding: 0, width: "100%", marginLeft: 0, marginRight: 0,backgroundColor:"white" }}>
                  <FastImage
                    source={{uri: this.props.previewLink.urlToImage}}
                    style={{height:180}}
                  />
                </View>
            <TouchableOpacity
                style={{height: 110, flex: 1, justifyContent: 'space-around', paddingLeft: 16, paddingRight: 16, paddingTop: 16, paddingBottom: 0}}
                onPress={() => {
                    this.props.previewLink.url? openCustomTab(this.props.previewLink.url):null
                }}
              >
                  {renderIf(this.props.previewLink.title,
                    <Text
                      style={{
                        flex:2,
                        fontSize: 14,
                        fontFamily: "ProximaNova-Semibold",
                        color: "blue",
                      }}
                      numberOfLines={2}
                    >
                      {this.props.previewLink.title}
                    </Text>
                    )}

                  {/* {renderIf(this.props.previewLink.description, */}
                    <Text
                      style={{
                        flex: 2,
                        fontSize: 13,
                        fontFamily: "ProximaNova-Regular",
                      }}
                      numberOfLines={2}
                    >
                      {this.props.previewLink.description && this.props.previewLink.description.trim()}
                    </Text>
                {/* )} */}
                  <Text
                    style={{
                      flex:1,
                      fontSize: 12,
                      fontFamily: "ProximaNova-Regular",
                      color: '#313131'
                    }}
                    numberOfLines={1}
                  >
                    {this.props.previewLink.author}
                  </Text>
               </TouchableOpacity>
              </Body>
          </CardItem>
      </TouchableOpacity>
      <PreviewFooter/>
      </View>
      )
    }

}
