import React from 'react';
import { Button, Modal } from 'antd';
import axios from 'axios';


const { confirm } = Modal;

class Delete extends React.Component {
    handleDelete = () => {
        const { id, refresh } = this.props;
        confirm({
            title: "Are you sure you want to delete",
            
            okText: "Yes",
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                axios.delete(`http://localhost:8000/content/delete/${id}`
                   ).then(response => {
                    refresh();
                }).catch(error => {
                    console.log(error);
                });
            },
            onCancel() {
                console.log('on cancel');
            }
        })
    }
    render() {
        console.log('delete id: ', this.props.id);
        return (
            <Button onClick={this.handleDelete} type='danger'>Delete</Button>
        )
    }
}

export default Delete;