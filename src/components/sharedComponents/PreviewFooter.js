import React from "react";
import { Image, TouchableOpacity, View,StyleSheet, ToastAndroid } from "react-native";
import {connect} from "react-redux";
import {setLikes,setBookMarks,setProfile,unLikePost} from "../../ApiFetch/accountActions"

class PreviewFooter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liked:this.props.like,
      marked:this.props.marked,
      likedData:[]
    }
  }

  getSnoopLogo(data) {
    if(data.like)
      return require("../../assets/images/like.png");
    else
      return require("../../assets/images/like.png");
  }
  
  getActionsImage(type,width,height){
    return (
      <Image
      source={this.getActionTypeImage(type)}
      resizeMode="contain"
      style={{ width: width, height: height }}
    />
    )
  }

  componentWillReceiveProps(props){
    props.likedData ? this.setState({likedData:props.likedData}):null
  }
  changeState(type){
    if(type == "like"){
      !this.state.liked ? 
      (ToastAndroid.show("You liked the Post",ToastAndroid.LONG),
       this.props.setLikes(Object.assign({like:true},this.props)),
       this.props.setProfile(Object.assign({like:true},this.props))
      ) 
      :
      (this.props.unLikePost(this.props.likedData,this.props.author),
      (ToastAndroid.show("You unliked the Post",ToastAndroid.LONG)))
    }
    else {
      !this.state.marked ? 
       (ToastAndroid.show("You BookMarked the Post",ToastAndroid.LONG),
        this.props.setBookMarks(Object.assign({marked:true},this.props)),
        this.props.setProfile(Object.assign({marked:true},this.props))
       )
       : 
       ToastAndroid.show("BookMark Removed",ToastAndroid.LONG)
     }
      type == "like" ? this.setState({liked:!this.state.liked}): this.setState({marked:!this.state.marked})
  }
  getActionTypeImage(type){
    if (type === "like")
      return require("../../assets/images/like.png");
    else 
      return require("../../assets/images/mark.png");
  }

  render() {
    return (
        <View style={{flexDirection: "row", justifyContent: 'flex-start',height: 50,padding:16}}>
         <TouchableOpacity style={{flex: 0.2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',height:25}}
          onPress={()=>{
            this.changeState('like')
          }}
         >
            <Image
                ref={ref => {
                this.imageSnoopRef = ref;
                }}
                source={this.getActionTypeImage("like")}
                resizeMode="contain"
                style={{ width: 20,height:20,tintColor: this.state.liked?"red":"#455a64"}} 
            />
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 0.2, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',height:25}}
             onPress={()=>{
              this.changeState('mark')
            }}
          >
            <Image
                ref={ref => {
                this.imageSnoopRef = ref;
                }}
                source={this.getActionTypeImage("mark")}
                resizeMode="contain"
                style={{ width: 20,height:20,tintColor:this.state.marked?"red":"#455a64"}} 
            />
          </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  footerUperlayer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center"
  },
  textStyle:{
     fontSize: 13,
     fontFamily: 'ProximaNova-Regular',
     color: '#070707'
    },
  footerLowerlayer:{
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems:"center",
  
  },
  rectangle : {
    // width: 46,
    height: 20,
    opacity: 0.19,
    borderRadius: 10,
    backgroundColor: "#f1e937",
    flex: 1,flexDirection:"row",alignItems:"center",alignContent:"center"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    setLikes:(data)=>{
      dispatch(setLikes(data));
    },
    setBookMarks:(data)=>{
      dispatch(setBookMarks(data));
    },
    setProfile:(data)=>{
      dispatch(setProfile(data))
    },
    unLikePost:(data)=>{
      dispatch(unLikePost(data))
    }
  }
};
const mapStateToProps = (state) => {
  console.log("2345234534545",state)
  return {
    likedData: state.accountData.likedData,
    bookMarkData: state.accountData.bookMarkData,
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewFooter)