import Botao from "../utils/Botao";
import Paragrafo from "../utils/Paragrafo";

import { Container } from "./style";

import TrackIt from "./../../assets/img/logo-TrackIt.jpg";

function TelaCadastro() {
    const arrayInput = ['email', 'senha', 'nome', 'foto'];

    return ( 
    <Container>
        <figure>
            <img src={TrackIt} alt="TrackIt"/>
        </figure>
        <div className="inputs">
            {arrayInput.map((item, index) => { 
                return <input key={index} type="text" placeholder={item} />
            })}
        </div>
        <div className="botao">
            <Botao conteudo="Cadastrar" tipo="submit" />
        </div>
        <Paragrafo conteudo="Já tem uma conta? Faça login!" />
    </Container>
    );
}

export default TelaCadastro;