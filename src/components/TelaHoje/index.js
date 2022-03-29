import { Container } from "./style";

import { ImCheckboxChecked } from 'react-icons/im';

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
        </Container>
    );
}

export default HabitosHoje;