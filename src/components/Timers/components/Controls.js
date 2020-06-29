import styled from 'styled-components';

export const Controls = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85px;
`;

export const PlusButtonMedium = styled.button`
    width: 40%;
    color: #52c41a;
    &:hover{
        color: #95de64;
        cursor: pointer;
    };
`;

export const PlusButtonSmall = styled.button`
    color: #52c41a;
    &:hover{
        color: #95de64;
        cursor: pointer;
    };
    margin: 1%;
`;

export const MinusButtonSmall = styled.button`
    width: 40%;
    color: #f5222d;
    &:hover{
        color: #ff7875;
        cursor: pointer;
    };
    margin: 1%;
`;

export const MinusButtonMedium = styled.button`
    width: 40%;
    color: #f5222d;
    &:hover{
        color: #ff7875;
        cursor: pointer;
    };
`;