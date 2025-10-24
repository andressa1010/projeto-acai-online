import {} from "react";
import styled from "styled-components";

const Secao = styled.section`
  width: 100%;
  padding: 64px 20px;
  
`;

const Conteudo = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Titulo = styled.h2`
  font-size: 40px;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 12px;
   font-family: "Great Vibes", cursive;
    font-weight: 400;
    font-style: normal;
  color: #64183F;
`;

const Subtitulo = styled.p`
  text-align: center;
  color:  #64183F;
  margin-bottom: 32px;
`;

const Grade = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const Card = styled.article`
  background: #ffffff;
  border: 1px solid #eee7ff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 6px 24px rgba(42, 35, 68, 0.06);
  display: grid;
  grid-template-rows: auto auto 1fr;
  transition: transform .2s ease, box-shadow .2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(42, 35, 68, 0.10);
  }
`;

const Topo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #efe9ff;
  color: #3b2d7a;
  display: grid;
  place-items: center;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

const Nome = styled.h3`
  font-size: 1rem;
  margin: 0;
  color: #2a2344;
`;

const Estrelas = styled.img`
  margin: 8px 0 12px;
  width: 120px; 
  height: auto;
`;

const Comentario = styled.p`
  color: #4b4568;
  line-height: 1.6;
`;

const Rodape = styled.div`
  margin-top: 16px;
  font-size: 0.875rem;
  color: #8a84a6;
`;

export default function Depoimentos({
  clientes,
  starSrc,
  titulo = "O que nossos clientes dizem",
  subtitulo = "Avaliações reais de quem já escolheu nosso açaí"
}) {
  const iniciais = (nome) =>
    nome
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0].toUpperCase())
      .join("");

  return (
    <Secao>
      <Conteudo>
        <Titulo>{titulo}</Titulo>
        {subtitulo && <Subtitulo>{subtitulo}</Subtitulo>}
        <Grade>
          {clientes.map((cli, i) => (
            <Card key={i}>
              <Topo>
                <Avatar>{iniciais(cli.nome)}</Avatar>
                <div>
                  <Nome>{cli.nome}</Nome>
                  {cli.data && <Rodape>{cli.data}</Rodape>}
                </div>
              </Topo>
              {starSrc && <Estrelas src={starSrc} alt="Avaliação" />}
              <Comentario>“{cli.comentario}”</Comentario>
            </Card>
          ))}
        </Grade>
      </Conteudo>
    </Secao>
  );
}
