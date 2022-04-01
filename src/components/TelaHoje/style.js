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
        max-height: 70px;
        margin: 24px 0;
        padding: 0 18px;
    }

    .topo-container p {
        width: auto;
        max-width: 100%;
        font-weight: 400;
        text-align: left;
    }

    .topo-container .data {
        height: 29px;
        font-size: 23px;
        line-height: 29px;
        color: rgba(18, 107, 165, 1);
        margin-bottom: 4px;
    }

    .topo-container .progresso-dia {
        height: 22px;
        font-size: 18px;
        line-height: 22px;
        color: rgba(186, 186, 186, 1);
    }

    .topo-container .progresso-dia.concluido {
        color: rgba(143, 197, 73, 1);
    }

    nav{
        width: 100%;
        height: calc(100% - 70px - 100px);
        overflow-y: scroll;
    }

    article{
        padding: 0 18px;
    }

    article .painel-habitosHoje {
        width: 100%;
        min-height: 90px;
        max-height: 100px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    article .painel-habitosHoje .descricao {
        width: auto;
        max-width: 210px;
        height: auto;
        max-height: 100px;
        padding: 0 15px;
        overflow: hidden;
    }

    article .painel-habitosHoje .descricao p{
        color: rgba(102, 102, 102, 1);
        font-weight: 400;
        text-align: left;
        overflow: hidden;
    }

    article .painel-habitosHoje .descricao p.habito {
        width: auto;
        height: auto;
        max-height: 45px;
        font-size: 20px;
        line-height: 25px;
        margin-top: 5px;
        margin-bottom: 8px;
    }

    article .painel-habitosHoje .descricao p.sequencia, 
    article .painel-habitosHoje .descricao p.recorde {
        width: auto;
        height: 15px;
        font-size: 13px;
        line-height: 16px;
    }

    article .painel-habitosHoje .descricao p.recorde {
        margin-top: 3px;
        margin-bottom: 15px;
    }

    article .painel-habitosHoje figure {
        width: 69px;
        height: 69px;
        border-radius: 5px;
        padding: 0 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon {
        font-size: 40px;
        color: rgba(235, 235, 235, 1);
    }
    
    .icon.concluido{
        color: rgba(143, 197, 73, 1);
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

    article .habito-ausente {
        width: 100%;
        height: auto;
        max-height: 120px;
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

    .atualizado{
        color: rgba(143, 197, 73, 1);
    }
`;