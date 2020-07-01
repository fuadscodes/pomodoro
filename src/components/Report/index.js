import React, { useState } from 'react';
import { Descriptions } from 'antd';
import { StyledDescriptions } from './style';
import axios from '../../config/axios-pomodoro';

const Report = (props) => {

    const [hours, setHours] = useState(0);
    const [thisMonth, setThisMonth] = useState(0);
    const [thisYear, setThisYear] = useState(0);

    let tempSeconds = 0;
    let tempLastMonth = 0;
    let tempLastYear = 0;

    let currentTime = new Date();
    let currentMonth = currentTime.getMonth()+1;
    let currentYear = currentTime.getFullYear();

    axios.get('https://pomodoro-98f43.firebaseio.com/pomodoros.json')
    .then(response => {
        const temp = JSON.stringify(response.data).split('"');
        for(let i = 0; i < temp.length; i+=12) {
            if((JSON.stringify(response.data).split('"')[(i-1)]) === props.email) {
                let sec = (JSON.stringify(response.data).split('"')[i-8]);
                tempSeconds += parseInt(sec.replace(':', '').replace(',', ''))
            }
            if((JSON.stringify(response.data).split('"')[(i-1)]) === props.email) {
                let sec = (JSON.stringify(response.data).split('"')[i-8]);
                let time = (JSON.stringify(response.data).split('"')[i-5].substring(0, 10).split('-'));
                if(parseInt(time[0]) === parseInt(currentYear) && parseInt(time[1]) === parseInt(currentMonth)) {
                    tempLastMonth += parseInt(sec.replace(':', '').replace(',', ''));
                }
                if(parseInt(time[0]) === parseInt(currentYear)) {
                    tempLastYear += parseInt(sec.replace(':', '').replace(',', ''));
                }
            }
        }
        setHours((tempSeconds/3600).toFixed(2));
        setThisMonth((tempLastMonth/3600).toFixed(2));
        setThisYear((tempLastYear/3600).toFixed(2));
    })
    .catch(error => {
        console.log(error);
        alert("Pomodoro can't be loaded!");
    });

    return (
        <>
            <h3>Report</h3>
            <StyledDescriptions bordered size="medium" column={1}>
                <Descriptions.Item label="User">{props.email}</Descriptions.Item>
                <Descriptions.Item label="Hours focused">{hours}</Descriptions.Item>
                <Descriptions.Item label="This month">{thisMonth}</Descriptions.Item>
                <Descriptions.Item label="This year">{thisYear}</Descriptions.Item>
            </StyledDescriptions>
        </>
    );
}

export default Report;