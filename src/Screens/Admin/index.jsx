import React from 'react';
import styled, { css } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../Component/sidebar/index';
import Header from '../../Component/Header';
import Flex from '../../Component/Flex';

const Wrapper = styled(Flex)`
    width: 100%;
`;

const RightWrapper = styled.div`
    flex-grow: 1;
    position: relative;
    left: ${props => props.left || 0}
    ${props => props.width &&
        css`
            max-width: calc(100% - ${props.width}px);
        `
    }
`;

const Content = styled(Flex)`
    background-color: #f4f5f6;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 15px;
    padding-right: 15px;
`;

const NotificationWrapper = styled.div`
    min-width: 300px;
    max-width: 300px;
    border: 1px solid #e4e6e8;
`;

const NotificationContent = styled.div`
    background-color: white;
    padding: 10px;
`;

const MainWrapper = styled.div`
    flex-grow: 1;
    padding-right: 10px;
`;

const NotificationP = styled.p`
    font-size: 17px;
    margin-bottom: 0px;
`;
const P = styled.p`
    font-size: 17px;
    font-style: italic;
    font-weight: bold;
`;

class AdminDashboard extends React.Component {
    state = {
        showSidebar: true,
    }
    toggleSidebar = () => {
        this.setState({
            showSidebar: !this.state.showSidebar
        });
    }
    render() {
        const { showSidebar } = this.state;
        return (
            <Wrapper>
                <Sidebar type="admin" showSidebar={showSidebar} name="Kalid" last=" " />
                <RightWrapper left={showSidebar ? '250px' : '0px'} width={showSidebar && 250}>
                    <Header type="admin" toggleSidebar={this.toggleSidebar} name="kalid"></Header>
                </RightWrapper>

            </Wrapper>
        );
    }
}

export default AdminDashboard;