import styled from 'styled-components';
import { Descriptions } from 'antd';

export const StyledDescriptions = styled(Descriptions)`
    .ant-descriptions-item-content {
        background-color: #e9e9e9;
        padding: 1%;
        font-size: 1em;
        @media (max-width: 768px) {
            font-size: 0.8em;
        }
    }

    .ant-descriptions-item-label {
        background-color: #49a9ee;
        color: white;
        font-size: 1em;
        @media (max-width: 768px) {
            font-size: 0.8em;
        }
    }
`;