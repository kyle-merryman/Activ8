import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

	componentDidMount() {
		axios.get("/auth/user").then((user) => {
			console.log(user);
		})
	}
	render() {
		return (
			<div>
				<p>hellooo</p>
			</div>
		)
	}
}
