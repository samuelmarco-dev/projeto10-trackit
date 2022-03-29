import styled from 'styled-components'; 

export const Container = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 70px;
    left: 0;
    font-family: 'Lexend Deca', sans-serif;
    background-color: rgba(242, 242, 242, 1);
    display: none;

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
`;