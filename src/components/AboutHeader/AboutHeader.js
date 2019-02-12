import React from 'react';
import "./AboutHeader.css";
import {Link} from "react-router-dom";

export default function AboutHeader() {
    return (
        <div className="about-header">
            
            <div className="about">
                <p>Be honorable. Be compassionate. Make a difference to show that you have lived and lived well. The best way to not feel hopeless is to get up and do something.
               <Link  id="join-link"to="/signup"> <button id="join"> Join</button> </Link>  to ACTIV8 your life.
    
                </p>
            </div>
        </div>
    )
}
