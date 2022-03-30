/*
const urlHabitos = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}

function listarHabitos() {
    return axios.get(`${urlEntrada}/`, config );
}

function criarHabito(objetoHabito) {
    return axios.post(`${urlHabitos}`, objetoHabito, config );
}
*/
   
import axios from "axios";
   
const urlEntrada = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth'

function postCadastro ( objetoCadastro ) {
    return axios.post(`${urlEntrada}/sign-up`, objetoCadastro );
}

function postLogin( objetoLogin ) { 
    return axios.post(`${urlEntrada}/login`, objetoLogin );
}

export { postLogin, postCadastro };