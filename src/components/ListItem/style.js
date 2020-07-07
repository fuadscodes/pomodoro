import styled from 'styled-components';

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    border-radius: 10px;
    border: 1px solid #1C94FC;
    padding: 20px; 
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 450px) {
        width: 100%;
        text-aling: center;
    }
`;