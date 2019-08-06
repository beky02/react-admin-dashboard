import React from 'react';
import { Button, Modal, Form, Select, DatePicker, Input } from 'antd';
import styled from 'styled-components';

const { Option } = Select;
const { TextArea } = Input;

class Edit extends React.Component {

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

                            style={{ marginRight: '15px', marginLeft: '15px', width: '670px' }} />)}
                    </Form.Item>
                    {/* <Button size="middle" type="primary"
                                    onClick={this.add}
                                    style={{
                                        marginLeft: '15px', width: 100,
                                        marginTop: 20
                                    }} block>Save</Button> */}
                </Form>
            </Modal>
        </>);
    }
}
const EditCont = Form.create({ name: 'register' })(Edit);
export default EditCont;