import axios from "axios";

const urlEntrada = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth'
const urlHabitos = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

function postCadastro ( objetoCadastro ) {
    return axios.post(`${urlEntrada}/sign-up`, objetoCadastro );
}

function postLogin ( objetoLogin ) { 
    return axios.post(`${urlEntrada}/login`, objetoLogin );
}

function postCriarHabitos ( objetoHabito, token ) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return axios.post(`${urlHabitos}`, objetoHabito, config );
}

function getListarHabitos ( token ) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return axios.get(`${urlHabitos}`, config );
}

function deletarHabito ( id, token ) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return axios.delete(`${urlHabitos}/${id}`, config );
}

function getHabitosHoje ( token ) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return axios.get(`${urlHabitos}/today`, config );
}

function postHabitoFeito ( id, token, objetoHabitoFeito ) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return axios.post(`${urlHabitos}/${id}/check`, objetoHabitoFeito, config );
}

function postDesmarcarHabitoFeito ( id, token, objetoHabitoFeito ) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return axios.post(`${urlHabitos}/${id}/uncheck`, objetoHabitoFeito, config );
}

function getHistoricoHabitosDiarios ( token ) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return axios.get(`${urlHabitos}/history/daily`, config );
}

export { 
    postLogin, postCadastro, postCriarHabitos, 
    getListarHabitos,deletarHabito, getHabitosHoje, 
    postHabitoFeito, postDesmarcarHabitoFeito, 
    getHistoricoHabitosDiarios
};