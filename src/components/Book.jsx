import ButtonCompra from "./ButtonCompra";

export default function Book({ title, price, image, info }) {
  return (
    <div className="
      bg-white rounded-lg shadow-lg
      p-4
      w-full max-w-[300px]
      flex flex-col items-center text-center
    ">

      <img
        src={image}
        alt={title}
        className="w-full max-w-[180px] object-contain mb-3"    
      />
      <h2 className="text-xl text-gray-600">{title}</h2>
      {/* <p className="text-sm text-gray-600">{description}</p> DESCRIÇÃO APENAS NOS DESTALHES*/}
      <p className="font-semibold text-xl mt-1">R$ {price}</p>
      <p className="text-sm text-gray-500">{info}</p>
      <div className="pt-4 w-full">
        <ButtonCompra />
      </div>
      
    </div>
  );
}
