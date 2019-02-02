import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import axios from 'axios';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home"
import About from './pages/Login/About/About';
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Passions from "./pages/Passions/index";


export default class App extends Component {
	state = {
		email: ""
	}
	componentDidMount() {
		console.log(this.props)
		axios.get("/auth/user").then(user => {
			if (user.data.user !== null) {

				this.setState({ email: user.data.user.email })
			}
		})
	}
	//this fires everytime a change occurs within state, this is how we load data into the navbar
	componentDidUpdate() {
		if (this.state.email === "") {
			console.log(this.props)
			axios.get("/auth/user").then(user => {
				if (user.data.user !== null) {

					this.setState({ email: user.data.user.email })
				}
			})
		}

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
					<Route exact path="/passions" component={Passions} />
					<Navbar logout={this.logout} email={this.state.email} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/about" component={About} />
				</Switch>


			</div>
		)
	}
}
