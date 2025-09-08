import React from "react";



export default function Navbar() {
  return <>
    <nav className="flex justify-content: flex-start gap-4 bg-gray-600 p-4 text-white">
        <button>Acecibilidade</button>
      <ul className="flex justify-content: flex-start gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </>;
}