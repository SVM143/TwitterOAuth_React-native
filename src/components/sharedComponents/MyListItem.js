
import React from "react";
import VideoCard from "./VideoCard";
class MyListItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        snoopedArr: []
      };
    }
  
    render() {
      return (
        <VideoCard
          data={this.props.data}
        />
      );
    }
  }

export default (MyListItem);
  