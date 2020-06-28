import React from "react";
import { Button } from 'antd';
import { SessionWrapper } from './style';
import { Controls, PlusButton } from '../components/Controls';

const Session = (props) => {

    return (
        <SessionWrapper>
            <p>Session</p>
            <p>{props.sessionLengthInMinutes} min</p>
            <Controls>
                <Button 
                    danger 
                    onClick={props.decrementSessionLength}>-</Button>
                
                <PlusButton onClick={props.incrementSessionLength}>+</PlusButton>

            </Controls>
        </SessionWrapper>
    )
}

export default Session;
