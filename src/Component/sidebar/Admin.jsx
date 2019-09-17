import React from 'react';
import { Menu, Icon, } from 'antd';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import Flex from '../Flex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faCog, faSignOutAlt, faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";


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
`;
const LinkComp = styled(Link)`
   margin-top: 6px;
   color: white;
   width: 192px;
   font-size:16px;
   margin-left: 7px;
   &:hover {
        text-decoration: none;
    }
   
`
const Item = styled(Flex)`
    height: 39px;
    margin-top: 5px;
    padding-left: 30px;
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
    toggle = (position) =>{
        if (this.state.active === position) {
          this.setState({active : null})
        } else {
          this.setState({active : position})
        }
      }
      
      myColor = (position) => {
        const  style = []
        if (this.state.active === position) {
            style.push('orange');
           
          return style;
        }
        return "";
      }
      myBorder = (position) => {
        const  style = []
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
            {name : 'Dashboard', to: '/admin/dashboard'},
            {name : 'Send Content', to: '/admin/sendContent'},
            {name : 'User', to: '/admin/allUsers'},
            {name : 'Content', to: '/admin/enterContent'},
            {name : 'Delete', to: '/admin/delete'},
            {name : 'Calendar', to: '/admin/calendar'},
            {name : 'Profile', to: '/admin/profile'}

        ]
        for(let i = 0; i < 7; i++ ){
            const element = <Item style={{background: this.myColor(i), border: this.myColor(i) }} onClick={() => {this.toggle(i)}}>
                    <IconFont icon={faSignOutAlt} size="1x" style={{ marginTop: 10, marginRight: 10 }} />
                    <LinkComp to={title[i].to}>{title[i].name}</LinkComp>
             </Item>;
            menu.push(element);
        }
        
        return (
            <Wrapper>
                {menu}
                {/* <Item active={this.state.active} onClick={this.handleButton}>
                    <IconFont icon={faSignOutAlt} size="1x" style={{ marginTop: 10, marginRight: 10 }} />
                    <LinkComp to=''></LinkComp>
                </Item>
                <Item active={this.state.active} onClick={this.handleButton}>
                    <IconFont icon={faSignOutAlt} size="2x" style={{ marginTop: 5, marginRight: 10 }} />
                    <LinkComp to='/admin/sendContent'></LinkComp>
                </Item>
                <Item>
                    <IconFont icon={faSearch} size="2x" style={{ marginTop: 5, marginRight: 10 }} />
                    <LinkComp to='/admin/search' >Search</LinkComp>
                </Item>
                <Item>
                    <IconFont icon={faSignOutAlt} size="1x" style={{ marginTop: 10, marginRight: 10 }} />
                    <LinkComp to='/admin/allUsers'>Users</LinkComp>
                </Item>
                <Item>
                    <IconFont icon={faSignOutAlt} size="1x" style={{ marginTop: 10, marginRight: 10 }} />
                    <LinkComp to='/admin/enterContent'>Content</LinkComp>
                </Item>
                <Item >
                    <IconFont icon={faSignOutAlt} size="1x" style={{ marginTop: 10, marginRight: 10 }} />
                    <LinkComp to='/admin/delete'>Delete</LinkComp>
                </Item>
                <Item>
                    <IconFont icon={faSignOutAlt} size="1x" style={{ marginTop: 10, marginRight: 10 }} />
                    <LinkComp to='/admin/calendar'>Calendar</LinkComp>
                </Item> */}
            </Wrapper>
            // <StyledMenu
            //     theme="dark"
            //     mode="inline"
            //     openKeys={openKeys}
            //     onOpenChange={onOpenChange}
            // >
            //     <SubMenu
            //         key="sub1"
            //         title={
            //             <span>
            //                 <Icon type="edit" />
            //                 <span>Edit Entries</span>
            //             </span>
            //         }
            //     >
            //         <Menu.Item key="3"><Link to='/admin/edit1'>Edit Entries 1</Link></Menu.Item>
            //         <Menu.Item key="4"><Link to='/admin/edit2'>Edit Entries 2</Link></Menu.Item>
            //     </SubMenu>

            //     <Menu.Item key="9"><Link to='/admin/dashboard'><Icon type="appstore-o"></Icon>Dashboard</Link></Menu.Item>
            //     <Menu.Item key="1"><Link to='/admin/sendContent'><Icon type="message"></Icon>Send MT 6096</Link></Menu.Item>
            //     <Menu.Item key="2"><Link to='/admin/search'><Icon type="search"></Icon>Search</Link></Menu.Item>
            //     <Menu.Item key="5"><Link to='/admin/allUsers'><Icon type="user"></Icon>No of users</Link></Menu.Item>
            //     <Menu.Item key="6"><Link to='/admin/enterContent'><Icon type="enter"></Icon>Enter Content</Link></Menu.Item>
            //     <Menu.Item key="7"><Link to='/admin/delete'><Icon type="delete"></Icon>Delete</Link></Menu.Item>
            //     <Menu.Item key="8"><Link to='/admin/calendar'><Icon type="calendar"></Icon>Calendar</Link></Menu.Item>
            // </StyledMenu>
        );
    }
}

export default AdminSidebar;