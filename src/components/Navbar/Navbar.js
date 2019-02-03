import React from 'react';
import { Link } from 'react-router-dom'
import "./Navbar.css";
import axios from "axios";



export default function (props) {

    return (
        <div className="menu-area">
            <ul>
                <li><Link id="logo" to="/home">ACTIV8</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="#">{props.email} |<i className="fas fa-angle-double-down"></i></a>
                    <ul className="dropdown">
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/passions">Passions</a></li>
                        <li><a onClick={props.logout} href="#">Log Out</a></li>
                    </ul>
                </li>
            </ul>
        </div >
    )
}

