import React from 'react';
import styled, { css } from 'styled-components';
import Edit from '../Screens/Admin/EditContent';
import Delete from '../Screens/Admin/DeleteContent';


const Wrapper = styled.div`
    width: 100%;
    height: 110px;
    :hover {
		background-color: #EBEBEB;
		cursor: pointer;
    }
    border-bottom: 1px solid #CECECE;
    border-right: 1px solid #CECECE;
    padding-left: 20px;
    padding-top: 10px;
    padding-right: 20px;
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
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <Edit></Edit>
                        <Delete></Delete>
                    </div>

                </EditDiv>
                {
                    this.state.isHovering &&
                    <div>
                        Hovering right meow! 🐱
          </div>
                }

            </Wrapper>
        );
    }

}
export default Content;