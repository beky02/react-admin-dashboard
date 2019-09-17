import React from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import Flex from '../../Component/Flex';

import { Table, Modal, Button, Icon, Spin } from 'antd';
const Wrapper = styled(Flex)`
    width: 100%;
   justify-content: center;
`;
const Content = styled.div`
`;
const Title = styled.h2`

`;
class AllUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
      loading: false,
      spin: true,
      allUsers: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/admin/all')
      .then(response => {

        this.setState({
          allUsers: response.data.users
        });
        // console.log("all drugs")
        // console.log(this.state.allDrug);

      })
      .catch(error => {
        console.log(error);
      });
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, showModal: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ showModal: false });
    this.props.history.push("/admin/sendContent");
  };
  render() {
    const { showModal, loading, spin } = this.state;
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


    setTimeout(() => {
      this.setState({ spin: false });
    }, 2500);
    const Service = [
      { title: "GO SPORT", keyword: '1' },
      { title: "GO JOKES", keyword: '2' },
      { title: "GO KNOWLEDGE", keyword: '3' },
      { title: "SPORT AM", keyword: 'A1' },
      { title: "JOKES AM", keyword: 'A2' },
      { title: "KNOWLEDGE", keyword: 'A3' },
      { title: "OROMO JOKES", keyword: '5' },
      { title: "OROMO SPORT", keyword: '6' },
      { title: "NATURAL BEAUTY TIPS", keyword: '10' },
    ];
    const Users = [];
    // console.log(this.state.allUsers);
    for (let index = 0; index < Service.length; index++) {
      var sum = 0;
      this.state.allUsers.forEach(element => {
        var found = null;
        found = element.subcriptions.find((sub) => {
          return sub == Service[index].keyword;
        });
        if (found != null) {
          sum = sum + 1;
        }

      });
      const element = {
        key: index,
        service: Service[index].title,
        word: Service[index].keyword,
        users: sum,

      }

      Users.push(element);

    }
    return (

      <Wrapper>
        {
          spin && <Spin tip="Loading...." size="large" style={{marginTop:250}} />
        }
        {
          !spin &&
          <Modal
            width='760px'
            style={{ marginLeft: 40 }}
            title="All Users"
            centered
            visible={this.state.showModal}
            onCancel={() => this.handleCancel(false)}
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                Return
            </Button>
            ]}
          >

            <Table size="middle" columns={columns} dataSource={Users} style={{ marginLeft: 20 }} />


          </Modal>
        }


      </Wrapper>
    );
  }

}
export default AllUser;