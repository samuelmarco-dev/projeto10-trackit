import Paragrafo from '../utils/Paragrafo';

import { Container } from "./style";

import { ImCheckboxChecked } from 'react-icons/im';

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function HabitosHoje() {
    return ( 
        <Container>
            <div className='topo-container'>
                <p className="data">Segunda, 17/05</p>
                <p className="progresso-dia">Nenhum hábito concluído ainda</p>
            </div>
            <article>
                <div className='painel-habitosHoje'>
                    <div className="descricao">
                        <p id="habito">Ler 1 capítulo de livro</p>
                        <p id="sequencia">Sequência atual: 3 dias</p>
                        <p id="recorde">Seu recorde: 5 dias</p>
                    </div>
                    <figure>
                        <ImCheckboxChecked className="icon"/>
                    </figure>
                </div>
            </article>
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

export default HabitosHoje;