import Paragrafo from '../utils/Paragrafo';
import Footer from '../Footer';

import { Container } from "./style";

import { ImCheckboxChecked } from 'react-icons/im';

function HabitosHoje() {
    return ( 
        <Container>
            <div className='topo-container'>
                <Paragrafo classe="data" conteudo="Segunda, 17/05" />
                <Paragrafo classe="progresso-dia" conteudo="Nenhum hábito concluído ainda" />
            </div>
            <article>
                <div className='painel-habitosHoje'>
                    <div className="descricao">
                        <Paragrafo classe="habito" conteudo="Ler 1 capítulo de livro" />
                        <Paragrafo classe="sequencia" conteudo="Sequência atual: 3 dias" />
                        <Paragrafo classe="recorde" conteudo="Seu recorde: 5 dias" />
                    </div>
                    <figure>
                        <ImCheckboxChecked className="icon"/>
                    </figure>
                </div>
            </article>
            <Footer texto="Hoje" progresso={50}/>
        </Container>
    );
}

export default HabitosHoje;