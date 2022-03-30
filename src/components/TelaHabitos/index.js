import { useContext } from 'react';
import ContextToken from '../contexts/Token';
import ContextUsuario from '../contexts/Usuario';

import Paragrafo from '../utils/Paragrafo';
import Botao from '../utils/Botao';
import Footer from '../Footer';

import {Container} from './style';

import {BsTrash} from 'react-icons/bs';


function TelaHabitos() {
    const arrayDias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    const {tokenUsuario} = useContext(ContextToken);
    if(tokenUsuario !== null) {
        console.log(tokenUsuario);
    }

    const {usuario} = useContext(ContextUsuario);
    console.log(usuario);
    
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
                        <Paragrafo classe="topo-habito" conteudo="Ler 1 capítulo de livro" />
                            {gerarDiasSemana()}
                        <figure>
                            <BsTrash className='icon'/>
                        </figure>
                    </div>
                </article>
                <Paragrafo classe='habito-ausente' conteudo='Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!' />
            </nav> 
            <Footer texto="Hoje" progresso={50}/>
        </Container>
    );
}

export default TelaHabitos;
