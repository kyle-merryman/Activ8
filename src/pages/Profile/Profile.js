import React, { Component } from 'react';
import PieChart from "../../components/PieChart/PieChart";
import "./Profile.css";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import axios from 'axios';
import Header from "../../components/Header/index";
import ProfileCommits from "../../components/ProfileCommits/ProfileCommits";


export default class Profile extends Component {

    state = {
        chartData: {},
        initials: "",
        firstName: "",
        lastName: "",
        email: "",
        numOfPetitions: 0,
        numOfEvents: 0,
        numOfCharity: 0,
        numOfContact: 0,
        currentCommits: [],
    }

    componentWillMount() {
        this.handleSetUserData();
    }

    handleRenderCommits = () => {


        var currentCommits = this.state.currentCommits.map(c => (
            <ProfileCommits handleCommitDelete={this.handleCommitDelete} url={c.url} title={c.title} summary={c.summary} id={c.id} />
        ))


        return currentCommits;
    }
    handleSetUserData = () => {
        axios.get("/auth/user").then(user => {

            this.getChartData(user);
            var temp = "";
            temp = user.data.user.firstName[0] + user.data.user.lastName[0];
            this.setState({
                // user data
                initials: temp,
                firstName: user.data.user.firstName,
                lastName: user.data.user.lastName,
                email: user.data.user.email,
                currentCommits: user.data.user.currentCommits

            })
        })
    }
    getChartData(user) {
        // Ajax calls here
        this.setState({
            chartData: {
                labels: ['Petition', 'Event', 'Charity', 'Contact'],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            user.data.user.numOfPetitions,
                            user.data.user.numOfEvents,
                            user.data.user.numOfCharity,
                            user.data.user.numOfContacts

                        ],
                        backgroundColor: [
                            'rgba(239,220,127,1)',
                            'rgba(255, 99, 132, 0.6)',

                            'rgba(244, 186, 84, 1)',
                            'rgba(181,223,237,1)',

                        ]
                    }
                ]


            },

        })
    }

    handleCommitDelete = (id) => {
        var id = {
            id: id
        }
        axios.put("auth/deleteCommit", id).then((test) => {
            this.handleSetUserData();
        })
    }
    render() {
        return (

            <div>
                <ProfileHeader initals={this.state.initials} />
                <div className="flex-box-profile">
                    <ProfileInfo
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        email={this.state.email}
                    />
                    <PieChart chartData={this.state.chartData} />
                    <Header header={"COMMIT HISTORY"} />

                    {this.state.currentCommits.length ? this.handleRenderCommits() : <h2>There are no current commits</h2>}
                </div>

            </div>
        )
    }
}
