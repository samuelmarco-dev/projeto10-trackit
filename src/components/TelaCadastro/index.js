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
    
    const [disable, setDisable] = useState(false);
    const [dadosCadastro, setDadosCadastro] = useState({
        email: '', name: '', image: '', password: '' 
    });

    const navigate = useNavigate();
    const { setUsuario } = useContext(ContextUsuario);

    function postarDadosCadastro(event) {
        event.preventDefault();
        
        const promise = postCadastro(dadosCadastro);
        promise.then(response => {
            console.log(response.data);
            setDisable(true);
            setUsuario(response.data);
            localStorage.setItem('name', response.data.name);
            localStorage.setItem('email', response.data.email);
            localStorage.setItem('id', response.data.id);
            localStorage.setItem('image', response.data.image);
            navigate('/');
        })
        .catch((error) => {
            swal(`Error ${error.response.status}, please try again!`);
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
                    <input type="text" placeholder={arrayInput[0]} value={dadosCadastro.email} required disabled={disable} 
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, email: e.target.value})}/>

                    <input type="password" placeholder={arrayInput[1]} value={dadosCadastro.password} required disabled={disable}
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, password: e.target.value})}/>

                    <input type="text" placeholder={arrayInput[2]} value={dadosCadastro.name} required disabled={disable}
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, name: e.target.value})}/>

                    <input type="text" placeholder={arrayInput[3]} value={dadosCadastro.image} required disabled={disable}
                    onChange={(e)=>setDadosCadastro({...dadosCadastro, image: e.target.value})}/>
                </div>
                <div className="botao">
                    <Botao conteudo="Cadastrar" tipo="submit" disabled={disable}/>
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