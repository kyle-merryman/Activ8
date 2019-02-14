import React from 'react';
import "./ProfileInfo.css";

export default function ProfileInfo({ firstName, lastName, email }) {
    return (
        <div className="card">
            <div className="card-body">
                <p><span>First Name:</span> {firstName}</p>
                <p><span>Last Name:</span> {lastName}</p>
                <p><span>Email:</span> {email}</p>
            </div>
        </div>
    )
}
