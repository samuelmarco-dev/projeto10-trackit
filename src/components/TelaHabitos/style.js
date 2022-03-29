import styled from 'styled-components'; 

export const Container = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 70px;
    left: 0;
    font-family: 'Lexend Deca', sans-serif;
    padding: 0 18px;

    .topo-container {
        width: 100%;
        height: 45px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: aqua;
        margin-top: 24px;
    }

    .topo-container p {
        width: auto;
        height: 29px;
        font-size: 23px;
        font-weight: 400;
        line-height: 29px;
        text-align: left;
        color: rgba(18, 107, 165, 1);
    }

    .topo-container .botao {
        width: 40px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .topo-container .botao button {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background-color: rgba(82, 182, 255, 1);
        font-size: 27px;
        font-weight: 400;
        line-height: 34px;
        color: rgba(255, 255, 255, 1);
    }
`;