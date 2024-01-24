import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 10px;
    margin: 1px;
    border: 1px solid #CDCDCD;
    border-radius: 10px;
    background-color: ${props => props.bgcolor};
    color: ${props => props.fontcolor || "#000"};
    font-size: 24px;
    flex: 1;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }
`