import React from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import Flex from '../../Component/Flex';
import Content from '../../Component/Content'
import { Table, Select, Form, Radio, Button } from 'antd';
const { Option } = Select;
const Wrapper = styled(Flex)`
    flex-direction: column;
    margin-left: 100px;
`;
class SendContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            service: "",
            value: 0,
        }
    }
    handleInputchange = (key, value) => {
        this.setState({
            [key]: value
        })
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const radioStyle = {
            display: 'block',
            height: '40px',
            lineHeight: '50px',

        };
        const radios = [];
        for (let index = 0; index < 15; index++) {
            radios.push(
                <Content name={"Sports"} content={'Dinku atki Diago Forlana chamawun meskelun yifa adrgoal. Techawachu beteleyim be 2010 Debub Africa yalem wancha yeseraw gedl . . . '}></Content>

            );

        }
        return (
            <Wrapper>
                <Form onSubmit={this.handleSubmit} style={{ width: '808px', marginTop: '25px', marginRight: '20px' }}>
                    <Form.Item>
                        {getFieldDecorator('Select a service group', {
                            rules: [{ required: true, message: 'Please select location!' }],
                        })(
                            <Select
                                placeholder="4 kilo"
                                onChange={(e) => this.handleInputchange('service', e)}
                                style={{ width: 355, marginLeft: 20 }}
                                defaultValue="4 kilo"

                            >
                                <Option value="4 kilo">4 Kilo</Option>
                                <Option value="5 kilo">5 Kilo</Option>
                                <Option value="bole">Bole</Option>
                                <Option value="megenagna">Megenagna</Option>
                                <Option value="piassa">Piassa</Option>
                            </Select>,
                        )}
                    </Form.Item>
                </Form>
                {
                    radios
                }


                <Button size="middle" type="primary"

                    style={{
                        marginLeft: '25px', width: 150,
                        marginTop: 20, backgroundColor: '#303542',
                        borderColor: '#303542',
                        height: 35


                    }}
                    block>SEND</Button>

            </Wrapper>
        );
    }

}
const Send = Form.create({ name: 'register' })(SendContent);

export default Send;