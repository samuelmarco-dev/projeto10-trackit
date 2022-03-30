import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import TelaInicial from "./TelaInicial";
import TelaCadastro from "./TelaCadastro";
import TelaHabitos from "./TelaHabitos";
import TelaHistorico from "./TelaHistorico";
import HabitosHoje from "./TelaHoje";


import "./../assets/css/reset.css";

function App() {
    return (
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
    );
}

export default App;