import React, {useEffect, useState, useRef} from "react"
import moment from "moment";
import momentDurationFormatSetup from 'moment-duration-format';
import { Button, message } from 'antd';
import { TimeLeftWrapper, StartStop, PomodoroImage, Time } from './style';

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
                            /* Zašto se ovaj dio izvršava 2 puta skontati */
                            audioElement.current.play();
                            message.success("Thank you for using PomodoroTracker!", 2);
                            if(currentSessionType === 'Session') {
                                isStarted = false;
                                setDisabled(false);
                                console.log("database");
                                setCurrentSessionType('Break');
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
            }, 1000);
            setIntervalId(newIntervalId);
        }

    const handleStopClick = () => {
        if(isStarted) {
            message.error("Start again!", 3);
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
        <TimeLeftWrapper>
            <PomodoroImage>
                <Time><p>{formattedTimeLeft}</p></Time>
            </PomodoroImage>
            <p>{currentSessionType}</p>
            <StartStop>
                <Button onClick={handleStartClick} disabled={disabled}>Start</Button>
                <Button onClick={handleStopClick} disabled={!disabled}>Stop</Button>
            </StartStop>
            <audio id="beep" ref={audioElement}>
                <source src="alarm.mp3" type="audio/mpeg" />
            </audio>
        </TimeLeftWrapper>
    )
}

export default TimeLeft;
