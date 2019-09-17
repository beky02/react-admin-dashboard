import React from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import Flex from '../../Component/Flex';
import SendButton from '../../Component/SendButton';
import View from '../../Screens/Admin/ViewContent';
import { Table, Select, Form } from 'antd';
import moment from 'moment';

const { Option } = Select;
const Wrapper = styled(Flex)`
    flex-direction: column;
    width: 100%;
    background-color: white;
    padding: 30px 50px;
`;
class SendContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            service: 'all',
            value: 0,
            visible: false,
            allContent: {},
            Content: {}
        }
    }
    componentDidMount() {
        this.getContents();
    }
    callbackFunction = (childData) => {
        this.forceUpdate();
       
  }
    getContents = () => {
        axios.get('http://localhost:8000/content/all')
            .then(response => {

                this.setState({
                    allContent: response.data.content
                });

                // console.log(this.state.allContent);

            })
            .catch(error => {
                console.log(error);
            });
    }

    handleInputchange = (key, value) => {
        this.setState({
            [key]: value
        })
    };


    render() {
        const columns = [
            {
                title: 'Date',
                dataIndex: 'date',
            },
            {
                title: 'Service Group',
                dataIndex: 'title',
            },
            {
                title: 'Key Word',
                dataIndex: 'keyword',
            },

            {
                title: 'Content',
                dataIndex: 'content',
            },
            {
                title: '',
                dataIndex: 'view',
            },
            {
                title: '',
                dataIndex: 'send',
            },
        ];
        const Service = [
            { title: "GO SPORT", keyword: '1' },
            { title: "GO JOKES", keyword: '2' },
            { title: "GO JOKES", keyword: 'J' },
            { title: "GO KNOWLEDGE", keyword: '3' },
            { title: "SPORT AM", keyword: 'A1' },
            { title: "JOKES AM", keyword: 'A2' },
            { title: "KNOWLEDGE", keyword: 'A3' },
            { title: "OROMO JOKES", keyword: '5' },
            { title: "OROMO SPORT", keyword: '6' },
            { title: "NATURAL BEAUTY TIPS", keyword: '10' },
        ];

        const { getFieldDecorator } = this.props.form;
        const { service } = this.state;
        const Data = [];
        if (service == 'all') {
            for (let index = 0; index < this.state.allContent.length; index++) {
                var title = null
                Service.forEach(element => {
                    if (element.keyword == this.state.allContent[index].keyword) {
                        const row = {
                            key: index,
                            title: element.title,
                            keyword: this.state.allContent[index].keyword,
                            date: moment(this.state.allContent[index].savedDate).format('ll'),
                            content: this.state.allContent[index].content,
                            send: <SendButton id={this.state.allContent[index]._id} parentCallback = {this.callbackFunction}></SendButton>,
                            view: <View id={this.state.allContent[index]._id}></View>

                        }
                        Data.push(row);
                    }
                });

            };

        } else {

            for (let index = 0; index < this.state.allContent.length; index++) {
                if (this.state.allContent[index].keyword == service) {
                    Service.forEach(element => {
                        if (element.keyword == service) {
                            const row = {
                                key: index,
                                title: element.title,
                                keyword: service,
                                date: moment(this.state.allContent[index].savedDate).format('ll'),
                                content: this.state.allContent[index].content,
                                send: <SendButton id={this.state.allContent[index]._id} parentCallback = {this.callbackFunction}></SendButton>,
                                view: <View id={this.state.allContent[index]._id}></View>

                            }
                            Data.push(row);
                        }
                    });
                }
            };

        }


        return (
            <div style={{ backgroundColor: '#F0F2F5', paddingLeft: 30, paddingRight: 30, paddingTop: 50, paddingBottom: 30 }}>
                <Wrapper>
                    <Form onSubmit={this.handleSubmit} style={{ width: '808px', marginTop: '25px', marginRight: '20px' }}>
                        <Form.Item>

                            {getFieldDecorator('service', {
                                rules: [{ required: true, message: 'Please select service group!' }],
                            })(
                                <Select
                                    placeholder="ALL"
                                    onChange={(e) => this.handleInputchange('service', e)}
                                    style={{ width: 355, }}
                                    defaultValue="all"

                                >
                                    <Option value="all">ALL</Option>
                                    <Option value="1">GO SPORT</Option>
                                    <Option value="2">GO JOKES</Option>
                                    <Option value="3">GO KNOWLEDGE</Option>
                                    <Option value="A1">SPORT AM</Option>
                                    <Option value="A2">JOKES AM</Option>
                                    <Option value="A3">KNOWLEDGE</Option>
                                    <Option value="5">OROMO JOKES</Option>
                                    <Option value="6">OROMO SPORT</Option>
                                    <Option value="10">NATURAL BEAUTY TIPS</Option>
                                </Select>,
                            )}
                        </Form.Item>
                    </Form>
                    <Table bordered columns={columns} dataSource={Data} />


                </Wrapper>
            </div>

        );
    }

}
const Send = Form.create({ name: 'register' })(SendContent);

export default Send;