import React from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import Flex from '../../Component/Flex';
import Content from '../../Component/Content';
import Edit from './EditContent';

import {
    Form,
    Input,
    Tooltip,
    Icon,
    Modal,
    Select,
    Button,
    DatePicker, notification, Layout, Menu, List
} from 'antd';

const { Sider } = Layout;


const { TextArea, Search } = Input;
const { Option } = Select;

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`;
const Headers = styled.div`
    background-color: #303542;
    height: 24%;
    display: flex;
    justify-content: space-around;
    align-content: start;
    padding-top: 33px;
`;
const MainContent = styled.div`
    background-color: white;
    display: flex;
`;
const Title = styled.h2`
    color: white;
    font-size: 25px;
    margin-top: 20px;
`;
const RightSider = styled.div`
 
`;
const ContentDiv = styled.div`
   width: 70%;
`;
class EnterContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            loading: false,
        }
    }

    handleModal = showModal => {
        this.setState({ showModal });
    }

    handleInputchange = (key, value) => {
        this.setState({
            [key]: value
        })
    };
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, showModal: false });
        }, 3000);
      };
    
      handleCancel = () => {
        this.setState({ showModal: false });
      };
    render() {
        const { getFieldDecorator } = this.props.form;
        const { showModal,loading  } = this.state;

        const Data = [];
        for (let index = 0; index < 6; index++) {
            Data.push(
                <Content name={"Sports"} content={'Racing car sprays burning fuel into crowd.'}></Content>
            )};
        

        return (
            <Wrapper>
                <Headers>
                    <Title>All Contents</Title>
                    <Search
                        size="large"
                        placeholder="Search Contents"
                        onSearch={value => console.log(value)}
                        style={{ width: 700, height: 45, marginTop: 20 }}
                    />
                </Headers>
                <MainContent>
                    <RightSider>
                        <Button size="middle" type="primary"
                            onClick={() => this.handleModal(true)}
                            style={{
                                marginLeft: '25px', width: 150,
                                marginTop: 20, backgroundColor: '#303542',
                                borderColor: '#303542',
                                height:35

                            }} block>ADD CONTENT</Button>
                        <Modal visible={showModal} onCancel={() => this.handleModal(false)} onOk={this.edit} title="Add Content" width='750px' backgroundColor="#303542"
                        footer={[
                            <Button key="back" onClick={this.handleCancel}>
                              Return
                            </Button>,
                            <Button key="Save" type="primary" loading={loading} onClick={this.handleOk}>
                              Save
                            </Button>,
                          ]}
                        >
                            <Form onSubmit={this.handleSubmit} style={{ width: '808px', marginTop: '25px',marginRight:'20px' }}>
                                <Form.Item>
                                    {getFieldDecorator('Select a service group', {
                                        rules: [{ required: true, message: 'Please select location!' }],
                                    })(
                                        <Select
                                            placeholder="Select a service group"
                                            onChange={(e) => this.handleInputchange('location', e)}
                                            style={{ width: 355, marginLeft: 20 }}
                                        >
                                            <Option value="4 kilo">4 Kilo</Option>
                                            <Option value="5 kilo">5 Kilo</Option>
                                            <Option value="bole">Bole</Option>
                                            <Option value="megenagna">Megenagna</Option>
                                            <Option value="piassa">Piassa</Option>
                                        </Select>,
                                    )}
                                </Form.Item>
                                <Form.Item >
                                    {getFieldDecorator('content', {
                                        rules: [{ required: true, message: 'Please input your content!' }],
                                    })(<TextArea rows={8} placeholder="Content here. . . . "
                                        onChange={(e) => this.handleInputchange('content', e.target.value)}

                                        style={{ marginRight: '15px', marginLeft: '15px' ,width:'670px'}} />)}
                                </Form.Item>
                                {/* <Button size="middle" type="primary"
                                    onClick={this.add}
                                    style={{
                                        marginLeft: '15px', width: 100,
                                        marginTop: 20
                                    }} block>Save</Button> */}
                            </Form></Modal>
                        <Sider
                            style={{
                                overflow: 'auto',
                                
                                position: 'relative',
                                left: 0,
                                marginTop: 15,
                
                            }}
                        >
                            <div className="logo" />
                            <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
                                <Menu.Item key="1">
                                    <Icon type="user" />
                                    <span className="nav-text">nav 1</span>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="video-camera" />
                                    <span className="nav-text">nav 2</span>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Icon type="upload" />
                                    <span className="nav-text">nav 3</span>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Icon type="bar-chart" />
                                    <span className="nav-text">nav 4</span>
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <Icon type="cloud-o" />
                                    <span className="nav-text">nav 5</span>
                                </Menu.Item>
                                <Menu.Item key="6">
                                    <Icon type="appstore-o" />
                                    <span className="nav-text">nav 6</span>
                                </Menu.Item>
                                <Menu.Item key="7">
                                    <Icon type="team" />
                                    <span className="nav-text">nav 7</span>
                                </Menu.Item>
                                <Menu.Item key="8">
                                    <Icon type="shop" />
                                    <span className="nav-text">nav 8</span>
                                </Menu.Item>
                            </Menu>
                        </Sider>

                    </RightSider>
                    <ContentDiv>
                        {Data}
                    </ContentDiv>


                </MainContent>

            </Wrapper>
        );
    }

}
const EContent = Form.create({ name: 'register' })(EnterContent);
export default EContent;