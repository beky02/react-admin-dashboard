import React from 'react';
import { Button, Modal, Form, Select, notification, Input } from 'antd';
import styled from 'styled-components';
import axios from 'axios';

const { Option } = Select;
const { TextArea } = Input;

class Edit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            loading: false,
            Content: {}
        }
    }

    componentDidMount() {
        const { id } = this.props;

        axios.get(`http://localhost:8000/content/view/${id}`).then(res => {
            this.setState({
                Content: res.data.contents
            }, () => {
                this.props.form.setFieldsValue({
                    'keyword': this.state.Content.keyword,
                    'content': this.state.Content.content,

                })
            })

        });
    }
    handleModal = showModal => {
        this.setState({ showModal });
    }
    handleInputchange = (key, value) => {
        this.setState({
            Content: { ...this.state.Content, [key]: value }
        });
    };
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, showModal: false });
            this.edit();
        }, 3000);

    };

    handleCancel = () => {
        this.setState({ showModal: false });
    };

    edit = () => {
        const { keyword, content } = this.state.Content;
        const { id, refresh } = this.props;
        console.log(content);
        axios.put(`http://localhost:8000/content/edit/${id}`,
            { content, keyword }
        ).then(response => {
            this.setState({
                showModal: false,
            });

            refresh();

            notification['success']({
                message: 'Content Edit',
                description: `Content Edited successfully`

            });

        }).catch(error => {
            console.log(error);
        })
    }

    render() {

        const { getFieldDecorator } = this.props.form;
        const { showModal, loading } = this.state;

        return (<>
            <Button onClick={() => this.handleModal(true)} type='primary' style={{ marginRight: 17, }}>Edit</Button>
            <Modal visible={showModal} onCancel={() => this.handleModal(false)} onOk={this.edit} title="Edit Content" width='850px'
                footer={[
                    <Button key="back" onClick={this.handleCancel}>
                        Return
                </Button>,
                    <Button key="Save" type="primary" loading={loading} onClick={this.handleOk}>
                        Save
                </Button>,
                ]}>
                <Form onSubmit={this.handleSubmit} style={{ width: '808px', marginTop: '25px', marginRight: '20px' }}>
                    <Form.Item>
                        {getFieldDecorator('keyword', {
                            rules: [{ required: true, message: 'Please select service group!' }],
                        })(
                            <Select
                                placeholder="Select a service group"
                                onChange={(e) => this.handleInputchange('keyword', e)}
                                style={{ width: 355, marginLeft: 20 }}
                            >
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
                    <Form.Item >
                        {getFieldDecorator('content', {
                            rules: [{ required: true, message: 'Please input your content!' }],
                        })(<TextArea rows={8}
                            onChange={(e) => this.handleInputchange('content', e.target.value)}

                            style={{ marginRight: '15px', marginLeft: '15px', width: '670px' }} />)}
                    </Form.Item>

                </Form>
            </Modal>
        </>);
    }
}
const EditCont = Form.create({ name: 'register' })(Edit);
export default EditCont;