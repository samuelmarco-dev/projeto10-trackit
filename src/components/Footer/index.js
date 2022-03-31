import { Link } from "react-router-dom";

import Paragrafo from "../utils/Paragrafo";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Footer(props) {
    const { texto, progresso } = props;

    return (  
        <footer>
            <Link to="/habitos">
                <Paragrafo conteudo='Hábitos' />
            </Link>
            <Link to="/hoje">
                <div>
                    <CircularProgressbar className='progressbar'
                        value={progresso}
                        text={texto}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                        backgroundColor: "rgba(82, 182, 255, 1)",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })} />
                </div>
            </Link>
            <Link to="/historico">
                <Paragrafo conteudo='Histórico' />
            </Link>
        </footer>
    );
}

export default Footer;