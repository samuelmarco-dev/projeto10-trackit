import Botao from "../utils/Botao";
import Paragrafo from "../utils/Paragrafo";

import { Container } from "./style";

import TrackIt from "./../../assets/img/logo-TrackIt.jpg";

function TelaInicial() {
    const arrayInput = ['email', 'senha'];

    if(arrayInput.length > 0) {
        return (
            <Container> 
                <figure>
                    <img src={TrackIt} alt="Logo TrackIt"/>
                </figure>
                <div className="inputs">
                    <input type="text" placeholder={arrayInput[0]} />
                    <input type="password" placeholder={arrayInput[1]} />
                </div>
                <div className="botao">
                    <Botao conteudo="Entrar" tipo="submit" />
                </div>
                <Paragrafo conteudo="Não tem uma conta? Cadastre-se!" />
            </Container>
        );
    }
    return ( <Container><h1>Carregando...</h1></Container> );
}

export default TelaInicial;

// eslint-disable-next-line no-lone-blocks
{/* 
    {arrayInput.map((item, index) => { 
        return <input key={index} type="text" placeholder={item} />
    })}
*/}