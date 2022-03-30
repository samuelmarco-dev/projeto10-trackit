import Paragrafo from "../utils/Paragrafo";

import { Container } from "./style";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function TelaHistorico() {
    return ( 
        <Container>
            <div className="topo-container">
                <Paragrafo classe="titulo-section" conteudo="Histórico" />
                <Paragrafo classe="descricao" conteudo="Em breve você poderá ver o histórico dos seus hábitos aqui!" />
            </div>
            <footer>
                <Paragrafo conteudo='Hábitos' />
                <div>
                <CircularProgressbar className='progressbar'
                    value={60}
                    text="Hoje"
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                    backgroundColor: "rgba(82, 182, 255, 1)",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                    })} />
                </div>
                <Paragrafo conteudo='Histórico' />
            </footer>
        </Container>
    );
}

export default TelaHistorico;