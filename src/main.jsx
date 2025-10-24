import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyled } from "./Global/globalStyled.js";
import App from "./App.jsx";
import { CarrinhoProvider } from "./Context/CarrinhoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CarrinhoProvider>
      <GlobalStyled />
      <App />
    </CarrinhoProvider>
  </StrictMode>
);
