import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import VideoPlayerComponent from "./sharedComponents/VideoPlayerComponent"
import Home from "./Home"
import ProfileUpload from "../components/ProfileUpload"
import Splash from './splash'

export default class Routes extends Component {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			       <Scene key="login" component={Login} title="Login" />
				   <Scene key="VideoPlayerComponent" component={VideoPlayerComponent}  hideNavBar/>
				   <Scene key="Home" component={Home}  hideNavBar/>
				   <Scene key="ProfileUpload" component={ProfileUpload} hideNavBar />
				   <Scene key="Splash" component={Splash} hideNavBar initial={true} />
			    </Stack>
			 </Router>
			)
	}
}