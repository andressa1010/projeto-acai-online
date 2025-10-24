import {} from "react";
import styled from "styled-components";

const Secao = styled.section`
  width: 100%;
  padding: 64px 20px;
  
`;

const Conteudo = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

const Titulo = styled.h2`
  font-size: 40px;
  margin-bottom: 12px;
   font-family: "Great Vibes", cursive;
    font-weight: 400;
    font-style: normal;
  color: #64183f;
`;

const Subtitulo = styled.p`
  color: #64183f;
  margin-bottom: 32px;
`;

const MapaContainer = styled.div`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 6px 24px rgba(42, 35, 68, 0.06);
  max-width: 100%;
  height: 350px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export default function Localizacao() {
  return (
    <Secao>
      <Conteudo>
        <Titulo>Nossa Localização</Titulo>
        <Subtitulo>São Paulo, SP — Brasil</Subtitulo>
        <MapaContainer>
          <iframe
            title="Mapa São Paulo"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.210079983083!2d-46.65657162392753!3d-23.597233763928785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8b6d394ff%3A0x9f41dc97d4a2d3d7!2sS%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
          ></iframe>
        </MapaContainer>
      </Conteudo>
    </Secao>
  );
}
