import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import { postLogin } from "../services/dataAxios"; 
import swal from "sweetalert";

import ContextUsuario from "../contexts/Usuario";
import ContextToken from "../contexts/Token";

import Botao from "../utils/Botao";
import Paragrafo from "../utils/Paragrafo";

import { ThreeDots } from 'react-loader-spinner';
import { Container } from "./style";

import TrackIt from "./../../assets/img/logo-TrackIt.jpg";

function TelaInicial() {
    const arrayInput = ['email', 'senha'];

    const [loading, setLoading] = useState(false);
    const [disable, setDisable] = useState(false);
    const [dadosEntrada, setDadosEntrada] = useState({
        email: '', password: ''
    });

    const navigate = useNavigate();
    const { setUsuario } = useContext(ContextUsuario);
    const { setTokenUsuario } = useContext(ContextToken);

    function postarDadosLogin(event) {
        event.preventDefault();
        setDisable(true);
        setLoading(true);

        const promise = postLogin(dadosEntrada);
        promise.then(response => {
            setUsuario(response.data);
            setTokenUsuario(response.data.token);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('name', response.data.name);
            localStorage.setItem('email', response.data.email);
            localStorage.setItem('id', response.data.id);
            localStorage.setItem('image', response.data.image);
            navigate('/hoje');
        })
        .catch((error) => {
            swal(`Error ${error.response.status}, please try again!`);
            setDadosEntrada({
                email: '', password: ''
            });
            setDisable(false);
            setLoading(false);
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
                        {!loading ? <Botao conteudo="Entrar" tipo="submit" disabled={disable}/> :
                            <Botao conteudo={<ThreeDots color="#fff" height={13} />} tipo="submit" disabled={disable}/>
                        }
                    </div>
                </form>
                <Link to="/cadastro">
                    <Paragrafo conteudo="N??o tem uma conta? Cadastre-se!" />
                </Link>
            </Container>
        );
    }
    return ( <Container><h1>Carregando...</h1></Container> );
}

export default TelaInicial;