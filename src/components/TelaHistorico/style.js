import styled from 'styled-components'; 

export const Container = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 70px;
    left: 0;
    font-family: 'Lexend Deca', sans-serif;
    background-color: rgba(242, 242, 242, 1);

    .topo-container {
        width: 100%;
        height: auto;
        padding: 0 18px;
        margin-top: 24px;
    }

    .topo-container p {
        width: 100%;
        font-weight: 400;
        text-align: left;
        margin-bottom: 18px;
    }

    .topo-container .titulo-section {
        height: 29px;
        font-size: 23px;
        line-height: 29px;
        color: rgba(18, 107, 165, 1);
    }

    .topo-container .descricao {
        height: auto;
        max-height: 74px;
        overflow: hidden;
        font-size: 18px;
        line-height: 22px;
        color: rgba(102, 102, 102, 1);
        display: flex;
        flex-wrap: wrap;
    }
    
    footer {
        width: 100%;
        height: 70px;
        background-color: rgba(255, 255, 255, 1);
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0;
    }

    footer p {
        width: auto;
        max-width: 85px;
        height: 22px;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        text-align: center;
        color: rgba(82, 182, 255, 1);
    }

    footer div{
        width: auto;
        height: 70px;
        position: relative;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    footer div .progressbar {
        width: 91px;
        height: 91px;
        position: absolute;
        bottom: 10px;
    }
`;