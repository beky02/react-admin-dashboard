import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;

class AdminSidebar extends React.Component {
    render() {
        const { openKeys, onOpenChange } = this.props;
        return (
            <Menu
                style={{ backgroundColor: '#303030' }}
                theme="dark"
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="edit" />
                            <span>Edit Entries</span>
                        </span>
                    }
                >
                    <Menu.Item key="3"><Link to='/admin/edit1'>Edit Entries 1</Link></Menu.Item>
                    <Menu.Item key="4"><Link to='/admin/edit2'>Edit Entries 2</Link></Menu.Item>
                </SubMenu>

                <Menu.Item key="9"><Link to='/admin/dashboard'><Icon type="appstore-o"></Icon>Dashboard</Link></Menu.Item>
                <Menu.Item key="1"><Link to='/admin/sendContent'><Icon type="message"></Icon>Send MT 6096</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/admin/search'><Icon type="search"></Icon>Search</Link></Menu.Item>
                <Menu.Item key="5"><Link to='/admin/allUsers'><Icon type="user"></Icon>No of users</Link></Menu.Item>
                <Menu.Item key="6"><Link to='/admin/enterContent'><Icon type="enter"></Icon>Enter Content</Link></Menu.Item>
                <Menu.Item key="7"><Link to='/admin/delete'><Icon type="delete"></Icon>Delete</Link></Menu.Item>
                <Menu.Item key="8"><Link to='/admin/calendar'><Icon type="calendar"></Icon>Calendar</Link></Menu.Item>
            </Menu>
        );
    }
}

export default AdminSidebar;