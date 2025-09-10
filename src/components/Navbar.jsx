import React from "react";

export default function Navbar() {
  return <>
    <nav className="flex justify-between bg-gray-600 p-4 text-white" style={{ gap: '2vw', listStyle: 'none' }}>
      <a href="/">Acecibilidade</a>
      <ul className="flex justify-content " style={{ gap: '2vw', listStyle: 'none' }}>
         <a href="/"><li>Home</li></a>
        <a href="/about"><li>About</li></a>
        <a href="/contact"><li>Contact</li></a>
      </ul>
    </nav>
  </>;
}