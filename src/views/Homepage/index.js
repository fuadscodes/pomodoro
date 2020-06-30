import React from 'react';
import { HomeWrapper } from './style';
import pomodoro from './pomodoro.png';

const Homepage = () => {
    return (
        <HomeWrapper>
            <h3>Wellcome to PomodoroTracker</h3>
            <img src={pomodoro} alt="pomodoro" width="250px" />
        </HomeWrapper>
    )
}

export default Homepage;