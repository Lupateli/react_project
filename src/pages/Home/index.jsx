import React from "react";
import Navbar from "../../components/Navbar";
import BooksGrid from "../../components/BooksGrid";
import Footer from "../../components/Footer";
import "./style.css";
import MenuFiltro from "../../components/MenuFiltro";
import Main from "../../components/Main";

export default function Home() {
  return <>
  <div className="min-h-screen flex flex-col">
      <Navbar/>

      <main className="flex-1">
        <Main/>
        <div className="flex flex-row gap-6 max-w-7x1 mx-auto px-4 py-8flex mx-auto px-4 py-8">
          <MenuFiltro />
          <div className="flex-1"> {/* Envolva o BooksGrid em uma div que cresce */}
            <BooksGrid />
          </div>
        </div>
      </main>

      <Footer/>
  </div>
    </>;
}