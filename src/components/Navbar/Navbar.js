import React from 'react';
import { Link } from 'react-router-dom'
import "./Navbar.css";
import axios from "axios";



export default function (props) {
    function home(path) {
        if (path === "/home") {
            return "#f05faa"
        }
    }
    function about(path) {
        if (path === "/about") {
            return "#f05faa"
        }
    }
    function profile(path) {
        if (path === "/profile") {
            return "#f05faa"
        }
    }
    function passions(path) {
        if (path === "/passions") {
            return "#f05faa"
        }
    }
    return (
        <div className="menu-area">
            <ul>
                <li><Link id="logo" to="/home">ACTIV8</Link></li>
                <li><Link style={{ background: home(window.location.pathname) }} to="/home">Home</Link></li>
                <li><Link style={{ background: about(window.location.pathname) }} to="/about">About</Link></li>
                <li><a href="#">{props.email} |<i className="fas fa-angle-double-down"></i></a>
                    <ul className="dropdown">
                        <li><a style={{ background: profile(window.location.pathname) }} href="/profile">Profile</a></li>
                        <li><a style={{ background: passions(window.location.pathname) }} href="/passions">Passions</a></li>
                        <li><a onClick={props.logout} href="#">Log Out</a></li>
                    </ul>
                </li>
            </ul>
        </div >
    )
}

