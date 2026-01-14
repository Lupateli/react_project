import React from "react";
import Navbar from "../../components/Navbar";
import BooksGrid from "../../components/BooksGrid";
import Footer from "../../components/Footer";
import "./style.css";

export default function Home() {
  return <>
    <Navbar/>
    <main className="max-w-7xl mx-auto px-4 py-8">
      
      <BooksGrid />
    </main>
    <Footer/>
    </>;
}