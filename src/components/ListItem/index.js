import React from 'react';
import { StyledDiv } from './style';

const ListItem = (props) => {
    return (
        <StyledDiv key={props.number}>
            <span>Place: {props.number}</span> <span>User: {props.user}</span>  <span>Hours: {(props.seconds/3600).toFixed(2)}</span>
        </StyledDiv>
    )
}

export default ListItem;