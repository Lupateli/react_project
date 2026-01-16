import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
// Importe outras páginas conforme for criando

export default function App() {
  return (
      <Routes>
        {/* Rota principal que carrega sua vitrine de livros */}
        <Route path="/" element={<Home />} />
        
        {/* Rota que você configurou no href do link de Login */}
        <Route path="/Login" element={<Login />} />
        
        {/* Rota de "Página não encontrada" (opcional) */}
        <Route path="*" element={<h1 className="text-center mt-10">404 - Page Not Found</h1>} />
      </Routes>
  );
}