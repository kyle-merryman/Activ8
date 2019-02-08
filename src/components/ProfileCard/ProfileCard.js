import React from 'react';
import "./ProfileCard.css";
export default function ProfileCard({ initals }) {
    return (
        <div className="profile-card">
            {initals}
        </div>
    )
}
