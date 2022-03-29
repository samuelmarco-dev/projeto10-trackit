import Header from "./Header";
import TelaInicial from "./TelaInicial";
import TelaCadastro from "./TelaCadastro";
import TelaHabitos from "./TelaHabitos";


import "./../assets/css/reset.css";

function App() {
    return (
        <>
            <Header />
            <TelaInicial />
            <TelaCadastro /> 
            <TelaHabitos />
        </> 
    );
}

export default App;