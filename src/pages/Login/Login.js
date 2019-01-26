import React, { Component } from 'react';
import "./Login.css";
import axios from "axios";

export default class Login extends Component {


    componentDidMount() {
        axios.get("/auth/user").then((user) => {
            console.log(user);
            if (user.data.user != null) {
                this.props.history.push("/home");
            }
        })
    }
    render() {
        return (
            <div className="center-this" >
                <a href="/auth/google">
                    <button type="button" className="btn btn-danger google-login">Sign In</button>
                </a>
            </div>
        )
    }
}
