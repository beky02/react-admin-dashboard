import React from 'react';
import styled from 'styled-components';
import { Card, Progress, Button, Input, Form } from 'antd';
import Flex from '../../Component/Flex';
import {reactLocalStorage} from 'reactjs-localstorage';
import moment from 'moment';


const Wrapper = styled(Flex)`
    padding: 80px 30px 30px 45px;
    background: #E9ECEF;
    height: 600px;
`;
const Row = styled(Flex)`
    justify-content: space-around;
`;

const Item = styled(Form.Item)`
    width: 250px;
`;
const Line = styled.hr`
    margin-top: -10px;
    margin-left: -24px;
    margin-right: -24px;
`;
const StyledButton = styled(Button)`
    margin-top: -12px;
    
`;


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
    }
    componentDidMount(){
        let User =reactLocalStorage.getObject('account');
        this.props.form.setFieldsValue({
            'title': "GO VAS",
            'email': User.email,
            'firstname': User.firstname,
            'lastname': User.lastname,
            'dateofbirth':moment(User.dateOfBirth).format('ll') ,
            'phone': User.phone
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Wrapper>
                <Card hoverable bordered={false} style={{ width: 350, marginRight: 45, height: 220 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <Progress
                        strokeColor={{
                            '0%': 'orange',
                            '100%': 'orange',
                        }}
                        percent={80}
                    />
                    <div style={{ display: 'flex', borderTop: '1px solid #E9ECEF', marginTop: 12, paddingTop: 15 }}>
                        <Button type="link" style={{ color: 'orange', }}><p style={{ fontWeight: 'bold' }}>UPLOAD PICTURE</p></Button>
                        <Button type="link" style={{ color: '#363640', marginLeft: 30 }}><p style={{ fontWeight: 'bold' }}>REMOVE PICTURE</p></Button>
                    </div>


                </Card>
                <Card hoverable bordered={false} style={{ width: 640, height: 430 }} title="Edit Profile">

                    <Form layout="vertical" >
                        <Row>
                            <Item label="COMPANY( NAME)" >
                                {getFieldDecorator('title', {
                                    rules: [{ required: true, message: 'Please input the title of collection!' }],
                                })(<Input disabled />)}
                            </Item>
                            <Item label="EMAIL">
                                {getFieldDecorator('email', {
                                    rules: [{ required: true, message: 'Please input the Email !' }],
                                })(<Input />)}
                            </Item>
                        </Row>
                        <Row>
                            <Item label="FIRST NAME" >
                                {getFieldDecorator('firstname', {
                                    rules: [{ required: true, message: 'Please input the First Name !' }],
                                })(<Input />)}
                            </Item>
                            <Item label="LAST NAME">
                                {getFieldDecorator('lastname', {
                                    rules: [{ required: true, message: 'Please input the Last Name !' }],
                                })(<Input />)}
                            </Item>
                        </Row>
                        <Row>
                            <Item label="DATE OF BIRTH">
                                {getFieldDecorator('dateofbirth', {
                                    rules: [{ required: true, message: 'Please input the Date of Birth !' }],
                                })(<Input />)}
                            </Item>

                            <Item label="PHONE NUMBER">
                                {getFieldDecorator('phone', {
                                    rules: [{ required: true, message: 'Please input the Phone Number !' }],
                                })(<Input type="number" />)}
                            </Item>

                        </Row>
                        <Line></Line>
                        <StyledButton type="primary" style={{
                             backgroundColor: 'orange',
                             borderColor: 'orange',
                        }}>SAVE DETAILS</StyledButton>
                       
                    </Form>

                </Card>
            </Wrapper>

        );
    }
}

const Profiles = Form.create({ name: 'register' })(Profile);

export default Profiles;