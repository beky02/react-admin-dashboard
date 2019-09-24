import React from 'react';
import { Menu, Icon, } from 'antd';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import Flex from '../Flex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faUserTimes, faSignOutAlt, faCalendarAlt, faInbox, faUsers } from "@fortawesome/free-solid-svg-icons";


const StyledMenu = styled(Menu)`
    background-color: #303030 !important;
    border-bottom: none;
    border-right: none ;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .ant-menu-submenu-horizontal > .ant-menu {
        margin-top: -2px;
    }

    .ant-menu-item:hover {
        border-radius: 0px 25px 25px 0px;
        background-color: #454545 !important;
    }

    .about-dropdown {
        border-bottom: none;
        &:hover {
            border-bottom: none;
        }
        li:hover {
            border-bottom: none;
        }
    }
    .ant-menu-item-group-list {
        padding: 0 0 10px 0;
    }

`;
const IconFont = styled(FontAwesomeIcon)`
    cursor: pointer;
    color: white;
    height: 24px;
   
`;
const LinkComp = styled(Link)`
   margin-top: 6px;
   color: white;
   font-size:16px;
   margin-left: 20px;
   &:hover {
        text-decoration: none;
    }
   
`
const Item = styled(Flex)`
    height: 50px;
    margin-top: 5px;
    padding-left: 20px;
    padding-bottom: 20px;
    cursor: pointer;
    &:hover {
        cursor: pointer;
        border-radius: 0px 25px 25px 0px;
        background-color: #454545 !important;

       
    }
    &:hover ${IconFont} {
        color: white;
      }
      &:hover ${LinkComp} {
        color: white;
       
      }

      ${({ active }) => active && `
      cursor: pointer;
      border-radius: 0px 25px 25px 0px;
      background-color: blue !important;
  `}
     
`;
const Wrapper = styled(Flex)`
      flex-direction: column;
     
`;


const SubMenu = Menu.SubMenu;

class AdminSidebar extends React.Component {
    constructor() {
        super()
        this.state = {
            active: null
        }
    }
    toggle = (position) => {
        if (this.state.active === position) {
            this.setState({ active: null })
        } else {
            this.setState({ active: position })
        }
    }

    myColor = (position) => {
        const style = []
        if (this.state.active === position) {
            style.push('orange');

            return style;
        }
        return "";
    }
    myBorder = (position) => {
        const style = []
        if (this.state.active === position) {
            style.push('0px 25px 25px 0px');

            return style;
        }
        return "";
    }

    render() {
        const { openKeys, onOpenChange } = this.props;
        const menu = [];
        const title = [
            { name: 'Dashboard', to: '/admin/dashboard' },
            { name: 'Send Content', to: '/admin/sendContent' },
            { name: 'User', to: '/admin/allUsers' },
            { name: 'Content', to: '/admin/enterContent' },
            { name: 'Delete', to: '/admin/delete' },
            { name: 'Calendar', to: '/admin/calendar' },
            { name: 'Account', to: '/admin/profile' }

        ]
        const icons = [faSignOutAlt, faInbox, faUsers, faUserCircle, faUserTimes, faCalendarAlt, faUserCircle]
        for (let i = 0; i < 7; i++) {
            const element = <Item style={{ background: this.myColor(i), border: this.myColor(i) }} onClick={() => { this.toggle(i) }}>
                <div style={{ width: 45 }}>
                    <IconFont icon={icons[i]} size="2x" style={{ marginTop: 10, marginRight: 10 }} />
                </div>

                <div style={{ width: 200,paddingTop:10 }}>
                    <LinkComp to={title[i].to}>{title[i].name}</LinkComp>
                </div>

            </Item>;
            menu.push(element);
        }

        return (
            <Wrapper>
                {menu}
            </Wrapper>
            
        );
    }
}

export default AdminSidebar;