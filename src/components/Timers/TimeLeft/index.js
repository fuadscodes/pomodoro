import React, {useEffect, useState, useRef} from "react"
import moment from "moment";
import momentDurationFormatSetup from 'moment-duration-format';
import { message } from 'antd';
import { TimeLeftWrapper, StartStop, PomodoroImage, Time } from './style';
import { PlusButtonMedium, MinusButtonSmall } from '../components/Controls';

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
            setDisabled(true);
            props.setDisabled(true);
            const newIntervalId = setInterval(() => {
                if(isStarted) {
                    setTimeLeft(prevTimeLeft => {
                        const newTimeLeft = prevTimeLeft - 1;
                        if(newTimeLeft >= 0) {
                            return newTimeLeft;
                        } else {
                            setDisabled(false);
                            audioElement.current.play();
                            message.success("Thank you for using PomodoroTracker!", 2);
                            if(currentSessionType === 'Session') {
                                isStarted = false;
                                console.log("database");
                                setCurrentSessionType('Break');
                                return props.breakLength;
                            } else if (currentSessionType === 'Break') {
                                setCurrentSessionType('Session');
                                isStarted = false;
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
            setDisabled(false);
            props.setDisabled(false);
            message.error("Start again!", 3);
            setCurrentSessionType('Session');
            clearInterval(intervalId);
            setTimeLeft(props.sessionLength);
            isStarted = false;
            audioElement.current.load();
        } else {
            props.setDisabled(false);
            setCurrentSessionType('Session');
            setTimeLeft(props.sessionLength);
            isStarted = false;
        }
    }

    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', {trim: false});

    return (
        <TimeLeftWrapper>
            <PomodoroImage>
                <Time><p>{formattedTimeLeft}</p></Time>
            </PomodoroImage>
            <p>{currentSessionType}</p>
            <StartStop>
                <PlusButtonMedium onClick={handleStartClick} disabled={disabled}>Start</PlusButtonMedium>
                <MinusButtonSmall onClick={handleStopClick} disabled={!disabled}>Stop</MinusButtonSmall>
            </StartStop>
            <audio id="beep" ref={audioElement}>
                <source src="alarm.mp3" type="audio/mpeg" />
            </audio>
        </TimeLeftWrapper>
    )
}

export default TimeLeft;
