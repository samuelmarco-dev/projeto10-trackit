import Paragrafo from "../utils/Paragrafo";
import Footer from "../Footer";

import { useContext } from "react";
import ContextProgressoUsuario from "../contexts/Progress";

import { Container } from "./style";

function TelaHistorico() {

    const {progressoUsuario} = useContext(ContextProgressoUsuario);

    return ( 
        <Container>
            <div className="topo-container">
                <Paragrafo classe="titulo-section" conteudo="Histórico" />
                <Paragrafo classe="descricao" conteudo="Em breve você poderá ver o histórico dos seus hábitos aqui!" />
            </div>
            <Footer texto="Hoje" progresso={progressoUsuario}/>
        </Container>
    );
}

export default TelaHistorico;