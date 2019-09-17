import React from 'react';
import styled from 'styled-components';
import { Card, Progress, Button, Input, Form } from 'antd';
import Flex from '../../Component/Flex'


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
                            <Item label="COMPANY" >
                                {getFieldDecorator('title', {
                                    rules: [{ required: true, message: 'Please input the title of collection!' }],
                                })(<Input disabled />)}
                            </Item>
                            <Item label="EMAIL">
                                {getFieldDecorator('title', {
                                    rules: [{ required: true, message: 'Please input the title of collection!' }],
                                })(<Input />)}
                            </Item>
                        </Row>
                        <Row>
                            <Item label="FIRST NAME" >
                                {getFieldDecorator('title', {
                                    rules: [{ required: true, message: 'Please input the title of collection!' }],
                                })(<Input />)}
                            </Item>
                            <Item label="LAST NAME">
                                {getFieldDecorator('title', {
                                    rules: [{ required: true, message: 'Please input the title of collection!' }],
                                })(<Input />)}
                            </Item>
                        </Row>
                        <Row>
                            <Item label="DATE OF BIRTH">
                                {getFieldDecorator('title', {
                                    rules: [{ required: true, message: 'Please input the title of collection!' }],
                                })(<Input />)}
                            </Item>

                            <Item label="PHONE NUMBER">
                                {getFieldDecorator('title', {
                                    rules: [{ required: true, message: 'Please input the title of collection!' }],
                                })(<Input />)}
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