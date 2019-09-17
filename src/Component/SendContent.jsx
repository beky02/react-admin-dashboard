import React from 'react';
import styled, { css } from 'styled-components';
import Edit from '../Screens/Admin/EditContent';
import Delete from '../Screens/Admin/DeleteContent';
import Send from './SendButton';


const Wrapper = styled.div`
    width: 100%;
    height: 105px;
    :hover {
		
		cursor: pointer;
    }
    border-bottom: 1px solid #CECECE;
    border-right: 1px solid #CECECE;
    border-left: 1px solid #CECECE;
    border-top: 1px solid #CECECE;
    padding-left: 20px;
    padding-top: 10px;
    padding-right: 20px;
    margin-top: 10px;
    border-radius: 6px;
`;
const ServiceName = styled.h2`
    color: #303542;
`;
const ContentP = styled.p`
    color: #9599A1;
    width: 85%;
`;
const EditDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    render() {
        return (
            <Wrapper onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}>
                <ServiceName>{this.props.name}</ServiceName>
                <EditDiv>
                    <ContentP>{this.props.content}</ContentP>
                    {
                        this.state.isHovering &&

                        <div style={{ marginRight: 15, paddingBottom:15}}>
                            <Send></Send>
                        </div>


                    }

                </EditDiv>


            </Wrapper>
        );
    }

}
export default Content;