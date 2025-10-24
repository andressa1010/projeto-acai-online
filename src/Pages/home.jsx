import {} from "react";
import Logo from "../Components/logo";
import { ContainerProdutos, Header } from "../Styles/styled";
import { useCarrinho } from "../Context/CarrinhoContext";
import { Link } from "react-router-dom";
import DepoimentosPage from "./DepoimentosPage";
import BotaoWhatsapp from "../Components/BotaoWhatsapp";



const produtosDisponivel =[
    {
    id: 1, 
     nome: "Açaí Tradicional",
    imagem:"/acai00.jpg",
    avaliacoes:"/estrelinhas-avaliacao.png",
    preco: 14.99,
    descricao: "Açaí puro batido com banana e guaraná, acompanhado de leite condensado."
   },
    {
    id: 2,
    nome: "Açaí com Morango",
    imagem: "/acai01.jpg",
    avaliacoes:"/estrelinhas-avaliacao.png",
    preco: 20.99,
    descricao: "Açaí cremoso com pedaços de morango fresco e cobertura de leite ninho."
  },
  {
    id: 3,
    nome: "Açaí com Leite Ninho",
    imagem: "/acai08.jpg",
    avaliacoes:"/estrelinhas-avaliacao.png",
    preco: 24.99,
    descricao: "Delicioso açaí coberto com leite ninho e raspas de chocolate branco."
  },
  {
    id: 4,
    nome: "Açaí com Paçoca",
    imagem: "/acai15.jpg",
    avaliacoes:"/estrelinhas-avaliacao.png",
    preco: 15.99,
    descricao: "Açaí com paçoca triturada e calda de chocolate, kiwi"
  },
  {
    id: 5,
    nome: "Açaí Tropical",
    imagem: "/acai10.jpg",
    avaliacoes:"/estrelinhas-avaliacao.png",
    preco: 19.99,
    descricao: "Açaí com pedaços de kiwi, manga e morango, cobertura de chocolate e coco ralado."
  },
  {
    id: 6,
    nome: "Açaí Power",
    imagem: "/acai15.jpg",
    avaliacoes:"/estrelinhas-avaliacao.png",
    preco: 23.99,
    descricao: "Açaí reforçado com whey protein de baunilha, banana e pasta de amendoim natural."
  },
  {
    id: 7,
    nome: "Açaí Whey",
    imagem: "/acai13.jpg",
    avaliacoes:"/estrelinhas-avaliacao.png",
    preco: 23.99,
    descricao: "Açaí reforçado com whey protein de baunilha, banana e pasta de amendoim natural."
  },
  {
    id: 8,
    nome: "Açaí Power",
    imagem: "/acai16.jpg",
    avaliacoes:"/estrelinhas-avaliacao.png",
    preco: 23.99,
    descricao: "Açaí reforçado com whey protein de baunilha, banana e pasta de amendoim natural."
  }

]



const Home = () => {
    const {adicionarAoCarrinho} = useCarrinho()
    return (  
        <>
      <Header>
         <Link to="/carrinho">
          <button className="ver-carrinho">🛒Carrinho</button>
        </Link>
      </Header>
        <Logo/>
        <ContainerProdutos>
            {
                produtosDisponivel.map((produto)=>(
                  <div key={produto.id} className="produtos">
                      <h2> {produto.nome}  </h2>
                      <img src={produto.imagem} alt={produto.nome}/>
                      <img src={produto.avaliacoes} alt={produto.nome} className="avaliacoes"/>
                      <p> {produto.preco}  </p>
                      <p> {produto.descricao}  </p>
                      <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao Carrinho</button>
                  </div>
                ))
            }
        </ContainerProdutos>
        <DepoimentosPage/>
        <BotaoWhatsapp/>
        </>
    );
}
 
export default Home;