import React from "react";
// import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);


  return <>
    <nav className="bg-gray-600 text-white px-4 py-3 flex justify-between items-center">
        <a href="/" className="text-lg font-semibold">
          Acessibilit
        </a>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        {/* Botão Mobile / Hamburger */}
        <button className="md:hidden"
        onClick={()=> setMenuOpen (!menuOpen)}
        aria-label="Open Menu">
           ☰
        </button>
    </nav>

        {/* Menu Mobile */}
        {menuOpen && (
          <div className="fixed inset-0 bg-gray-800 text-white z-50 flex flex-col">
            {/*Header do menu*/}
            <div className="flex justify-between items-center px-4 py-3">
              <span className="text-lg font-semibold">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-3xl"
                aria-label="Close Menu"
              >
                ✕
              </button>
          </div>   
           
        {/* Links do menu */}
          <ul className="flex flex-col items-center justify-center flex-1 gap-8 text-xl">
            <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="/about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
      </div>
    )}
    </>;
}