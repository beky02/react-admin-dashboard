import React from 'react';
import styled from 'styled-components';
import { Icon, Form, Input, Button, Select } from 'antd';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlock } from "@fortawesome/free-solid-svg-icons";
import {reactLocalStorage} from 'reactjs-localstorage';
import Flex from '../Component/Flex';


const Option = Select.Option;

// axios.defaults.withCredentials = true;

const Wrapper = styled(Flex)`
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 300px;
`;
const Row = styled(Flex)``;

const Modal = styled.div`
    box-shadow: 0 1px 3px #ccc;
    width: 370px;
    border-radius: 10px;
    position: absolute;
    margin-top: 125px;
    z-index: 1;
    background: white;
    margin-left: 200px;
 
`;

const Header = styled(Flex)`
    height: 70px;
    background-color: white;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin-top: 20px;
    align-items: center;
    height: 100px;
    flex-direction: column;
`;

const H2 = styled.h2`
    color: #3C4252;
    margin-bottom: 0px;
    margin-top: 5px;
    font-size: 30px;
`;

const MySelect = styled(Select)`
    margin-bottom: 20px;
    width: 100%;
`;

const Circle = styled.div`
    background: ${props => props.color};
    animation: floating ${props => props.time} infinite;
    height: 300px;
    width: 300px;
    border-radius: 150px;
    postion: relative;

    @keyframes floating {
        from {
            transform: rotate(0deg) translate(-10px) rotate(0deg);
        }
    
        to {
            transform: rotate(360deg) translate(-10px) rotate(-360deg);
        }
    }
`;
const SmallCircle = styled.div`
    background: ${props => props.color};;
    animation: floating ${props => props.time} infinite;
    height: 30px;
    width: 30px;
    border-radius: 150px;
    postion: relative;

    @keyframes floating {
        from {
            transform: rotate(0deg) translate(-10px) rotate(0deg);
        }
    
        to {
            transform: rotate(360deg) translate(-10px) rotate(-360deg);
        }
    }
`;


class AdminLogin extends React.Component {

    state = {
        email: '',
        password: '',
        role: 'admin'
    }

    handleInputchange = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    handleSelectChange = value => {
        this.handleInputchange('role', value);
    }

    login = () => {
        let roles = '';
        let { email, password, role } = this.state;
        roles = role;

        console.log("role "+role);
        axios.post(`http://localhost:8000/${role}/login`,
            { email, password }
        ).then(response => {
            localStorage.setItem(`${roles}`, response.data.token);
            reactLocalStorage.setObject('account', response.data.user);
            console.log(response.data.user);
            this.props.history.push(`/${role}`);
            
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        const { role } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <Wrapper>

                <Row style={{ marginLeft: 400 }}>
                    <Circle color="#FF7F00" time="9s"></Circle>
                    <SmallCircle color="#303030" time="7s" style={{ marginTop: 280 }}></SmallCircle>
                </Row>
                <Modal>
                    <Header>

                        <FontAwesomeIcon icon={faUnlock} size="3x" color='#FF7F00' />
                        <H2>Login</H2>
                    </Header>

                    <Form onSubmit={this.handleSubmit} className="login-form" style={{ height: 220, width: 320, marginLeft: '25px' }}>

                        <Form.Item>
                            <MySelect
                                onChange={this.handleSelectChange}
                                showSearch
                                placeholder="Select a role"

                            >
                                <Option value="admin">Admin</Option>
                                <Option value="user">User</Option>

                            </MySelect>
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your Email!' }],
                            })(
                                <Input
                                    prefix={<Icon type="mail" style={{ color: '#3C4252', }} />}
                                    placeholder="Email"
                                    style={{ height: 42, color: '#3C4252' }}
                                    onChange={(e) => this.handleInputchange('email', e.target.value)}

                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input.Password
                                    prefix={<Icon type="lock" style={{ color: '#3C4252' }} />}
                                    type="password"
                                    placeholder="Password"
                                    style={{ height: 42 }}
                                    onChange={(e) => this.handleInputchange('password', e.target.value)}
                                />,
                            )}
                        </Form.Item>

                    </Form>
                    <Row style={{ flexDirection:'column',marginLeft:80,marginBottom:30 }}>
                        <Button type="primary" htmlType="submit" className="login-form-button"
                            style={{ width: 200, height: 36, backgroundColor: '#3C4252', borderColor: '#3C4252', fontSize: 17, }}
                            onClick={this.login}>
                            Log in</Button>
                        <a className="login-form-forgot" href="/register" style={{marginTop:15,marginLeft:45}}>
                            Forgot password?</a>

                    </Row>

                </Modal>
                <Row>
                    <SmallCircle color="#303030" time="9s"></SmallCircle>
                    <Circle color="#3C4252" time="7s"></Circle>
                </Row>



            </Wrapper>
        );
    }
}
const Login = Form.create({ name: 'normal_login' })(AdminLogin);
export default Login;