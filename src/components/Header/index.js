import { useContext } from 'react';
import ContextUsuario from '../contexts/Usuario';

import Paragrafo from '../utils/Paragrafo';

import { Container } from './style';

function Header() {
    const { usuario } = useContext(ContextUsuario);

    if(usuario === null) {
        const imgLocal = localStorage.getItem('image');
        if(imgLocal === null) {
            return (
                <></>
            );
        }
        return (
            <Container>
                <Paragrafo conteudo={'TrackIt'} />
                <figure>
                    <img src={imgLocal} alt="TrackIt"/>
                </figure>
            </Container>
        ); 
    }else{
        return (
            <Container>
                <Paragrafo conteudo={'TrackIt'} />
                <figure>
                    <img src={usuario.image} alt="TrackIt"/>
                </figure>
            </Container>
        );
    }

}

export default Header;