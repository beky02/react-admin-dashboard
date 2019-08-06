import React from 'react';
import styled, { css } from 'styled-components';
import Edit from '../Screens/Admin/EditContent';
import Delete from '../Screens/Admin/DeleteContent';

const Wrapper = styled.div`
    width: 100%;
`;
const ServiceName = styled.h2`
    color: #303542;
`;
const ContentP = styled.p`
    color: #9599A1;
`;
const EditDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

class Content extends React.Component {

    render() {
        return (
            <Wrapper>
                <ServiceName>{this.props.name}</ServiceName>
                <EditDiv>
                    <ContentP>{this.props.content}</ContentP>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <Edit></Edit>
                        <Delete></Delete>
                    </div>

                </EditDiv>

            </Wrapper>
        );
    }

}
export default Content;