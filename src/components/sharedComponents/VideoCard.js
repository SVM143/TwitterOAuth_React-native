import React from "react";
import { TouchableOpacity,View,Dimensions } from "react-native";
import VideoPlayerComponent from "./VideoPlayerComponent"
import {getImage} from "../../utils/functionalLogics"
import FastImage from 'react-native-fast-image'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Actions } from "react-native-router-flux";
class VideoCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View 
      style={{
        flex:1,
        overflow: 'hidden',
        paddingRight: 0,
        marginTop:20,
        height:300,
        width:Dimensions.get('window').width
        }}
        >
        <TouchableOpacity style={{ flex:1, overflow: 'hidden'}}
            onPress={() => {
             Actions.VideoPlayerComponent(this.props.data);
            }}>
                <FastImage
                    ref={ref => {
                        this.imageRef = ref;
                    }}
                    style={{ flex:1 }}
                    source={{
                        uri:getImage(this.props.data),
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                />
                <MaterialIcons name="play-circle-filled" color="white" size={70}
                    style={{
                        position: "absolute",
                        justifyContent: "center",
                        top: "40%",
                        left: "40%"
                    }}
                />
             </TouchableOpacity>
        </View>
    );
  }
}

export default (VideoCard);
