import React from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import Flex from '../../Component/Flex';
import {Table } from 'antd';
const Wrapper = styled(Flex)`
    width: 100%;
`;
const Content= styled.div`
    margin-left: 30px;
`;
const Title = styled.h2`

`;
class AllUser extends React.Component{
      
    render(){
        const columns = [
            {
                title: 'Service Group',
                dataIndex: 'service',
                
              },
              {
                title: 'Key Word',
                dataIndex: 'word',
              },
              {
                title: 'Number of Users',
                dataIndex: 'users',
              },
          ];
        const data = [
            {
                key: '1',
                service: 'John Brown',
                word: 32,
                users: 'New York No. 1 Lake Park',
              },
              {
                key: '2',
                service: 'Jim Green',
                word: 42,
                users: 'London No. 1 Lake Park',
              },
              {
                key: '3',
                service: 'Joe Black',
                word: 32,
                users: 'Sidney No. 1 Lake Park',
              },
              {
                key: '4',
                service: 'Disabled User',
                word: 99,
                users: 'Sidney No. 1 Lake Park',
              },
          ];
        
        return(
            <Wrapper>
                <Content>
                    <Title>All Users in All Service</Title>
                <Table columns={columns} dataSource={data} style={{marginLeft:80}} />
                </Content>
                
            </Wrapper>
        );
    }

}
export default AllUser;