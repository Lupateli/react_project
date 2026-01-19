import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
// Importe outras páginas conforme for criando

export default function App() {
  return (
      <Routes>
        {/* Rota principal que carrega sua vitrine de livros */}
        <Route path="/" element={<Home />} />
        
        {/* Rota no href do link de Login */}
        <Route path="/Login" element={<Login />} />

        {/* Rota no href do link de Signup */}
        <Route path="/Signup" element={<Signup />} />
        
        {/* Rota no href do link de Cart */}
        <Route path="/Cart" element={<Cart />} />

        {/* Rota de "Página não encontrada" (opcional) */}
        <Route path="*" element={<h1 className="text-center mt-10">404 - Page Not Found</h1>} />
      </Routes>
  );
}