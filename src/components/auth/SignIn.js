import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";
import axios from "axios"

export default class SignIn extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        username: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log
        axios.post("/auth/login", this.state).then((user) => {
            if (user.data !== null) {
                this.props.history.push('/home')
            }
        }).catch((err) => {
            console.log(err + "\nERROR, INCORRECT USERNAME OR PASSWORD")
        });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                        <span> Don't have an account? <Link to="/signup">Sign Up</Link></span>
                    </div>
                </form>
            </div>
        )
    }
}
