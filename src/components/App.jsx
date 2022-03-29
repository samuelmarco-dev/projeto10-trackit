import Header from "./Header";
import TelaInicial from "./TelaInicial";
import TelaCadastro from "./TelaCadastro";
import TelaHabitos from "./TelaHabitos";
import TelaHistorico from "./TelaHistorico";
import HabitosHoje from "./TelaHoje";


import "./../assets/css/reset.css";

function App() {
    return (
        <>
            <Header />
            <TelaInicial />
            <TelaCadastro /> 
            <TelaHabitos />
            <TelaHistorico />
            <HabitosHoje />
        </> 
    );
}

export default App;