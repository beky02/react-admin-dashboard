import React from 'react';
import styled from 'styled-components';
import { Avatar } from 'antd';
import AdminSidebar from './Admin';
import UserSidebar from './User';
import ImgLogo from '../../Admin/logoo.png';
import ImgProfile from '../../Admin/kalid.jpg';
import moment from 'moment';

import Flex from '../Flex';
import CurrentTime from '../Time';


const Wrapper = styled.div`
    width: 250px;
    position: fixed;
    z-index: 1;
    margin-top: 65px;
    box-shadow: 3px 0px 5px -3px black;
    height: 100%;
`;
const Wrapper2 = styled.div`
    width: 80px;
    position: fixed;
    z-index: 1;
    background-color: #303030 !important;
    box-shadow: 3px 0px 5px -3px black;
`;

const Header = styled(Flex)`
    height: 15%;
    border-bottom: 1px solid white;
    background-color: #303030;
    flex-direction: column;
    padding-left: 20px;

`;

const Title = styled.h2`
    color: white;
    font-size: 21px;
    margin-left:50px;
`;

const Footer = styled.div`
    padding-top: 30px;
    padding-left: 0px;
    padding-right: 5px;
    padding-bottom: 5px;
    height: 85%;
    background-color: #363640 !important;
`;
const Logo = styled.div`
    height: 21%;
    display: flex;
    margin-top: 15px;
`;


class Sidebar extends React.Component {
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: [],
    };

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        const { openKeys } = this.state;
        const { showSidebar, type } = this.props;
        return (
            showSidebar ?
                (
                    <Wrapper>
                        <Header>
                            <Logo>
                        
                                <Title>
                                    {(() => {
                                        switch (type) {
                                            case "admin": return "Admin";
                                            case "user": return "User";
                                        }
                                    })()}</Title>
                            </Logo>
                           
                        </Header>

                        <Footer>
                            {
                                ((type) => {
                                    switch (type) {
                                        case 'admin': return <AdminSidebar
                                            openKeys={openKeys}
                                            onOpenChange={this.onOpenChange} />;
                                        case 'user': return <UserSidebar
                                            openKeys={openKeys}
                                            onOpenChange={this.onOpenChange} />;

                                        default: return <div></div>
                                    }
                                })(type)
                            }

                        </Footer>
                    </Wrapper>
                )
                :
                (<Wrapper2>
                    <p>check </p>
                </Wrapper2>
                )
        );
    }
}

export default Sidebar;