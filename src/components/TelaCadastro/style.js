import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 1);
    font-family: 'Lexend Deca', sans-serif;

    figure {
        width: 100%;
        height: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 60px;
    }

    figure img{
        width: 180px;
        height: 178px;
    }

    .inputs, .botao {
        padding: 0 36px;
    }

    .inputs {
        width: 100%;
        height: auto;
        margin-top: 24px;
    }

    .inputs input {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        border: 1px solid rgba(212, 212, 212, 1);
        background-color: rgba(255, 255, 255, 1);
        margin-bottom: 7px;
        padding: 0 11px;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        text-align: left;
        color: rgba(219, 219, 219, 1);
    }

    .botao {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 25px;
    }
    
    .botao button {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        font-size: 21px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: center;
        color: rgba(255, 255, 255, 1);
        background-color: rgba(82, 182, 255, 1);
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p {
        width: 100%;
        height: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        text-align: center;
        color: rgba(82, 182, 255, 1);
        text-decoration-line: underline;
    }
`;