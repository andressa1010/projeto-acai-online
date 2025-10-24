
import {} from "react";
import { LogoTipo } from "../Styles/styled";
import logoImg from "../assets/Logo açaí moderno roxo e amarelo (1).png"


const Logo = () => {
    return (  
        <>
        <LogoTipo>
             <img src={logoImg} alt="imagem logo Açaí"/>
        </LogoTipo>
        </>
    );
}
 
export default Logo;