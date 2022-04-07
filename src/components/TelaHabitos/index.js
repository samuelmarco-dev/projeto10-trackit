import { useContext, useState, useEffect } from 'react';
import ContextToken from '../contexts/Token';
import ContextProgressoUsuario from "../contexts/Progress";

import Paragrafo from '../utils/Paragrafo';
import Botao from '../utils/Botao';
import Footer from '../Footer';

import swal from 'sweetalert';
import { Container } from './style';
import { ThreeDots } from 'react-loader-spinner';

import { BsTrash } from 'react-icons/bs';
import { getListarHabitos, postCriarHabitos, deletarHabito } from '../services/dataAxios';

function TelaHabitos() {
    const arrayDias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const {tokenUsuario} = useContext(ContextToken);
    const {progressoUsuario} = useContext(ContextProgressoUsuario);

    const [mostrarForm, setMostrarForm] = useState(false);
    const [habitos, setHabitos] = useState([]);
    const [nomeHabito, setNomeHabito] = useState('');

    const [diasSelecionados, setDiasSelecionados] = useState([]);
    const [disable, setDisable] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        listarHabitosUsuario();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function listarHabitosUsuario (){
        if(tokenUsuario !== null) {
            const promise = getListarHabitos(tokenUsuario)
            promise.then(response => {
                const { data } = response;
                const arr = [];
                // eslint-disable-next-line array-callback-return
                data.map((item)=>{
                    if(item.days.length > 0){
                        arr.push(item);
                    }
                })
                setHabitos(arr);
            }).catch(error => {
                swal('Erro ao listar os seus hábitos!');
            });

        }else{
            const token = localStorage.getItem('token');
            const promise = getListarHabitos(token)    
            promise.then(response => {
                const { data } = response;
                const arr = [];
                // eslint-disable-next-line array-callback-return
                data.map((item)=>{
                    if(item.days.length > 0){
                        arr.push(item);
                    }
                })
                setHabitos(arr);
            }).catch(error => {
                swal('Erro ao listar os seus hábitos!');
            });
        }
    }

    function criarNovoHabito () {
        if(tokenUsuario !== null) {
            setDisable(true);
            setLoading(true);
            const promise = postCriarHabitos({name: nomeHabito, days: [...diasSelecionados]}, tokenUsuario)
            if(nomeHabito === '' || diasSelecionados.length === 0){
                swal('Preencha todos os campos e selecione pelo menos um dia!');
                setTimeout(() => {
                    setDisable(false);
                    setLoading(false);
                } , 1200);
                return;
            }else{
                promise.then(response => {
                    setNomeHabito('');
                    setDiasSelecionados([]);
                    setDisable(false);
                    setLoading(false);
                    setMostrarForm(false);
                    listarHabitosUsuario ();
                })
                .catch((error) => {
                    swal(`Erro ao criar hábito, status: ${error.response.status}`);
                    setNomeHabito('');
                    setDiasSelecionados([]);
                    setDisable(false);
                    setLoading(false);
                })
            }
        }else{
            setDisable(true);
            setLoading(true);
            const token = localStorage.getItem('token');
            const promise = postCriarHabitos({name: nomeHabito, days: [...diasSelecionados]}, token)
            if(nomeHabito === '' || diasSelecionados.length === 0){
                swal('Preencha todos os campos e selecione pelo menos um dia!');
                setTimeout(() => {
                    setDisable(false);
                    setLoading(false);
                } , 1200);
                return;
            }else{
                promise.then(response => {
                    setNomeHabito('');
                    setDiasSelecionados([]);
                    setDisable(false);
                    setLoading(false);
                    setMostrarForm(false);
                    listarHabitosUsuario ();
                })
                .catch((error) => {
                    swal(`Erro ao criar hábito, status: ${error.response.status}`);
                    setNomeHabito('');
                    setDiasSelecionados([]);
                    setDisable(false);
                    setLoading(false);
                })
            }
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
                        listarHabitosUsuario ();
                    })
                    .catch((error) => {
                         swal(`Erro ao remover hábito, status: ${error.response.status}`);                   
                    })
                }else{
                    const token = localStorage.getItem('token');
                    const promise = deletarHabito(id, token)
                    promise.then(response => {
                        listarHabitosUsuario ();
                    })
                    .catch((error) => {
                        swal(`Erro ao remover hábito, status: ${error.response.status}`);                        
                    })
                }
            }
          });
    }

    function gerarDiasSemana(){
        return (
            <div className='botoes'>
                {arrayDias.map((dia, index) => {
                    if(diasSelecionados.includes(index)){
                        return(
                            <Botao key={index} classe='selecionado' conteudo={dia} click={()=>listaDeDias(index)} disabled={disable}/>
                        )
                    }
                    return (
                        <Botao key={index} classe={''} conteudo={dia} click={()=>listaDeDias(index)} disabled={disable}/>
                    )
                })}
            </div>
        )
    }

    function listaDeDias (index){
        if(diasSelecionados.includes(index)){
            setDiasSelecionados(diasSelecionados.filter((diaClicadoNovamente) => {
                //deixa no array somente os dias que não foram clicados pela segunda vez
                return diaClicadoNovamente !== index; 
            }));
        }
        else{
            setDiasSelecionados([...diasSelecionados, index]);
        }
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
                            <div className='painel-habitos'>
                                <input type="text" placeholder='nome do hábito' value={nomeHabito} disabled={disable}
                                onChange={(e)=>setNomeHabito(e.target.value)}/>
                                {gerarDiasSemana()}
                                <div className='acoes-habitos'>
                                    <span onClick={()=>{setMostrarForm(false)}}>Cancelar</span>
                                    {!loading ? <Botao classe='avancar' conteudo='Salvar' tipo="submit" disabled={disable}
                                    click={()=>criarNovoHabito()}/> : <Botao classe='avancar' 
                                    conteudo={<ThreeDots color="#fff" height={13} />} tipo="submit" disabled={disable} click={()=>criarNovoHabito()}/>
                                    }
                                </div>
                            </div>
                    }
                    {habitos.length > 0 ?
                        habitos.map((habito) => {
                            const {name, id, days} = habito;
                            return (
                                <div key={id} className='habitos-criados'>
                                    <Paragrafo classe="topo-habito" conteudo={name} />
                                    {
                                        <div className='botoes'>
                                        {arrayDias.map((dia, index) => {
                                            if(days.includes(index)){
                                                return (
                                                    <Botao key={index} classe={'selecionado'} conteudo={dia} />
                                                )
                                            }
                                            return (
                                                <Botao key={index} conteudo={dia} />
                                            )
                                        })}
                                        </div>
                                    }
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
            <Footer texto="Hoje" progresso={progressoUsuario}/>
        </Container>
    );
}

export default TelaHabitos;