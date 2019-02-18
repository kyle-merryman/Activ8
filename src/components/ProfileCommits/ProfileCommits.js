import React from 'react';
import "./style.css"

export default function ProfileCommits(props) {
    return (
        <div>
            <div className="card">

                <div className="card-body">
                    <p
                        aria-label="click item"
                        href={props.url}
                        //style={{ backgroundImage: `url("${props.image}")` }}
                        className={` box`}

                    >
                        <h2 style={{ textTransform: "uppercase", textAlign: "center", fontWeight: "bold", borderBottom: "5px solid black" }}>{props.title}</h2>

                        <h3>{props.summary}</h3>
                        <button onClick={() => props.handleCommitDelete(props.id)} className="profileButton">Delete Commit</button>
                        <a style={{ textDecoration: "none", color: "black" }} className="links" href={props.url} target={"_blank"}>
                            <button className="viewButton">View Commit</button>
                        </a>
                    </p>
                </div>

            </div>
        </div >
    )
}
