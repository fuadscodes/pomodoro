import styled from 'styled-components';
import { Button } from 'antd';

export const Controls = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85px;
`;

export const PlusButtonMedium = styled(Button)`
    width: 40%;
    color: #52c41a;
    border-color: #52c41a;
    &:hover{
        color: #95de64;
        cursor: pointer;
        border-color: #95de64;
    };
`;

export const PlusButtonSmall = styled(Button)`
    color: #52c41a;
    border-color: #52c41a;
    &:hover{
        color: #95de64;
        cursor: pointer;
        border-color: #95de64;
    };
`;

export const MinusButtonMedium = styled(Button)`
    width: 40%;
    color: #f5222d;
    &:hover{
        color: #ff7875;
        cursor: pointer;
    };
`;

export const MinusButtonSmall = styled(Button)`
    color: #f5222d;
    &:hover{
        color: #ff7875;
        cursor: pointer;
    };
`;