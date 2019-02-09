import React from 'react';
import "./ProfileHeader.css";
import ProfileCard from "../ProfileCard/ProfileCard";

export default function ProfileHeader({ initals }) {
    return (
        <div className="profile-header">
            <ProfileCard initals={initals} />
        </div>
    )
}
