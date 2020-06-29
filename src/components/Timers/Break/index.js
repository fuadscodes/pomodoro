import React from "react";
import { Controls, PlusButtonSmall, MinusButtonSmall } from '../components/Controls';
import { BreakWrapper } from './stlye';

const Break = (props) => {

    return (
        <BreakWrapper>
            <p>Break</p>
            <p>{props.breakLengthInMinutes} min</p>
            <Controls>
                <MinusButtonSmall 
                    onClick={props.decrementBreakLength}
                    disabled={props.disabled}>-</MinusButtonSmall>

                <PlusButtonSmall onClick={props.incrementBreakLength} disabled={props.disabled}>+</PlusButtonSmall>
            </Controls>
        </BreakWrapper>

    )
}

export default Break;
