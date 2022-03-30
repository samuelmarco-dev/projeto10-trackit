import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { postCadastro } from "../services/dataAxios";
import swal from "sweetalert";

import ContextUsuario from "../contexts/Usuario";

import Botao from "../utils/Botao";
import Paragrafo from "../utils/Paragrafo";
import TrackIt from "./../../assets/img/logo-TrackIt.jpg";

import { Container } from "./style";

function TelaCadastro() {
    const arrayInput = ['email', 'senha', 'nome', 'foto'];
    const [dadosCadastro, setDadosCadastro] = useState({
        email: '', name: '', image: '', password: '' 
    });

    const navigate = useNavigate();
    const { setUsuario } = useContext(ContextUsuario);

    function postarDadosCadastro(event) {
        event.preventDefault();
        console.log(dadosCadastro);

        const promise = postCadastro(dadosCadastro);
        promise.then(response => {
            console.log(response, response.data);
            setUsuario(response.data);
            localStorage.setItem('image', response.data.image);
            navigate('/');
            // if (response.data.status === 'success') {
            //     localStorage.setItem('token', response.data.token);
            //     localStorage.setItem('user', response.data.user);
            //     window.location.href = '/';
            // } else {
            //     alert('Usuário ou senha inválidos');
            // }
        })
        .catch(error => {
            swal("Error, please try again!");
            setDadosCadastro({
                email: '', name: '', image: '', password: ''
            });
        });
    }

    if(arrayInput.length > 0) {
        return ( 
        <Container>
            <figure>
                <img src={TrackIt} alt="TrackIt"/>
            </figure>
            <form onSubmit={postarDadosCadastro}>
                <div className="inputs">
                    <input type="text" placeholder={arrayInput[0]} value={dadosCadastro.email} required
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, email: e.target.value})}/>

                    <input type="password" placeholder={arrayInput[1]} value={dadosCadastro.password} required
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, password: e.target.value})}/>

                    <input type="text" placeholder={arrayInput[2]} value={dadosCadastro.name} required
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, name: e.target.value})}/>

                    <input type="text" placeholder={arrayInput[3]} value={dadosCadastro.image} required
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, image: e.target.value})}/>
                </div>
                <div className="botao">
                    <Botao conteudo="Cadastrar" tipo="submit" />
                </div>
            </form>
            <Link to="/">
                <Paragrafo conteudo="Já tem uma conta? Faça login!" />
            </Link>
        </Container>
        );
    }
    return ( <Container><h1>Carregando...</h1></Container> );
}

export default TelaCadastro;

// eslint-disable-next-line no-lone-blocks
{/*
    {arrayInput.map((item, index) => { 
        return <input key={index} type="text" placeholder={item} />
    })}
*/}