import React from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';
import { Card, Progress, Result } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from "@fortawesome/free-solid-svg-icons";



const { Meta } = Card;
const Wrapper = styled.div`
    padding: 20px;
    background: #E9ECEF;
`;
const Row = styled.div`
    display: flex;
    height: 140px;
    margin-bottom: 10px;
`;



class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Number of users",
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(148, 0, 211)', 'rgb(75, 0, 130)', 'rgb(0, 0, 255)',
                    'rgb(0, 255, 0)', 'rgb(255, 255, 0)', 'rgb(255, 127 , 0)'],
                borderColor: 'rgb(255, 99, 132)',
                data: [3, 10, 5, 2, 20, 30, 45],
            }],

        }

        return (<Wrapper >

            <Row>

                <Card hoverable

                    bordered={false} style={{ width: 240, marginRight: 25 }}>

                    <Progress
                        strokeColor={{
                            '0%': '#87d068',
                            '100%': '#87d068',
                        }}
                        percent={99.9}
                    />

                </Card>
                <Card hoverable bordered={false} style={{
                    width: 240,
                    marginRight: 25
                }}>

                    <Progress
                        percent={79.9}
                        status="active"
                    />

                </Card>
                <Card hoverable bordered={false} style={{
                    width: 240,
                    marginRight: 25
                }}>
                    <Progress percent={70} status="exception" />

                </Card>
                <Card hoverable bordered={false} style={{ width: 240 }}>
                    <p>Card content</p>
                    <p>Card content</p>

                </Card>
            </Row>
            <div style={{ marginTop: 50, display: 'flex' }}>
                <Card hoverable title="Card title" bordered={false} style={{ width: 600, marginRight: 30 }}>
                    < Bar data={data}
                        width={10}
                        height={400}
                        options={{ maintainAspectRatio: false }}
                    />
                </Card>

                <Card hoverable title="Card title" bordered={false} style={{ width: 400, }}>
                    < Pie data={data}
                        width={10}
                        height={400}
                        options={{ maintainAspectRatio: false }}
                    />
                </Card>
            </div>
        </Wrapper>);
    }

}
export default Dashboard;