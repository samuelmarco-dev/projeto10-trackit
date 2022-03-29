import Botao from "../utils/Botao";
import Paragrafo from "../utils/Paragrafo";

import { Container } from "./style";

import TrackIt from "./../../assets/img/logo-TrackIt.jpg";

function TelaInicial() {
    const arrayInput = ['email', 'senha'];

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
                <Botao conteudo="Entrar" tipo="submit" />
            </div>
            <Paragrafo conteudo="Não tem uma conta? Cadastre-se!" />
        </Container>
    );
}

export default TelaInicial;