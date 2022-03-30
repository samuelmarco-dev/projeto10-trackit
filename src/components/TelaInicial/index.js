import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import { postLogin } from "../services/dataAxios"; 
import swal from "sweetalert";

import ContextUsuario from "../contexts/Usuario";
import ContextToken from "../contexts/Token";

import Botao from "../utils/Botao";
import Paragrafo from "../utils/Paragrafo";

import { Container } from "./style";

import TrackIt from "./../../assets/img/logo-TrackIt.jpg";

function TelaInicial() {
    const arrayInput = ['email', 'senha'];

    const [disable, setDisable] = useState(false);
    const [dadosEntrada, setDadosEntrada] = useState({
        email: '', password: ''
    });

    const navigate = useNavigate();
    const { usuario, setUsuario } = useContext(ContextUsuario);
    const { setTokenUsuario } = useContext(ContextToken);
    
    if(usuario !== null) {
        console.log(usuario);
    }

    function postarDadosLogin(event) {
        event.preventDefault();
        const promise = postLogin(dadosEntrada);
        promise.then(response => {
            console.log(response.data);
            setDisable(true);
            setUsuario(response.data);
            setTokenUsuario(response.data.token);
            localStorage.setItem('token', response.data.token);
            navigate('/hoje');
        })
        .catch((error) => {
            swal(`Error ${error.response.status}, please try again!`);
            setDadosEntrada({
                email: '', password: ''
            });
        });
    }

    if(arrayInput.length > 0) {
        return (
            <Container> 
                <figure>
                    <img src={TrackIt} alt="Logo TrackIt"/>
                </figure>
                <form onSubmit={postarDadosLogin}>
                    <div className="inputs">
                        <input type="text" placeholder={arrayInput[0]} value={dadosEntrada.email} required disabled={disable} 
                        onChange={(e)=>setDadosEntrada({...dadosEntrada, email: e.target.value})}/>

                        <input type="password" placeholder={arrayInput[1]} value={dadosEntrada.password} required disabled={disable}
                        onChange={(e)=>setDadosEntrada({...dadosEntrada, password: e.target.value})}/>
                    </div>
                    <div className="botao">
                        <Botao conteudo="Entrar" tipo="submit" disabled={disable}/>
                    </div>
                </form>
                <Link to="/cadastro">
                    <Paragrafo conteudo="Não tem uma conta? Cadastre-se!" />
                </Link>
            </Container>
        );
    }
    return ( <Container><h1>Carregando...</h1></Container> );
}

export default TelaInicial;