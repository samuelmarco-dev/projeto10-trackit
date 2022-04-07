import { useState, useEffect, useContext } from 'react';
import swal from 'sweetalert';

import Paragrafo from '../utils/Paragrafo';
import Footer from '../Footer';

import { Container } from "./style";

import { getHabitosHoje, postHabitoFeito, postDesmarcarHabitoFeito } from '../services/dataAxios';
import ContextToken from '../contexts/Token';
import ContextProgressoUsuario from '../contexts/Progress';

import { ImCheckboxChecked } from 'react-icons/im';
import 'dayjs/locale/pt-br';
import dayjs from 'dayjs';

function retornaData(){
    const arrData = [`${dayjs().locale('pt-br').format('dddd, DD/MM')}`];
    const title = arrData.map((item)=>{
        return item[0].toUpperCase() + item.slice(1, item.length)
    })
    return title;
}

function HabitosHoje() {
    const { tokenUsuario } = useContext(ContextToken);
    const tokenLocal = localStorage.getItem('token');

    const {setProgressoUsuario, progressoUsuario} = useContext(ContextProgressoUsuario);
    const [habitosHoje, setHabitosHoje] = useState([]);

    useEffect(() => {
        listarHabitosHoje();
        progressoGenerico();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function listarHabitosHoje() {
        if(tokenUsuario !== null) {
            const promise = getHabitosHoje(tokenUsuario)
            promise.then(response => {
                setHabitosHoje(response.data);
            }).catch(error => {
                swal('Erro ao listar os seus hábitos!');
            });
        } else{
            const promise = getHabitosHoje(tokenLocal)
            promise.then(response => {
                setHabitosHoje(response.data);
            }).catch(error => {
                swal('Erro ao listar os seus hábitos!');
            });
        }
    }

    function toggleHabito(habito){
        const {done} = habito;
        if(done === true){
            return <ImCheckboxChecked className={'icon concluido'} onClick={()=>{
                desmarcarHabitosFeito(habito);
            }} />
        }
        if(done === false){
            return <ImCheckboxChecked className={'icon'} onClick={()=>{
                marcarHabitosFeito(habito);
            }} />
        }
    }
    
    function marcarHabitosFeito (habitoClicado){
        const { id } = habitoClicado;
        
        if(tokenUsuario !== null) {
            const promise = postHabitoFeito(id, tokenUsuario, {done: true});
            promise.then(response => {
                listarHabitosHoje();
                progressoGenerico();
            })
            .catch(error => {
                swal('Erro ao marcar o hábito como feito! Status: ' + error.response.status);
            })
        }else{
            const promise = postHabitoFeito(id, tokenLocal, {done: true});
            promise.then(response => {
                listarHabitosHoje();
                progressoGenerico();
            })
            .catch(error => {
                swal('Erro ao marcar o hábito como feito! Status: ' + error.response.status);
            })
        }
    }
    
    function desmarcarHabitosFeito (habitoClicado){
        const { id } = habitoClicado;

        if(tokenUsuario !== null) {
            const promise = postDesmarcarHabitoFeito(id, tokenUsuario, {done: false});
            promise.then(response => {
                listarHabitosHoje();
                progressoGenerico();
            })
            .catch(error => {
                swal('Erro ao desmarcar o hábito! Status: ' + error.response.status);
            })
        }
        else{
            const promise = postDesmarcarHabitoFeito(id, tokenLocal, {done: false});
            promise.then(response => {
                listarHabitosHoje();
                progressoGenerico();
            })
            .catch(error => {
                swal('Erro ao desmarcar o hábito! Status: ' + error.response.status);
            })
        }
    }

    function progressoGenerico(){
        if(tokenUsuario !== null) {
            const promise = getHabitosHoje(tokenUsuario);
            promise.then(response => {
                if(response.data.length > 0){
                    const habitosFiltrados = response.data.filter(habito => habito.done).length/response.data.length;
                    setProgressoUsuario(habitosFiltrados*100);
                    localStorage.setItem('progresso', habitosFiltrados*100);
                }else{
                    setProgressoUsuario(0);
                    localStorage.setItem('progresso', 0);
                }
            }).catch(error => {
                swal('Erro ao listar os seus hábitos! Status: ' + error.response.status);
            });
        }
        else{
            const promise = getHabitosHoje(tokenLocal);
            promise.then(response => {
                if(response.data.length > 0){
                    const habitosFiltrados = response.data.filter(habito => habito.done).length/response.data.length;
                    setProgressoUsuario(habitosFiltrados*100);
                    localStorage.setItem('progresso', habitosFiltrados*100);
                }else{
                    setProgressoUsuario(0);
                    localStorage.setItem('progresso', 0);
                }
            }).catch(error => {
                swal('Erro ao listar os seus hábitos! Status: ' + error.response.status);
            });
        }
    }

    return ( 
        <Container>
            <nav>
                <div className='topo-container'>
                    <Paragrafo classe="data" conteudo={retornaData()} />
                    {progressoUsuario > 0 ? 
                    <Paragrafo classe="progresso-dia concluido" conteudo={`${Number(progressoUsuario).toFixed(2)}% dos hábitos concluídos`} 
                    /> : <Paragrafo classe="progresso-dia" conteudo="Nenhum hábito concluído ainda" />}
                </div>
                <article>
                    {habitosHoje.length > 0 ?
                        // eslint-disable-next-line array-callback-return
                        habitosHoje.map((habito) => {
                            const { id, name, currentSequence, highestSequence, done } = habito;
                            return (
                                <div className='painel-habitosHoje' key={id}>
                                    <div className="descricao">
                                        <Paragrafo classe="habito" conteudo={name} />
                                        {currentSequence > 0 ?
                                            <p className='sequencia'>{'Sequência atual: '}<span className={done === true ? 'atualizado' : ''}>
                                                {`${currentSequence} dia(s)`}</span></p>
                                        : 
                                            <Paragrafo classe="sequencia progresso" conteudo={"Sequência atual: Ainda não!"} />
                                        }
                                        {highestSequence > 0 ?
                                            <p className='recorde'>{'Seu recorde: '}<span className={currentSequence >= 
                                            highestSequence ? 'atualizado' : ''}>
                                                {`${highestSequence} dia(s)`}</span></p> 
                                        : 
                                            <Paragrafo classe="recorde" conteudo={"Seu recorde: Ainda não!"} />
                                        }
                                    </div>
                                    <figure>
                                        {toggleHabito(habito)}
                                    </figure>
                                </div>
                            )
                        }) 
                        :  
                        <Paragrafo classe="habito-ausente" conteudo="Você não tem nenhum hábito cadastrado para hoje. 
                        Adicione um hábito agora mesmo clicando em Hábitos e comece a trackear!" />
                    }
                </article>
            </nav>
            <Footer texto="Hoje" progresso={progressoUsuario}/>
        </Container>
    );
}

export default HabitosHoje;