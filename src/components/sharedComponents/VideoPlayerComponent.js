import React from 'react';
import {
  StyleSheet,
  View,
  PixelRatio,
  Dimensions,
  AppRegistry
} from 'react-native';
import YouTube from 'react-native-youtube';
import {getId} from "../../utils/functionalLogics"
export default class VideoPlayerCompenent extends React.Component {
  constructor(props){
  super(props)
  console.log("seofusefbweofiuwe",props)
  this.state = {
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: true,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    playerWidth: Dimensions.get('window').width,
  };
}

  _youTubeRef = React.createRef();

  render() {
    return (
      <View style={styles.container}>
        <YouTube
          ref={this._youTubeRef}
          apiKey="AIzaSyAob3nya2dyzxue0xz_0D3Yfdk-rhaTTt8"
          videoId={getId(this.props.data)}
          play={this.state.isPlaying}
          loop={this.state.isLooping}
          fullscreen={this.state.fullscreen}
          controls={1}
          style={[
            { height: PixelRatio.roundToNearestPixel(this.state.playerWidth / (16 / 9)) },
            styles.player,
          ]}
          onError={e => {
            this.setState({ error: e.error });
          }}
          onReady={e => {
            this.setState({ isReady: true });
          }}
          onChangeState={e => {
            this.setState({ status: e.state });
          }}
          onChangeQuality={e => {
            this.setState({ quality: e.quality });
          }}
          onChangeFullscreen={e => {
            this.setState({ fullscreen: e.isFullscreen });
          }}
          onProgress={e => {
            this.setState({ currentTime: e.currentTime });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems:'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingBottom: 5,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
});


AppRegistry.registerComponent('VideoPlayerCompenent',()=> VideoPlayerComponent)