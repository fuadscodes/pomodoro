import React, {useState} from "react";
import "./Timers.css";
import Break from "./Break/index";
import Session from "./Session/index";
import moment from "moment";
import TimeLeft from "./TimeLeft/TimeLeft";

const Timers = (props) => {

    const [sessionLength, setSessionLength] = useState(25*60);

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
        <div className="Timers">
            <TimeLeft sessionLength={sessionLength} breakLength={breakLength}/>
            <div className="BreakSession">
                <Break
                    breakLengthInMinutes={breakLengthInMinutes}
                    decrementBreakLength={decrementBreakLength}
                    incrementBreakLength={incrementBreakLength}
                />
                <Session
                    sessionLengthInMinutes={sessionLengthInMinutes}
                    decrementSessionLength={decrementSessionLength}
                    incrementSessionLength={incrementSessionLength}
                />
            </div>
        </div>
    )
}

export default Timers;
