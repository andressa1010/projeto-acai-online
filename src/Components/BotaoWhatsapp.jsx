import {} from "react";

import { FaWhatsapp } from "react-icons/fa";
import { IconeWhatsapp } from "../Styles/styled";

const BotaoWhatsapp = () => {
  const numero = "5511986414262"; 
  const mensagem = "Olá! Vim pelo site e gostaria de saber mais informações.";
  const linkWhatsapp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  const abrirWhatsapp = () => {
    window.open(linkWhatsapp, "_blank");
  };

  return (
    <IconeWhatsapp onClick={abrirWhatsapp} title="Fale conosco no WhatsApp">
      <FaWhatsapp />
    </IconeWhatsapp>
  );
};

export default BotaoWhatsapp;
