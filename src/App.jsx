import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

import axios from 'axios';

import Home from "./pages/Home"
import Login from "./pages/Login/Login";

export default class App extends Component {

	render() {
		return (
			<div>
				<Route exact path="/" component={Login} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/home" component={Home} />

			</div>
		)
	}
}
