import styled from 'styled-components';

export const TimeLeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    vertical-align: center;
`;

export const StartStop = styled.div`
    display: flex;
    justify-content: space-between;
    width: 205px;
`;

export const PomodoroImage = styled.div`
    background-image: url("pomodoro.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
    width: 200px;
`;

export const Time = styled.div`
    font-weight: bold;
    padding-top: 54%;
    font-size: 26px;
`;

export const BreakSession = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;