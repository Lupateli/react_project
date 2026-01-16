import React from 'react';

export default function Input({ label, type = "text", placeholder, id, ...props }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {/* Label acessível: clicando no texto, o input ganha foco */}
      <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-200 ml-1">
        {label}
      </label>
      
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...props}
        className="w-full p-3 rounded-lg bg-white border border-gray-300 outline-none 
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                   transition-all duration-200 placeholder:text-gray-400 text-gray-900"
      />
    </div>
  );
}