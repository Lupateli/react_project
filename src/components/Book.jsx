import ButtonCompra from "./ButtonCompra";
import { Link } from "react-router-dom";

export default function Book({ title, price, image, autor }) {
  return (
    <Link 
      to={`/books/${title.replace(/\s+/g, '-').toLowerCase()}`}
      className="w-full max-w-[300px] block transition-transform hover:scale-105" // O 'block' permite que ele ocupe a largura da célula
    >
      <div className="bg-white rounded-lg shadow-lg p-4 w-full flex flex-col items-center text-center">
        <div className="w-full h-[280px] mb-2 flex items-center justify-center bg-transparent">
          <img 
            src={image} 
            alt={title}
            className="max-w-full max-h-full object-contain" 
          />
        </div>
        <h2 className="text-xl text-gray-600">{title}</h2>
        {/* <p className="text-sm text-gray-600">{description}</p> DESCRIÇÃO APENAS NOS DESTALHES*/}
        <p className="font-semibold text-xl mt-1">R$ {price}</p>
        <p className="text-sm text-gray-500">{autor}</p>
        <div className="pt-4 w-full">
          <ButtonCompra />
        </div>
        
      </div>
    </Link>
  );
}
