import React from 'react';
import "./ProfileCard.css";
export default function ProfileCard({ initals }) {
    return (
        <div>
            {initals ?
                <div className="profile-card">
                    <p id="initials">{initals}</p>
                </div>
                :
                <div className="profile-card" style={{ backgroundColor: "#fff", backgroundPosition: "center", backgroundImageSize: "cover", backgroundImage: `url("https://loading.io/spinners/typing/lg.-text-entering-comment-loader.gif")` }}>
                    <p id="initials"></p>
                </div>
            }

        </div>
    )
}
