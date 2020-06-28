import styled from 'styled-components';
import { Button } from 'antd';

export const Controls = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85px;
`;

export const PlusButton = styled(Button)`
    border-color: #52c41a;
    color: #52c41a;
    &:hover{
        color: #95de64;
        border-color: #95de64;
    };
`;