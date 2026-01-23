import React from "react";
import Navbar from "../../components/Navbar";
import BooksGrid from "../../components/BooksGrid";
import Footer from "../../components/Footer";
import "./style.css";
import MenuFiltro from "../../components/MenuFiltro";
import Main from "../../components/Main";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className=" flex-1">
          {/* O componente Main (Banner) continua no topo */}
          <Main />

          {/* MUDANÇA CHAVE: 
            'flex-col' para mobile (um embaixo do outro)
            'md:flex-row' para desktop (lado a lado) 
          */}
          <div className="flex flex-col md:flex-row gap-6 max-w-8xl mx-auto px-4 py-8">
            
            {/* O Filtro ocupará a largura total no mobile e largura fixa no desktop */}
            <aside className="w-full md:w-64">
              <MenuFiltro />
            </aside>

            {/* O Grid de livros ocupará o espaço restante */}
            <div className="flex-1">
              <BooksGrid />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}