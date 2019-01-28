import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import axios from 'axios';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home"
import Login from "./pages/Login/Login";
import About from './pages/Login/About/About';

export default class App extends Component {
	state = {
		displayName: ""
	}

	componentDidMount() {
		axios.get("/auth/user").then(user => {
			if (user.data.user !== null) {
				// have to use user.data.user
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

				<Route exact path="/" component={Login} />

				<Route exact path="/login" component={Login} />
				<Navbar logout={this.logout} displayName={this.state.displayName} />
				<Route exact path="/home" component={Home} />
				<Route exact path="/about" component={About} />


			</div>
		)
	}
}
