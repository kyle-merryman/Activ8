import React, { Component } from 'react';
import PieChart from "../../components/PieChart/PieChart";
import { Line } from 'react-chartjs-2';
import "./Profile.css";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import axios from 'axios';

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
        numOfContact: 0
    }

    componentWillMount() {

        axios.get("/auth/user").then(user => {
            this.getChartData(user);
            var temp = "";
            console.log(user.data.user.firstName)
            temp = user.data.user.firstName[0] + user.data.user.lastName[0];
            this.setState({
                // user data
                initials: temp,
                firstName: user.data.user.firstName,
                lastName: user.data.user.lastName,
                email: user.data.user.email,

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

                </div>

            </div>
        )
    }
}
