import React from 'react';
import { StyledDiv } from './style';

// Napraviti Number komponentu koja ce prikazivati 3 prva broja uredno i ostale sive
// Napraviti ranking samo za ovaj mjesec
// Napraviti search sistem da se pretrazuje user po emailu

const ListItem = (props) => {
    return (
        <StyledDiv key={props.number}>
            {props.number} {props.user} {(props.seconds/3600).toFixed(2)}
        </StyledDiv>
    )
}

export default ListItem;