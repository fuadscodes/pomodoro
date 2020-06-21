import React from "react";
import { Button } from 'antd';
import { SessionWrapper } from './style';
import { Controls } from '../components/Controls';

const Session = (props) => {

    return (
        <SessionWrapper>
            <p>Session</p>
            <p>{props.sessionLengthInMinutes} min</p>
            <Controls>
                <Button onClick={props.decrementSessionLength}>-</Button>
                <Button onClick={props.incrementSessionLength}>+</Button>
            </Controls>
        </SessionWrapper>
    )
}

export default Session;
