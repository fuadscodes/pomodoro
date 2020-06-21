import React, {useEffect, useState, useRef} from "react"
import moment from "moment";
import momentDurationFormatSetup from 'moment-duration-format';
import { Button, message } from 'antd';
import "./TimeLeft.css";

momentDurationFormatSetup(moment)

const TimeLeft = (props) => {
    const audioElement = useRef(null);
    const [intervalId, setIntervalId] = useState(false);
    const [timeLeft, setTimeLeft] = useState(props.sessionLength);
    const [currentSessionType, setCurrentSessionType] = useState('Session');
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setTimeLeft(props.sessionLength);
    }, [props.sessionLength]);

    let isStarted = intervalId != null;

    const handleStartClick = () => {
            const newIntervalId = setInterval(() => {
                if(isStarted) {
                    setDisabled(true);
                    setTimeLeft(prevTimeLeft => {
                        const newTimeLeft = prevTimeLeft - 1;
                        if(newTimeLeft >= 0) {
                            return newTimeLeft;
                        } else {
                            audioElement.current.play();
                            message.success("Thank you for using PomodoroTracker!", 3);
                            if(currentSessionType === 'Session') {
                                setCurrentSessionType('Break');
                                isStarted = false;
                                setDisabled(false);
                                console.log("database");
                                return props.breakLength;
                            } else if (currentSessionType === 'Break') {
                                setCurrentSessionType('Session');
                                isStarted = false;
                                setDisabled(false);
                                return props.sessionLength;
                            }
                        }
                    })
                }
            }, 100);
            setIntervalId(newIntervalId);
        }

    const handleStopClick = () => {
        if(isStarted) {
            setCurrentSessionType('Session');
            clearInterval(intervalId);
            setTimeLeft(props.sessionLength);
            isStarted = false;
            setDisabled(false);
            audioElement.current.load();
        } else {
            setCurrentSessionType('Session');
            setTimeLeft(props.sessionLength);
            isStarted = false;
            setDisabled(false);
        }
    }

    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', {trim: false})

    return (
        <div className="TimeLeft">
            <div className="PomodoroImage">
                <p className="Time">{formattedTimeLeft}</p>
            </div>
            <p>{currentSessionType}</p>
            <div className="StartStop">
                <Button onClick={handleStartClick} disabled={disabled}>Start</Button>
                <Button onClick={handleStopClick} disabled={!disabled}>Stop</Button>
            </div>
            <audio id="beep" ref={audioElement}>
                <source src="alarm.mp3" type="audio/mpeg" />
            </audio>
        </div>
    )
}

export default TimeLeft;
