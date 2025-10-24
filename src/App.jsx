import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/home"
import Carrinho from "./Pages/carrinho"
import { CarrinhoProvider } from "./Context/CarrinhoContext"
import DepoimentosPage from "./Pages/DepoimentosPage"


function App() {
  

  return (
    <>
     <CarrinhoProvider>
              <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/carrinho" element={<Carrinho/>}/>
          <Route path="/depoimentos" element={<DepoimentosPage />} />
      </Routes>
      </BrowserRouter>
     </CarrinhoProvider>
    
    </>
  )
}

export default App
