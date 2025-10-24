import {
  CarrinhoContainer,
  ProdutoCard,
  ImagemProduto,
  Informacoes,
  Nome,
  Preco,
  Quantidade,
  Acoes,
  Botao,
  BotaoRemover,
  Total,
  BotoesFinais,
  BotaoWhatsApp,
  BotaoVoltar,
} from "../Styles/styled";
import { useCarrinho } from "../Context/CarrinhoContext"
import { useNavigate } from "react-router-dom";

const Carrinho = () => {
  const {
    carrinho,
    removerDoCarrinho,
    alterarQuantidade,
    valorTotal,
  } = useCarrinho();

    const navigate = useNavigate();

  const finalizarCompra = () => {
    const mensagem = encodeURIComponent(
      `Olá! Gostaria de finalizar minha compra. O total deu R$ ${valorTotal.toFixed(2)}.`
    );
    const numero = "5511986414262"; // DDI 55 + número
    window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
  };

  return (
    <CarrinhoContainer>
      <h1>Seu Carrinho</h1>

      {carrinho.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        carrinho.map((item) => (
          <ProdutoCard key={item.id}>
            <ImagemProduto src={item.imagem} alt={item.nome} />
            <Informacoes>
              <Nome>{item.nome}</Nome>
              <Preco>R$ {item.preco.toFixed(2)}</Preco>
              <Quantidade>Quantidade: {item.quantidade}</Quantidade>
            </Informacoes>
            <Acoes>
              <Botao onClick={() => alterarQuantidade(item.id, "aumentar")}>+</Botao>
              <Botao onClick={() => alterarQuantidade(item.id, "diminuir")}>-</Botao>
              <BotaoRemover onClick={() => removerDoCarrinho(item.id)}>
                Remover
              </BotaoRemover>
            </Acoes>
          </ProdutoCard>
        ))
      )}

      <Total>Total: R$ {valorTotal.toFixed(2)}</Total>
          
      {carrinho.length > 0 && (
        <BotoesFinais>
          <BotaoWhatsApp onClick={finalizarCompra}>
            Finalizar Compra via WhatsApp
          </BotaoWhatsApp>
          <BotaoVoltar
       onClick={() => navigate("/")}>
            Voltar para Home
          </BotaoVoltar>
        </BotoesFinais>
      )}
    </CarrinhoContainer>


  );
};

export default Carrinho;
