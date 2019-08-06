import React from 'react';
import styled from 'styled-components';
import { Avatar } from 'antd';
import AdminSidebar from './Admin';
import UserSidebar from './User';
import moment from 'moment';

import Flex from '../Flex';
import CurrentTime from '../Time';


const Wrapper = styled.div`
    width: 250px;
    height: 100vh;
    position: fixed;
`;

const Header = styled(Flex)`
    height: 29%;
    border-bottom: 1px solid white;
    background-color: #3C4252;
    flex-direction: column;
    padding-left: 20px;

`;

const Header2 = styled(Flex)`
    padding-bottom: 15px;
    padding-top: 10px;
    padding-right:20px;
    
`;

const StyledH3 = styled.h3`
    color: white;
    margin-bottom: 0px;
    
   
`;

const Title = styled.h2`
    color: white;
    font-size: 21px;
    margin-left:65px;
`;

const EmailP = styled.p`
    color: #9599A1;
    margin-bottom: 0px;
    margin-top: 5px;
`;

const Time = styled(Flex)`
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
`;

const Circle = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #57c438;
    margin-right: 5px;
`;

const Profile = styled.div`
    margin-top: 30px;
    margin-left: 33px;
`;

const Footer = styled.div`
    padding-top: 45px;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 5px;
    background-color: #303030;
    height: 71%;
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
                                <img style={{ marginLeft: 15, marginTop: 8 }} src="../../../public/logo.PNG"></img>
                                <Title>
                                    {(() => {
                                        switch (type) {
                                            case "admin": return "Admin";
                                            case "user": return "User";
                                        }
                                    })()}</Title>
                            </Logo>
                            <Profile>
                                <StyledH3 style={{ marginLeft: '10px' }}>{"John" + " " + "Doe"}</StyledH3>
                                <EmailP>kalid@gochanal.com</EmailP>
                                <Avatar style={{ marginLeft: '23px', marginTop: '29px', width: '70px', height: '70px' }} size="large" />

                            </Profile>
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
                (
                    <div></div>
                )
        );
    }
}

export default Sidebar;