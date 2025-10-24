import styled from "styled-components";


export const LogoTipo = styled.div`
display: flex;
justify-content: center;

`


export const ContainerProdutos = styled.div`
 display: flex;
 justify-content: space-between;
 flex-wrap: wrap;
 padding: 10px;


 .produtos{
    margin: 10px;
    padding: 10px;
    width: 300px;
    text-align: center;

 }

 img{
    max-width: 100%;
    height: auto;
    border-radius: 40px;
 }

 .avaliacoes{
    width: 100px;
 }


 button{
    margin: 10px;
    border-style: none;
    padding: 10px 12px;
    background-color: #64183f;
    color: #ffffff;
    border-radius: 12px;
 }

  @media (max-width: 432px){
     display: flex;
     justify-content: center;
  }

`


export const CarrinhoContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  
  border-radius: 10px;
  box-shadow: 0px 0px 10px #ccc;
`;

export const ProdutoCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;
  
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
`;

export const ImagemProduto = styled.img`
  width: 100px;
  height: auto;
  border-radius: 8px;
  object-fit: contain;
`;

export const Informacoes = styled.div`
  flex: 1;
`;

export const Nome = styled.h3`
  font-size: 18px;
  margin: 0 0 5px;
`;

export const Preco = styled.p`
  font-weight: bold;
  color: #2d8f60;
`;

export const Quantidade = styled.p`
  margin-top: 5px;
`;

export const Acoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const Botao = styled.button`
  background: #64183F;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #27e230ff;
  }
`;

export const Total = styled.h2`
  text-align: right;
  color: #333;
  margin-top: 30px;
`;

export const BotaoRemover = styled(Botao)`
  background: #e74c3c;

  &:hover {
    background: #c0392b;
  }
`;


export const Header = styled.header`
   display: flex;
   justify-content: end;

   .ver-carrinho{
     border-style: none;
     padding: 10px;
     font-size: 20px;
     background-color: #64183F;
     color: #ffffff;
     border-radius: 20px;
   }

`

export const BotoesFinais = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  gap: 15px;
`;

export const BotaoWhatsApp = styled.button`
  background-color: #25D366;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1ebe5a;
    transform: scale(1.05);
  }
`;

export const BotaoVoltar = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;


export const IconeWhatsapp = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  font-size: 2.5rem;
  border-radius: 50%;
  padding: 12px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 10px;
    bottom: 15px;
    right: 15px;
  }
`;