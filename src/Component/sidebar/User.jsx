import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;

class UserSidebar extends React.Component {
    render() {
        const { openKeys, onOpenChange } = this.props;
        return(
            <Menu
                theme="dark"
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
            >
                {/* <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="medicine-box" />
                            <span>Drugs</span>
                        </span>
                    }
                >
                    <Menu.Item key="1"><Link to='/admin/drugs'>All</Link></Menu.Item>
                    <Menu.Item key="2"><Link to='/admin/drug/add'>Add</Link></Menu.Item>
                    <Menu.Item key="3"><Link to='/admin/drugs/expired'>Expired</Link></Menu.Item>
                    <Menu.Item key="4"><Link to='/admin/drugs/selled'>Selled</Link></Menu.Item>
                </SubMenu> */}
               
                
                <Menu.Item key="1"><Link to='/admin/drugs'>Entry content</Link></Menu.Item>
                <Menu.Item key="1"><Link to='/admin/drugs'>Entry content</Link></Menu.Item>
                <Menu.Item key="1"><Link to='/admin/drugs'>Entry content</Link></Menu.Item>
                <Menu.Item key="1"><Link to='/admin/drugs'>Entry content</Link></Menu.Item>
                <Menu.Item key="1"><Link to='/admin/drugs'>Entry content</Link></Menu.Item>
            </Menu>
        );
    }
}

export default UserSidebar;