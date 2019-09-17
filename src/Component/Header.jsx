import React from 'react';
import { Menu, Dropdown, Icon, Badge } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Flex from './Flex';

const HeaderWrapper = styled(Flex)`
    height: 60px;
    padding: 10px;
    flex-grow: 1;
    z-index: 1;
    box-shadow: 0 8px 6px -6px black;;
   
`;

const RightHeader = styled(Flex)``;

const NotificationWrapper = styled.div`
    margin-right: 20px;
`;

const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to='/login'>Log out</Link>
      </Menu.Item>
    </Menu>
  );

class Header extends React.Component {
    render() {
        const { toggleSidebar } = this.props;
        return(
            <HeaderWrapper justifyContent="space-between" alignItems="center">
                <Icon onClick={toggleSidebar} style={{ cursor: 'hand' ,fontSize: '20px' }} type="menu" />
                
            </HeaderWrapper>
        );
    }
}

export default Header;