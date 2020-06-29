import React, {useState} from "react";
import Break from "./Break/index";
import Session from "./Session/index";
import moment from "moment";
import TimeLeft from "./TimeLeft/index";
import { TimersWrapper, BreakSession } from './style';

const Timers = (props) => {

    const [sessionLength, setSessionLength] = useState(25*60);
    const [disabled, setDisabled] = useState(false);

    const decrementSessionLength = () => {
        const newSessionLength = sessionLength - 60;
        if(newSessionLength > 0) {
            setSessionLength(newSessionLength);
        }
    }
    const sessionLengthInMinutes = moment.duration(sessionLength, 's').minutes();
    const incrementSessionLength = () => {
        const newSessionLength = sessionLength + 60;
        if(newSessionLength <= 3600) {
            setSessionLength(sessionLength + 60);
        }
    }

    const [breakLength, setBreakLength] = useState(300);

    const decrementBreakLength = () => {
        const newBreakLength = breakLength - 60;
        if(newBreakLength > 0) {
            setBreakLength(newBreakLength);
        }
    }
    const breakLengthInMinutes = moment.duration(breakLength, 's').minutes();

    const incrementBreakLength = () => {
        const newBreakLength = breakLength + 60;
        if(newBreakLength <= 3600) {
            setBreakLength(breakLength + 60);
        }
    }

    return (
        <TimersWrapper>
            <TimeLeft sessionLength={sessionLength} breakLength={breakLength} setDisabled={setDisabled}/>
            <BreakSession>
                <Break
                    breakLengthInMinutes={breakLengthInMinutes}
                    decrementBreakLength={decrementBreakLength}
                    incrementBreakLength={incrementBreakLength}
                    disabled={disabled}
                />
                <Session
                    sessionLengthInMinutes={sessionLengthInMinutes}
                    decrementSessionLength={decrementSessionLength}
                    incrementSessionLength={incrementSessionLength}
                    disabled={disabled}
                />
            </BreakSession>
        </TimersWrapper>
    )
}

export default Timers;
