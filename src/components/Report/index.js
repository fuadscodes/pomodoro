import React from 'react';
import { Descriptions } from 'antd';

const Report = (props) => {
    return (
        // Description List
        <>
            <h3>Report</h3>
            <Descriptions bordered column={1}>
                <Descriptions.Item label="User">{props.email}</Descriptions.Item>
                <Descriptions.Item label="Hours focused">16 (placeholder)</Descriptions.Item>
                <Descriptions.Item label="This week">2 (placeholder)</Descriptions.Item>
                <Descriptions.Item label="This month">16 (placeholder)</Descriptions.Item>
                <Descriptions.Item label="This year">16 (placeholder)</Descriptions.Item>
            </Descriptions>
        </>
    );
}

export default Report;