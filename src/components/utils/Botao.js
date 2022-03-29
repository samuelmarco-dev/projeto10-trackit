function Botao(props) {
    const {classe, conteudo, click, tipo} = props;

    return ( 
        <button className={classe} type={tipo} onClick={click}>{conteudo}</button>
    );
}

export default Botao;