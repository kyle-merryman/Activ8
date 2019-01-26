import React, { Component } from 'react'
import axios from "axios";

export default class Home extends Component {


    logout = (event) => {
        event.preventDefault()
        console.log('logging out')
        axios.post('/auth/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.setState({
                    loggedIn: false,
                    user: null
                })
            }
            this.props.history.push("/");
        })
    }


    render() {
        return (
            <div>
                <p>Home</p>

                <button onClick={this.logout} type="button" className="btn btn-danger google-login">Sign In</button>
            </div>
        )
    }
}
