import React from "react";
import { SessionWrapper } from './style';
import { Controls, PlusButtonSmall, MinusButtonSmall } from '../components/Controls';

const Session = (props) => {

    return (
        <SessionWrapper>
            <p>Session</p>
            <p>{props.sessionLengthInMinutes} min</p>
            <Controls>
                <MinusButtonSmall 
                    danger 
                    onClick={props.decrementSessionLength}
                    disabled={props.disabled}
                    >-</MinusButtonSmall>
                
                <PlusButtonSmall onClick={props.incrementSessionLength} disabled={props.disabled}>+</PlusButtonSmall>
            </Controls>
        </SessionWrapper>
    )
}

export default Session;
