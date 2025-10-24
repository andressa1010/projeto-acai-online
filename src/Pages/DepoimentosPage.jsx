import {}from "react";
import Depoimentos from "../Components/Depoimentos.jsx";
import imgEstrelinhas from "../assets/estrelinhas-avaliacao.png"
import Localizacao from "../Components/Localizacao.jsx";

export default function DepoimentosPage() {
    const clientes = [
  {
    nome: "Juliana Lima",
    comentario: "O melhor açaí que já provei! Cremoso, geladinho na medida certa e com muitas opções de acompanhamentos.",
    data: "Out 2025",
  },
  {
    nome: "Pedro Henrique",
    comentario: "Atendimento excelente e entrega super rápida. O açaí chegou perfeito, sem derreter!",
    data: "Set 2025",
  },
  {
    nome: "Camila Santos",
    comentario: "Pedi com granola e leite condensado, simplesmente maravilhoso! Virou meu lanche favorito.",
    data: "Ago 2025",
  },
  {
    nome: "Rafael Oliveira",
    comentario: "Sabor autêntico e muito bem preparado. Dá pra sentir que é feito com ingredientes de qualidade.",
    data: "Jul 2025",
  },
  {
    nome: "Larissa Costa",
    comentario: "O copo de 500ml vem super bem servido! E o atendimento é sempre muito simpático.",
    data: "Jun 2025",
  },
   {
    nome: "Bia Nunes",
    comentario: "O copo de 500ml vem super bem servido! E o atendimento é sempre muito simpático.",
    data: "Out 2025",
  },
];

  return (
    <>
    <Depoimentos
      clientes={clientes}
      starSrc={imgEstrelinhas}
      titulo="O que nossos clientes dizem sobre a loja"
      subtitulo=" qualidade e atendimento que encantam"
    />
    <Localizacao/>
    </>
  );
}
