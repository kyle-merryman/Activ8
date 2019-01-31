import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import axios from 'axios';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home"
import Login from "./pages/Login/Login";
import About from './pages/Login/About/About';
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

export default class App extends Component {
	state = {
		displayName: ""
	}

	componentDidMount() {
		axios.get("/auth/user").then(user => {
			if (user.data.user !== null) {
				console.log(user.data.user);
				this.setState({ displayName: user.data.user.displayName })
			}
		})
	}

	test = () => {
		console.log("a works");
	}

	logout = (event) => {
		event.preventDefault();
		axios.post("/auth/logout").then(res => {
			window.location.replace("/")
		})
	}

	render() {
		return (
			<div>


				<Switch>
					<Route exact path="/" component={SignIn} />
					<Route exact path="/signin" component={SignIn} />
					<Route exact path="/signup" component={SignUp} />
					<Navbar logout={this.logout} displayName={this.state.displayName} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/about" component={About} />
				</Switch>


			</div>
		)
	}
}
