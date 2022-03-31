import styled from 'styled-components'; 

export const Container = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 70px;
    left: 0;
    font-family: 'Lexend Deca', sans-serif;
    background-color: rgba(242, 242, 242, 1);
    
    nav{
        width: 100%;
        height: calc(100% - 70px - 110px);
        overflow-y: scroll;
        padding: 0 18px;
    }

    .topo-container {
        width: 100%;
        height: 45px;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
        margin-top: 0;
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

    nav .habito-ausente {
        width: 100%;
        height: auto;
        max-height: 74px;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        color: rgba(102, 102, 102, 1);
        margin-top: 24px;
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
    }

    article {
        width: 100%;
        height: auto;
        margin-top: 20px;
    }

    article .painel-habitos {
        width: 100%;
        height: auto;
        max-height: 180px;
        background-color: rgba(255, 255, 255, 1);
        padding: 14px 18px; 
        border-radius: 5px;
        margin-bottom: 10px;
    }

    article .painel-habitos input {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        border: 1px solid rgba(212, 212, 212, 1);
        padding: 0 11px;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        text-align: left;
        color: rgba(219, 219, 219, 1);
    }

    article .painel-habitos input:focus{
        color: rgba(102, 102, 102, 1);
    }

    .botoes {
        width: 100%;
        height: 30px;
        margin-top: 8px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .botoes button {
        width: 30px;
        height: 100%;
        border-radius: 5px;
        border: 1px solid rgba(212, 212, 212, 1);
        text-align: center;
        color: rgba(219, 219, 219, 1);
        margin-right: 4px;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        background-color: rgba(255, 255, 255, 1);
    }

    .botoes button.selecionado {
        color: rgba(255, 255, 255, 1);
        border: 1px solid rgba(207, 207, 207, 1);
        background-color: rgba(207, 207, 207, 1);
    }

    article .painel-habitos .acoes-habitos {
        width: 100%;
        height: 35px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 24px;
    }

    article .painel-habitos .acoes-habitos span {
        width: auto;
        height: 20px;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        color: #52B6FF;
        margin-right: 22px;
    }

    article .painel-habitos .acoes-habitos button.avancar {
        width: 84px;
        height: 35px;
        border-radius: 5px;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        text-align: center;
        color: rgba(255, 255, 255, 1);
        background-color: rgba(82, 182, 255, 1);
    }

    article .habitos-criados {
        width: 100%;
        height: auto;
        max-height: 90px;
        background-color: rgba(255, 255, 255, 1);
        border-radius: 5px;
        padding: 14px 18px;
        position: relative;
        margin-bottom: 10px;
    }

    article .habitos-criados .topo-habito {
        width: auto;
        height: 25px;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        text-align: left;
        color: rgba(102, 102, 102, 1);
    }

    article .habitos-criados figure {
        width: 13px;
        height: 15px;
        position: absolute;
        top: 11px;
        right: 11px;
    }

    article .habitos-criados figure .icon {
        color: rgba(102, 102, 102, 1);
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