import React from "react";
import { Button } from 'antd';
import { Controls } from '../components/Controls';
import { BreakWrapper } from './stlye';

const Break = (props) => {

    return (
        <BreakWrapper>
            <p>Break</p>
            <p>{props.breakLengthInMinutes} min</p>
            <Controls>
                <Button onClick={props.decrementBreakLength}>-</Button>
                <Button onClick={props.incrementBreakLength}>+</Button>
            </Controls>
        </BreakWrapper>

    )
}

export default Break;
