import React, { useState } from 'react';
import { Descriptions } from 'antd';
import { StyledDescriptions } from './style';
import axios from '../../config/axios-pomodoro';

const Report = (props) => {

    // Prvo uraditi this month i this year i onda
    const [hours, setHours] = useState(0);
    const [thisWeek, setThisWeek] = useState(0);
    const [thisMonth, setThisMonth] = useState(0);
    const [thisYear, setThisYear] = useState(0);

    let tempSeconds = 0;
    axios.get('https://pomodoro-98f43.firebaseio.com/pomodoros.json')
    .then(response => {
        const temp = JSON.stringify(response.data).split('"');
        console.log(JSON.stringify(response.data).split('"'));
        for(let i = 0; i < temp.length; i+=12) {
            if((JSON.stringify(response.data).split('"')[(i-1)]) === props.email) {
                let sec = (JSON.stringify(response.data).split('"')[i-8]);
                tempSeconds += parseInt(sec.replace(':', '').replace(',', ''))
            }
        }
        console.log(tempSeconds);
        setHours((tempSeconds/3600).toFixed(2));
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
                <Descriptions.Item label="This week">{thisWeek}</Descriptions.Item>
                <Descriptions.Item label="This month">{thisMonth}</Descriptions.Item>
                <Descriptions.Item label="This year">{thisYear}</Descriptions.Item>
            </StyledDescriptions>
        </>
    );
}

export default Report;