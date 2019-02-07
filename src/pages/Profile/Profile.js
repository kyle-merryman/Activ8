import React, { Component } from 'react';
import LineGraph from "../../components/LineChart/LineChart";
import { Line } from 'react-chartjs-2';

export default class Profile extends Component {

    state = {
        chartData: {},

    }

    componentDidMount() {
        this.getChartData();
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
                <LineGraph chartData={this.state.chartData} />
            </div>
        )
    }
}
