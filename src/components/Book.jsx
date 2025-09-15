import React from "react";

export default function Book() {
  return (
  <main style={{ margin: '3vw 0.2vw' }}>
    <div className="flex flex-col items-center max-w-3xs bg-white aspect-square p-4 rounded-lg shadow-lg">
      <h1 className="text-lg font-bold text-center">Book 1</h1>
      <img className="w-40 h-50 rounded-lg" src="src/assets/images/book1.jpg" alt="Book 1" />
      <p className="text-sm">Very coll Book</p>
      <p>$ 255,99</p>
      <p>6 in 1</p>
    </div>
  </main>
  );
}