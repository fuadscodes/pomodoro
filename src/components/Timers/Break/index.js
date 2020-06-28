import React from "react";
import { Button } from 'antd';
import { Controls, PlusButton } from '../components/Controls';
import { BreakWrapper } from './stlye';

const Break = (props) => {

    return (
        <BreakWrapper>
            <p>Break</p>
            <p>{props.breakLengthInMinutes} min</p>
            <Controls>
                <Button 
                    danger 
                    onClick={props.decrementBreakLength}>-</Button>

                <PlusButton onClick={props.incrementBreakLength}>+</PlusButton>

            </Controls>
        </BreakWrapper>

    )
}

export default Break;
