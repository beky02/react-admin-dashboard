import React from 'react';
import { Button, Modal,  } from 'antd';

import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';

const P = styled.p`
    font-style: italic;
`


class View extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            loading: false,
            Content: {}
        }
    }

    componentDidMount() {
        const { id } = this.props;
        console.log(id);
        axios.get(`http://localhost:8000/content/view/${id}`).then(res => {
            this.setState({
                Content: res.data.contents
            })

        });
    }
    showModal = () => {
        
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    

    render() {

        const { showModal, loading } = this.state;
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
        var title = null;
            Service.forEach(element =>{
                if (element.keyword == this.state.Content.keyword ) {
                    title = element.title;
                    return;
                }
            });
        return (<>
           <Button type="link"  onClick={this.showModal}>View</Button>
           <Modal
                    title="Full Infromation of Content"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                          Return
                        </Button>
                      ]}
                >
                    <P>{moment(this.state.Content.savedDate).format('lll')}</P>
                    <P>{title}</P>
                    <P>{this.state.Content.content}</P>
                    
                    
                </Modal>
        </>);
    }
}

export default View;