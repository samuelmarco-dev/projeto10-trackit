import { useContext } from 'react';
import ContextUsuario from '../contexts/Usuario';

import Paragrafo from '../utils/Paragrafo';

import { Container } from './style';

function Header() {
    const { usuario } = useContext(ContextUsuario);
    console.log(usuario);

    if(usuario === null) {
        return <></>
    }

    return (
        <Container>
            <Paragrafo conteudo={'TrackIt'} />
            <figure>
                <img src={usuario.image} alt="TrackIt"/>
            </figure>
        </Container>
    );
}

export default Header;