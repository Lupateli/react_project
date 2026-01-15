import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [acessiOpen, setAcessiOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('high-contrast');
  };

  const resetAccessibility = () => {
  setHighContrast(false);
  document.body.classList.remove('high-contrast');
  document.documentElement.style.fontSize = '100%'; // Volta ao padrão (16px)
};

  return (
    <>
      <nav className="bg-gray-600 text-white px-4 py-5 flex justify-between items-center relative">
        <div className="flex items-center gap-4">
          {/* Botão de Acessibilidade */}
          <div className="relative">
            <button 
              onClick={() => setAcessiOpen(!acessiOpen)}
              className="p-2 rounded-full hover:bg-slate-700 transition-colors flex items-center justify-center border border-white/20"
              aria-label="Opções de acessibilidade"
              aria-expanded={acessiOpen}
            >
              {/* Ícone de Acessibilidade Manual */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="1"/><path d="m9 20 3-6 3 6"/><path d="m6 8 6 2 6-2"/><path d="M12 10v4"/></svg>
            </button>

            {/* Menu de Acessibilidade Dropdown */}
            {acessiOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-2xl p-4 z-[100] border border-gray-200">
                <h3 className="font-bold mb-2 border-b pb-1 text-sm uppercase">Acessibilidade</h3>
                <button 
                  onClick={toggleContrast}
                  className="w-full text-left p-2 hover:bg-gray-100 rounded text-sm mb-1"
                >
                  {highContrast ? '✕ Desativar Contraste' : '◐ Alto Contraste'}
                </button>
                <button 
                  onClick={() => {
                    const currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
                    document.documentElement.style.fontSize = (currentSize + 2) + "px";
                  }}
                  className="w-full text-left p-2 hover:bg-gray-100 rounded text-sm"
                >
                  A+ Aumentar Fonte
                </button>
                <button 
                  onClick={() => {
                    const currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
                    document.documentElement.style.fontSize = (currentSize - 2) + "px";
                  }}
                  className="w-full text-left p-2 hover:bg-gray-100 rounded text-sm"
                >
                  A- Diminuir Fonte
                </button>
                <button 
                  onClick={resetAccessibility}
                  className="w-full text-left p-2 hover:bg-gray-100 rounded text-sm mt-1 font-bold text-red-600"
                >
                  ↺ Restaurar Padrões
                </button>
              </div>
            )}
          </div>

          <a href="/" className="text-2xl font-semibold">
            Book store
          </a>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 text-2xl">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        {/* Botão Mobile */}
        <button className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open Menu">
          <span className="text-2xl">☰</span>
        </button>
      </nav>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-800 text-white z-[100] flex flex-col">
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
            <span className="text-lg font-semibold">Menu</span>
            <button onClick={() => setMenuOpen(false)} className="text-3xl" aria-label="Close Menu">✕</button>
          </div>   
          <ul className="flex flex-col items-center justify-center flex-1 gap-8 text-xl">
            <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="/about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </>
  );
}