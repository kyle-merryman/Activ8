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
        initials: ""

    }

    componentDidMount() {
        this.getChartData();
        axios.get("/auth/user").then(user => {
            var temp = "";
            console.log(user.data.user.firstName)
            temp = user.data.user.firstName[0] + user.data.user.lastName[0];
            this.setState({
                initials: temp
            })

        })
    }

    getChartData() {
        // Ajax calls here
        this.setState({
            chartData: {
                labels: ['Charity', 'Event', 'Petition', 'Contact'],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            617594,
                            181045,
                            112045,
                            104545,

                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(22, 212, 98, 0.6)',
                            'rgba(250, 171, 11, 0.6)',

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
                    <ProfileInfo />
                    <PieChart chartData={this.state.chartData} />
                </div>

            </div>
        )
    }
}
