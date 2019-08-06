import React from 'react';
import styled from 'styled-components';
import { Icon, Form, Input, Button, Select } from 'antd';
import axios from 'axios';

import Flex from '../Component/Flex';


const Option = Select.Option;

// axios.defaults.withCredentials = true;

const Wrapper = styled(Flex)`
    height: 100vh;
`;

const Modal = styled.div`
    box-shadow: 0 1px 3px #ccc;
    width: 500px;
    border-radius: 10px;
 
`;

const Header = styled(Flex)`
    height: 70px;
    background-color: #189EFF;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin-bottom: 15px;
    justify-content: center;
    height: 100px;
`;

const H2 = styled.h2`
    color: white;
    margin-bottom: 0px;
    margin-top: 27px;
    font-size: 30px;
`;

const MySelect = styled(Select)`
    margin-bottom: 20px;
    width: 100%;
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
        let { email, password,role } = this.state;
        roles = role;
       
        // console.log("role "+role);
        // axios.post(`http://localhost:9000/${role}/login`,
        //     { email, password }
        // ).then(response => {
        //     localStorage.setItem(`${roles}`, response.data.token);
        //     localStorage.setItem('first', response.data.user.firstname );
        //     localStorage.setItem('last', response.data.user.lastname );
        //     console.log(response.data.user.firstname)
        //     console.log( `user`+ " " + localStorage.getItem(`user`));
            this.props.history.push(`/${role}`);
        //     // console.log("user get "+reactLocalStorage.getObject('user').firstname);
        // }).catch(error => {
        //     console.log(error);
        // })
    }

    render() {
        const { role } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <Wrapper justifyContent="center" alignItems="center">
                <Modal>
                <Header><H2>Sign In</H2></Header>
                    <Form onSubmit={this.handleSubmit} className="login-form" style={{ height: 400, width: 350 ,    marginLeft: '77px'}}>
                
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
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)', }} />}
                                    placeholder="Email"
                                    style={{ height: 38 }}
                                    onChange={(e) => this.handleInputchange('email', e.target.value)}

                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input.Password
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                    style={{ height: 38 }}
                                    onChange={(e) => this.handleInputchange('password', e.target.value)}
                                />,
                            )}
                        </Form.Item>
                        <Form.Item style={{ float: 'right', paddingRight: 5 }}>
                            <a className="login-form-forgot" href="/register">
                                Forgot password?</a>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button"
                                style={{ width: 350 }}
                                onClick={this.login}>
                                Log in</Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </Wrapper>
        );
    }
}
const Login = Form.create({ name: 'normal_login' })(AdminLogin);
export default Login;