import { useContext, useState, useEffect } from 'react';
import ContextToken from '../contexts/Token';

import Paragrafo from '../utils/Paragrafo';
import Botao from '../utils/Botao';
import Footer from '../Footer';

import swal from 'sweetalert';
import { Container } from './style';

import { BsTrash } from 'react-icons/bs';
import { getListarHabitos, postCriarHabitos, deletarHabito } from '../services/dataAxios';

function TelaHabitos() {
    const arrayDias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const {tokenUsuario} = useContext(ContextToken);

    const [mostrarForm, setMostrarForm] = useState(false);
    const [diasSelecionados, setDiasSelecionados] = useState(false);

    const [habitos, setHabitos] = useState([]);
    const [nomeHabito, setNomeHabito] = useState('');
      
    useEffect(() => {
        listarHabitosUsuario();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function listarHabitosUsuario (){
        if(tokenUsuario !== null) {
            console.log(tokenUsuario);
            const promise = getListarHabitos(tokenUsuario)
            promise.then(response => {
                console.log(response.data);
                setHabitos(response.data);     
            }).catch(error => {
                console.log(error);
                swal('Erro ao listar os seus hábitos!');
            });

        }else{
            const token = localStorage.getItem('token');
            console.log(token);
            const promise = getListarHabitos(token)    
            promise.then(response => {
                console.log(response.data);
                setHabitos(response.data);
            }).catch(error => {
                console.log(error);
                swal('Erro ao listar os seus hábitos!');
            });
        }
    }

    function criarNovoHabito ( event ) {
        event.preventDefault();
        
        if(tokenUsuario !== null) {
            const promise = postCriarHabitos({name: "Nome do hábito",days: [1, 3, 5]}, tokenUsuario)
            promise.then(response => {
                console.log(response.data);
                setNomeHabito('');
                setMostrarForm(false);
                listarHabitosUsuario ();
            })
            .catch((error) => {
                console.log(error);
                swal(`Erro ao criar hábito, status: ${error.response.status}`);
                setNomeHabito('');
            })
        }else{
            const token = localStorage.getItem('token');
            console.log(token);
            const promise = postCriarHabitos({name: "Nome do hábito", days: [1, 3, 5]}, token)
            promise.then(response => {
                console.log(response.data);
                setNomeHabito('');
                setMostrarForm(false);
                listarHabitosUsuario ();
            })
            .catch((error) => {
                console.log(error);
                swal(`Erro ao criar hábito, status: ${error.response.status}`);
                setNomeHabito('');
            })
        }
    }

    function removerHabito ( id ) {
        swal({
            title: "Deletar hábito",
            text: "Você tem certeza que deseja deletar este hábito?",
            icon: "warning",
            dangerMode: true,
            buttons: true,
          })
          .then(willDelete => {
            if (willDelete === true) {
                swal("Hábito apagado!", "Seu hábito foi apagado com sucesso!", "success");
                if(tokenUsuario !== null) {
                    const promise = deletarHabito(id, tokenUsuario)
                    promise.then(response => {
                        console.log(response.data);
                        listarHabitosUsuario ();
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                }else{
                    const token = localStorage.getItem('token');
                    console.log(token);
                    const promise = deletarHabito(id, token)
                    promise.then(response => {
                        console.log(response.data);
                        listarHabitosUsuario ();
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                }
            }
          });
    }


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
                        <form onSubmit={criarNovoHabito}>
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
                        habitos.map((habito) => {
                            const {name, id} = habito;
                            return (
                                <div key={id} className='habitos-criados'>
                                    <Paragrafo classe="topo-habito" conteudo={name} />
                                        {gerarDiasSemana()}
                                    <figure onClick={()=>removerHabito(id)}>
                                        <BsTrash className='icon'/>
                                    </figure>
                                </div>
                            ); 
                        })
                        :
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