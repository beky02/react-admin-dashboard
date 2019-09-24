import React from 'react';
import styled, { css } from 'styled-components';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../Component/sidebar/index';
import Header from '../../Component/Header';
import Flex from '../../Component/Flex';
import SendContent from './SendContent';
import EnterContent from './EnterContent';
import AllUser from './AllUsers';
import DeleteUser from './DeleteUser';
import Dashboard from './Dashboard';
import Profile from './Profile';
import ImgLogo from '../../Admin/logoo.png';
import { Menu, Dropdown, Icon, Badge, Avatar, Input, Tooltip, Drawer, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faCog, faSignOutAlt, faSearch, faTimesCircle,faBars,faListUl } from "@fortawesome/free-solid-svg-icons";
import {reactLocalStorage} from 'reactjs-localstorage';

const { Search } = Input;
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
    padding-bottom: 30px;

`;

const Logo = styled(Flex)`
   height: 65px;
   background-color: #363640;
   padding-left: 50px;
   justify-content: space-between;
   align-items: center;
   padding-right: 50px;
   position: fixed;
   z-index: 100;
   width: 100%;
   box-shadow: 3px 0px 5px -3px black;

`;

const NotificationContent = styled.div`
    background-color: white;
    padding: 10px;
`;

const MainWrapper = styled.div`
    flex-grow: 1;
`;

const Title = styled.p`
    font-size: 20px;
    margin-top: 16px;
    color: white;
    font-weight: bold;
    font-style: italic;
`;
const Row = styled(Flex)``;
const DropdownComp = styled(Dropdown)`
    color: white;
    border-radius: 5px;
    margin-left: 17px;
    padding: 5px 5px 5px 0px;
    &:hover {
        background-color: #3C4252;
        height: 65px;
        opacity:0.5;
        cursor: pointer;
    }

`;
const IconFont = styled(FontAwesomeIcon)`
    cursor: pointer;
    height: 24px;
`;
const LinkComp = styled(Link)`
   margin-top: 6px;
   color: #3C4252;
   
   &:hover {
        color: white;
        text-decoration: none
    }
   
`
const Item = styled(Flex)`
    padding-left: 15px;
    padding-bottom: 5px;
    &:hover {
        background-color:#E9ECEF;
        cursor: pointer;
       
       
    }
    &:hover ${IconFont} {
        color: #3C4252;
      }
      &:hover ${LinkComp} {
        color: #3C4252;
      }
`;
const InputStyled = styled(Input)`
    .ant-input {
        border-radius: 22px;
        background-color: #3C4252;
        border-color: white;
        color: white;
       
    }
   
`;

class AdminDashboard extends React.Component {
    state = {
        showSidebar: true,
        showSearch: false,
        visible: false
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    toggleSidebar = () => {
        this.setState({
            showSidebar: !this.state.showSidebar
        });
    }
    render() {
        let User =reactLocalStorage.getObject('account');
        const onChange = e => {
            console.log(e);
        };
        const { showSidebar, showSearch } = this.state;
        const menu = (
            <Menu style={{ width: 120, }}>
                <Item>
                    <IconFont icon={faUserCircle} size="1x" style={{ marginTop: 10, marginRight: 10 }} />
                    <LinkComp to='/admin/profile'>Profile</LinkComp>
                </Item>
                <Menu.Divider />
                <Item>
                    <IconFont icon={faCog} size="1x" style={{ marginTop: 10, marginRight: 10 }} />
                    <LinkComp to='/login'>Setting</LinkComp>
                </Item>

                <Menu.Divider />

                <Item>
                    <IconFont icon={faSignOutAlt} size="1x" style={{ marginTop: 10, marginRight: 10 }} />
                    <LinkComp to='/login'>Log out</LinkComp>
                </Item>
            </Menu>
        );
        return (
            <>
                <Logo>
                    <Row>
                        <img style={{ marginRight: '14px', height: 60, width: 60 }} src={ImgLogo} onClick></img>
                        <Title>Go Chanal</Title>
                        <IconFont icon={faBars} onClick={this.toggleSidebar} color= 'white'
                        style={{marginLeft:40, marginTop: 15}} ></IconFont>
                        
                        {showSearch &&
                        <InputStyled allowClear placeholder="Search . . . " a onChange={(e) => {
                            console.log(e.target.value)
                        }}
                            prefix={<IconFont icon={faSearch} color='white' style={{marginLeft:10}}/>}
                            suffix={
                                <IconFont icon={faTimesCircle} color='red' 
                                style={{marginLeft:10}}
                                onClick={
                                    () => {
                                        this.setState({
                                            showSearch: false
                                        });
                                    }} />
                            }
                            style={{ width: 460, marginLeft: 70, height: 40,marginTop: 12,paddingLeft:10 }} />

                    }

                    </Row>
                   

                    <Row style={{ alignItems: "center", width: 200 }} >

                        {
                            <Tooltip title="Click to search">
                                <span><IconFont icon={faSearch} color='white' size="1x" style={{ marginRight: 20 }} onClick={
                                    () => {
                                        this.setState({
                                            showSearch: true
                                        });
                                    }
                                } ></IconFont></span>
                            </Tooltip>

                        }



                        <Badge count="9">
                            <Icon style={{ fontSize: '20px', color: 'white' }} theme="filled" type="notification" />
                        </Badge>

                        <DropdownComp overlay={menu} >
                            <Row style={{ alignItems: "center" }}>
                                <Avatar style={{ marginLeft: '5px', marginRight: 10 }} size="large" />
                                <p style={{ color: 'white', marginRight: 10, textAlign: 'center', textTransform: 'capitalize', marginTop: 12, fontSize: 16 }}>{User.firstname}</p>

                            </Row>

                        </DropdownComp>
                        <IconFont icon={faListUl} onClick={this.showDrawer} color= 'white'
                        style={{marginLeft:15}} size='2x'></IconFont>
                       
                    </Row>


                    {/* <FontAwesomeIcon icon={faUnlock} size="3x" color='#FF7F00' /> */}

                </Logo>
                <Drawer
                    title="Today"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
                <Wrapper>
                    <Sidebar type="admin" showSidebar={showSidebar} name="Kalid" last=" " />
                    <RightWrapper left={showSidebar ? '250px' : '0px'} width={showSidebar && 250}>
                        <Header type="admin" toggleSidebar={this.toggleSidebar} ></Header>
                        <Content>
                            <MainWrapper>
                                <Switch>
                                  <Route exact path='/admin' component={Dashboard} />  
                                    <Route exact path='/admin/enterContent' component={EnterContent} />
                                    <Route exact path='/admin/allUsers' component={AllUser} />
                                    <Route exact path='/admin/sendContent' component={SendContent} />
                                    <Route exact path='/admin/delete' component={DeleteUser} />
                                    <Route exact path='/admin/dashboard' component={Dashboard} />
                                    <Route exact path='/admin/profile' component={Profile} />
                                </Switch>
                            </MainWrapper>
                        </Content>
                    </RightWrapper>

                </Wrapper>
            </>

        );
    }
}

export default AdminDashboard;