import React from 'react';
import { Descriptions } from 'antd';
import { StyledDescriptions } from './style';

const Report = (props) => {
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