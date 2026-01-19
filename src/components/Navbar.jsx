import React, { useState } from "react";
import { Link } from "react-router-dom";


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
      <nav className="bg-gray-600 text-white px-4 py-5 flex relative">
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
         </div> 
         <div className="flex justify-around gap-4 flex-1 items-center"> 
          {/* Logo */}
              <a href="/" className="text-3xl font-semibold">
                Book store
              </a>
              <div className="flex-1 max-w-md mx-4 hidden sm:block">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  </span>
                  <input
                    type="search"
                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Pesquisar livros..."
                    aria-label="Pesquisar livros no catálogo"
                  />
                </div>
              </div>
        

            {/* Menu Desktop */}
            <ul className="hidden md:flex gap-8 text-2xl">
              <li><Link 
                    to="/" 
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-700 transition-colors group"
                    aria-label="Initial page"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="block"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span className="text-lg font-medium">Home</span>
                  </Link></li>
              <li><Link 
                    to="/Login" 
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-700 transition-colors group"
                    aria-label="Login page"
                  >
                    {/* Ícone de Usuário */}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    
                    {/* Texto ao lado do ícone */}
                    <span className="text-lg font-medium">Login</span>
                  </Link></li>
              <li><Link 
                    to="/Cart" 
                    className="flex items-center rounded-md hover:bg-slate-800 transition-colors group"
                    aria-label="Shopping cart">
                  <button className="p-2 rounded-2xl transition-colors relative">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"   
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>

                   <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center -mt-1 -mr-1">
                    3 
                  </span> 
                </button></Link></li>
            </ul>
          </div>  

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
          
          {/* Barra de Pesquisa no Mobile */}
          <div className="relative m-3">
            <input
              type="search"
              className="w-full p-3 pl-10 rounded-lg bg-gray-700 text-white border border-gray-600 outline-none focus:border-blue-400"
              placeholder="What do you search?"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </span>
          </div>
          <ul className="flex flex-col p-4 flex-1 gap-8 text-3xl">
            <li className="border-b border-white/20"><a href="/profile" onClick={() => setMenuOpen(false)}>Profile</a></li>
            <li className="border-b border-white/20"><a href="/about" onClick={() => setMenuOpen(false)}>Login</a></li>
            <li className="border-b border-white/20"><a href="/contact" onClick={() => setMenuOpen(false)}>Cart</a></li>
          </ul>
        </div>
      )}
    </>
  );
}