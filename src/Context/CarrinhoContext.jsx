import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export const useCarrinho = () => useContext(CarrinhoContext);

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((atual) => {
      const existe = atual.find((item) => item.id === produto.id);
      if (existe) {
        return atual.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...atual, { ...produto, quantidade: 1 }];
      }
    });
  };

  const removerDoCarrinho = (id) => {
    setCarrinho((atual) => atual.filter((item) => item.id !== id));
  };

  const alterarQuantidade = (id, operacao) => {
    setCarrinho((atual) =>
      atual.map((item) =>
        item.id === id
          ? {
              ...item,
              quantidade:
                operacao === "aumentar"
                  ? item.quantidade + 1
                  : item.quantidade > 1
                  ? item.quantidade - 1
                  : 1,
            }
          : item
      )
    );
  };

  const limparCarrinho = () => setCarrinho([]);

  const valorTotal = carrinho.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarAoCarrinho,
        removerDoCarrinho,
        alterarQuantidade,
        limparCarrinho,
        valorTotal,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
