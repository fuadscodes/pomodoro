import React, { useState } from 'react';
import { Descriptions } from 'antd';
import { StyledDescriptions } from './style';
import axios from '../../config/axios-pomodoro';

const Report = (props) => {

    const [seconds, setSeconds] = useState(0);

    // Get funkcija za povlačenje svih podataka iz baze i onda napisati logiku za razvrstavanje podataka
    axios.get('https://pomodoro-98f43.firebaseio.com/pomodoros.json')
    .then(response => {
        console.log(JSON.stringify(response.data));
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
                <Descriptions.Item label="Hours focused">16 (placeholder)</Descriptions.Item>
                <Descriptions.Item label="This week">2 (placeholder)</Descriptions.Item>
                <Descriptions.Item label="This month">16 (placeholder)</Descriptions.Item>
                <Descriptions.Item label="This year">16 (placeholder)</Descriptions.Item>
            </StyledDescriptions>
        </>
    );
}

export default Report;