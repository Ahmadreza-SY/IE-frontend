import React from "react";
import ReactDOM from "react-dom";
// import App from './App';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "src/resources/fonts/iransans-fonts/fonts.css";
import "src/resources/my-icons-collection/font/flaticon.css";

import Home from "src/views/home/home"
import Profile from "src/views/profile/Profile";
import Project from "src/views/project/project";


ReactDOM.render(
	<Router>
		<div>
			<Route path="/project/:projectId" component={Project} />
			<Route path="/profile/:userId" component={Profile} />
			<Route path="/home" component={Home} />

		</div>
	</Router>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
