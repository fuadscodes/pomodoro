import styled from 'styled-components';
import { Input } from 'antd';

export const StyledInput = styled(Input)`
    width: 50%;
    margin: 5px;
    @media (max-width: 450px) {
        width: 100%;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;
