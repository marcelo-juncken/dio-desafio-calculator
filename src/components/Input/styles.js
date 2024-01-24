import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #f1f1f2;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    font-family: 'Roboto', serif;

    input {
        background-color: #f1f1f2;
        border: 0;

        text-align: end;
        margin-right: 8px;

        font-family: 'Roboto', serif;
    }

    input:nth-child(1) {
        font-size: 20px;
    }

    input:nth-child(2) {
        height: 75px;

        font-size: 40px;
        font-weight: bold;
    }
`