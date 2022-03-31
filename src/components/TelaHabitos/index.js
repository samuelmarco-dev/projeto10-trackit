import { useContext, useState, useEffect } from 'react';
import ContextToken from '../contexts/Token';

import Paragrafo from '../utils/Paragrafo';
import Botao from '../utils/Botao';
import Footer from '../Footer';

import {Container} from './style';

import {BsTrash} from 'react-icons/bs';
import { getListarHabitos } from '../services/dataAxios';

function TelaHabitos() {
    const arrayDias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const {tokenUsuario} = useContext(ContextToken);

    const [mostrarForm, setMostrarForm] = useState(false);
    const [habitos, setHabitos] = useState([]);
    const [nomeHabito, setNomeHabito] = useState('');
    const [diasSelecionados, setDiasSelecionados] = useState(false);
      
    useEffect(() => {
        if(tokenUsuario !== null) {
            console.log(tokenUsuario);
            const promise = getListarHabitos(tokenUsuario)
            promise.then(response => {
                console.log(response.data);
                setHabitos(response.data);     
            })
        }else{
            const token = localStorage.getItem('token');
            console.log(token);
            const promise = getListarHabitos(token)    
            promise.then(response => {
                console.log(response.data);
                setHabitos(response.data);
            })
        }
    }, [tokenUsuario]);

    function gerarDiasSemana(){
        return (
            <div className='botoes'>
            {arrayDias.map((dia, index) => {
                const css = 'selecionado';
                if(diasSelecionados === false) {
                    return (
                        <Botao key={index} classe={''} conteudo={dia} click={()=>setDiasSelecionados(true)}/>
                    )
                }else{
                    return (
                        <Botao key={index} classe={css} conteudo={dia} click={()=>setDiasSelecionados(false)}/>
                    )
                }
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
                        <Botao conteudo="+" click={()=>setMostrarForm(true)}/>
                    </div>
                </div>
                <article>
                    {
                        (mostrarForm === false) ? <></> : 
                        <form onSubmit={()=>alert('aaa')}>
                            <div className='painel-habitos'>
                                <input type="text" placeholder='nome do hábito' value={nomeHabito}
                                required onChange={(e)=>setNomeHabito(e.target.value)}/>
                                {gerarDiasSemana()}
                                <div className='acoes-habitos'>
                                    <span onClick={()=>setMostrarForm(false)}>Cancelar</span>
                                    <Botao classe='avancar' conteudo='Salvar' tipo="submit"/>
                                </div>
                            </div>
                        </form>
                    }
                    {habitos.length > 0 ?
                        <div className='habitos-criados'>
                            <Paragrafo classe="topo-habito" conteudo="Ler 1 capítulo de livro" />
                                {gerarDiasSemana()}
                            <figure>
                                <BsTrash className='icon'/>
                            </figure>
                        </div> :
                        <Paragrafo classe='habito-ausente' 
                        conteudo='Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!' />
                    }
                </article>
            </nav> 
            <Footer texto="Hoje" progresso={50}/>
        </Container>
    );
}

export default TelaHabitos;