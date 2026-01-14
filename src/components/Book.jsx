export default function Book({ title, description, price, image, info }) {
  return (
    <div className="
      bg-white rounded-lg shadow-lg
      p-4
      w-full max-w-[260px]
      flex flex-col items-center text-center
    ">
      <h2 className="font-bold mb-2">{title}</h2>

      <img
        src={image}
        alt={title}
        className="w-full max-w-[180px] object-contain mb-3"
      />

      <p className="text-sm text-gray-600">{description}</p>
      <p className="font-semibold mt-1">R$ {price}</p>
      <p className="text-xs text-gray-500">{info}</p>
    </div>
  );
}
