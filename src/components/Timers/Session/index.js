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
                <Button 
                    danger 
                    onClick={props.decrementSessionLength}>-</Button>

                <Button 
                    style={{borderColor: '#52c41a'}} 
                    onClick={props.incrementSessionLength}>+</Button>
                    
            </Controls>
        </SessionWrapper>
    )
}

export default Session;
