import React from 'react';
import { Popconfirm, message,Button } from 'antd';
import styled from 'styled-components';
import axios from 'axios';

const ButtonCustom = styled(Button)`
 
  font-size: 16px;
  border: 2px solid #3CC7B1;
  border-radius: 4px;
  font-weight: bold;
  margin-top: -20px;
  
  
  &:hover {
    background: #4384F6;
    border: 2px solid #4384F6;
    font-size: 17px;
    box-shadow: 0 8px 45px rgba(53, 152, 212, 0.9);
    transform: translateY(-4px);
  }
`;

class SendButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isHovering: false,
            status: null
        };
    }
    componentDidMount(){
       this.status();
        
        
    }
    status = () => {
        axios.get(`http://localhost:8000/messageSend/status`).then(res => {
            if(res.data.status === "NO"){
                this.setState({
                    status: false
                 })
            }
            else{
                this.setState({
                    status: true
                 })
            }
           
        });
    }
    confirm = () => {
      
        const { id } = this.props;
       
        axios.post(`http://localhost:8000/messageSend/send/${id}`).then(res => {    
            message.success('Message is send');
        });
        setTimeout(() => {
            this.props.parentCallback(true);
        }, 3000);
       
    }

    cancel(e) {
        console.log(e);
        message.error('Click on No');
    }
    render() {
        const {status } = this.state
        console.log(status)
        
        return (
            <Popconfirm
                title="Are you sure to SEND ? "
                onConfirm={this.confirm}
                onCancel={this.cancel}
                okText="Yes"
                cancelText="No"
            >
            {
                 status
                 ?  
                 <ButtonCustom size="small" type="primary"

                 style={{
                     width: 100,
                     height: 35,
                 
                 }}
                 block
             
                >SEND</ButtonCustom >
                 :  <ButtonCustom size="small" type="primary"

                 style={{
                     width: 100,
                     height: 35,
                 
                 }}
                 block
                 disabled
                >SEND</ButtonCustom>
            }
            
               
            </Popconfirm>
        );
        
        }
}
export default SendButton;