import {Container} from './style';

function TelaHabitos() {
    return ( 
        <Container>
            <div className='topo-container'>
                <p>Meus Hábitos</p>
                <div className='botao'>
                    <button>+</button>
                </div>
            </div>
        </Container>
    );
}

export default TelaHabitos;