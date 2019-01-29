import React, { Component } from 'react';
import "./Login.css";
import axios from "axios";
import FontAwesome from "react-fontawesome";
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
            <div id="login-page">
                <div className="jumbotron">
                    <h2>ACTIV8</h2>

                </div>
                <div className="center-this" >

                    <ul id="google">
                        <li>
                            <a href="/auth/google">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span id="logo" ><FontAwesome style={{ color: "#4d4c4c" }} name='globe-americas' />
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}
