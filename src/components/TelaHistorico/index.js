import Paragrafo from "../utils/Paragrafo";
import Footer from "../Footer";

import { Container } from "./style";

function TelaHistorico() {
    return ( 
        <Container>
            <div className="topo-container">
                <Paragrafo classe="titulo-section" conteudo="Histórico" />
                <Paragrafo classe="descricao" conteudo="Em breve você poderá ver o histórico dos seus hábitos aqui!" />
            </div>
            <Footer texto="Hoje" progresso={50}/>
        </Container>
    );
}

export default TelaHistorico;