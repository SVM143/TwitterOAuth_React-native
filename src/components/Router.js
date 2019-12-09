import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import { connect } from "react-redux";

import Login from './LoginPages/Login';
import VideoPlayerComponent from "./sharedComponents/VideoPlayerComponent"
import Home from "./Home"
import ProfileUpload from "../components/ProfileUpload"
import Splash from './splash'
import HashTag from './Hashtag';

class Routes extends Component {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			       <Scene key="login" component={Login} title="Login" />
				   <Scene key="VideoPlayerComponent" component={VideoPlayerComponent}  hideNavBar/>
				   <Scene key="Home" component={Home}  hideNavBar/>
				   <Scene key="ProfileUpload" component={ProfileUpload} hideNavBar />
				   <Scene key="Splash" component={Splash} hideNavBar initial={true} />
				   <Scene key="HashTag" component={HashTag} hideNavBar />
			    </Stack>
			 </Router>
			)
	}
}

export default connect()(Routes)