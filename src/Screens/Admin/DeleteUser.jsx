import React from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import Flex from '../../Component/Flex';
import { Input, Button, Checkbox, notification } from 'antd';
const { TextArea, Search } = Input;


const Wrapper = styled(Flex)`
    flex-direction: column;
    width: 100%;
    background-color: white;
`;
const Content = styled.div`
    height: 350px;
    background-color: #303542;
    
`;
const Title = styled.h1` 
    font-size: 54px;
    color: white;
    margin-top: 60px;
    margin-left: 260px;
`;
const SubTitle = styled.p`
    font-size: 25px;
    color: white;
    margin-left: 440px
`;
const CheckList = styled.div`
    border: 0px solid #CECECE;
    border-radius: 6px;
    margin-left: 200px;
    margin-top: 30px;
    margin-right:200px;
    padding: 30px 50px 20px;
    display: flex;
    flex-direction: column;


`;
const ButtonCustom = styled(Button)`
 
  font-size: 17px;
  border: 2px solid #3CC7B1;
  border-radius: 4px;
  font-weight: bold;
  margin-top: 30px;
  
  &:hover {
    background: #4384F6;
    border: 2px solid #4384F6;
    font-size: 17px;
    box-shadow: 0 8px 45px rgba(53, 152, 212, 0.9);
    transform: translateY(-4px);
  }
`;
class DeleteUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            show: false,
            services: [],
            mobile: null

        }
    }

    handleInputchange = (key, value) => {
        this.setState({
            [key]: value
        })
    };

    search = (mobile) => {
       
       
        axios.get('http://localhost:8000/admin/search',
            {
                params: {
                    mobile
                }
            })
            .then(response => {

                this.setState({
                    user: response.data.user,
                    show: true
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    
                    show: false
                });
            });
    }
    deleteSub = () =>{
        const {services,mobile} = this.state
       
        axios.put('http://localhost:8000/admin/delete',{services},
        { 
            params: {
                mobile
            },
            
        })
        .then(response => {

            notification['success']({
                message: 'Delete User',
                description: `user is delete successfully` 

            });
        })
        .catch(error => {
            console.log(error);
           
        });
    }

    render() {
        const { user, show,services } = this.state;
        function onChange(checkedValues) {
            console.log('checked = ', checkedValues);
           
         this.setState({
            services: checkedValues
         })
            
        }
        
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
        const Subscription = [];
        if (show) {
            for (let index = 0; index < user.subcriptions.length; index++) {
                var title = null;
                Service.forEach(element => {
                    if (element.keyword == this.state.user.subcriptions[index]) {
                        title = element.title;
                        return;
                    }
                });
                Subscription.push(
                    <Checkbox value={user.subcriptions[index]} style={{ display: 'block', marginLeft: 8, height: 30, }}>{title}</Checkbox>
                );

            }
        }


        return (
            <Wrapper>
                <Content>
                    <Title>We're here to help you </Title>
                    <SubTitle>Delete user</SubTitle>
                    <Search
                        size="large"
                        placeholder="Phone Number"
                        
                        onSearch={(value)=>{
                           this.setState({
                               mobile: value
                           });
                            this.search(value);
                        }}
                        style={{ width: 620, height: 50, marginTop: 10, marginLeft: 220, borderColor: '#303542' }}
                    />
                </Content>
                <CheckList >
                    <Checkbox.Group style={{ width: '60%' }} onChange={ checkedValues =>
                        this.setState({
                            services: checkedValues
                        })
                    }>

                        {
                            Subscription
                        }


                    </Checkbox.Group>
                    {
                       show && <ButtonCustom type="primary"
                       onClick={this.deleteSub}

                        style={{
                            width: 130,
                            height: 35,

                        }}
                        block>Delete</ButtonCustom>
                    }
                </CheckList>




            </Wrapper>
        );

    }
}

export default DeleteUser;