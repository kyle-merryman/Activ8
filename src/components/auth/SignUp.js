import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
export default class SignUp extends Component {

    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        userName: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {

        e.preventDefault();
        console.log("test");
        axios.post("/auth/signup", this.state).then((user) => {
            if (user.data.error) {
                console.log(user.data.error)
            } else {
                this.props.history.push('/home')
            }
        }).catch((err) => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="userName">Username</label>
                        <input type="text" id="userName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">FirstName</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">LastName</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                        <span> Have an account? <Link to="/signin">Sign In</Link></span>
                    </div>
                </form>
            </div>
        )
    }
}
