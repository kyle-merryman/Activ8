import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";

export default class Home extends Component {

    state = {
        user: {}
    }

    componentDidMount() {
        axios.get("auth/user").then(user => {

            if (user.data === null) {
                window.location.replace("/")
            } else {
                this.setState({ user: user.data })
            }
        })
    }
    render() {
        return (
            <div>
                <p>Home</p>
            </div>
        )
    }
}
