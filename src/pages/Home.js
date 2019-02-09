import React, { Component } from 'react'
import axios from "axios";


export default class Home extends Component {

    state = {
        user: {}
    }

    componentWillMount() {
        axios.get("auth/user").then(user => {

            if (user.data === null) {
                window.location.replace("/")
            } else {
                console.log(user)
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
