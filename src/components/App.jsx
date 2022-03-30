import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ContextToken from "./contexts/Token";
import ContextUsuario from "./contexts/Usuario";

import Header from "./Header";
import TelaInicial from "./TelaInicial";
import TelaCadastro from "./TelaCadastro";
import TelaHabitos from "./TelaHabitos";
import TelaHistorico from "./TelaHistorico";
import HabitosHoje from "./TelaHoje";

import "./../assets/css/reset.css";

function App() {
    const [tokenUsuario, setTokenUsuario] = useState(null);
    const [usuario, setUsuario] = useState(null);

    return (
        <ContextToken.Provider value={{tokenUsuario, setTokenUsuario}}>
            <ContextUsuario.Provider value={{usuario, setUsuario}}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<TelaInicial />} />
                        <Route path="/cadastro" element={<TelaCadastro />} />
                        <Route path="/habitos" element={<TelaHabitos />} />
                        <Route path="/hoje" element={<HabitosHoje />} />
                        <Route path="/historico" element={<TelaHistorico />} />
                    </Routes>
                </BrowserRouter> 
            </ContextUsuario.Provider>
        </ContextToken.Provider>
    );
}

export default App;