import Paragrafo from '../utils/Paragrafo';

import { Container } from './style';

import Perfil from './../../assets/img/foto-Perfil.jpg';

function Header() {
    return (
        <Container>
            <Paragrafo conteudo={'TrackIt'} />
            <figure>
                <img src={Perfil} alt="TrackIt"/>
            </figure>
        </Container>
    );
}

export default Header;