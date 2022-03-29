import Paragrafo from '../utils/Paragrafo';
import Botao from '../utils/Botao';

import {Container} from './style';

import {BsTrash} from 'react-icons/bs';

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function TelaHabitos() {
    const arrayDias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    
    function gerarDiasSemana(){
        return (
            <div className='botoes'>
            {arrayDias.map((dia, index) => {
                return (
                    <Botao key={index} conteudo={dia}/>
                );
            })}
            </div>
        )
    }

    return ( 
        <Container>
            <nav>
                <div className='topo-container'>
                    <Paragrafo conteudo='Meus Hábitos' />
                    <div className='botao'>
                        <Botao conteudo="+" />
                    </div>
                </div>

                <article>
                    <div className='painel-habitos'>
                        <input type="text" placeholder='nome do hábito'/>
                        {gerarDiasSemana()}
                        <div className='acoes-habitos'>
                            <span>Cancelar</span>
                            <Botao classe='avancar' conteudo='Salvar' />
                        </div>
                    </div>

                    <div className='habitos-criados'>
                        <p className='topo-habito'>Ler 1 capítulo de livro</p>
                            {gerarDiasSemana()}
                        <figure>
                            <BsTrash className='icon'/>
                        </figure>
                    </div>
                </article>
                <Paragrafo classe='habito-ausente' conteudo='Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!' />
            </nav> 
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

export default TelaHabitos;
