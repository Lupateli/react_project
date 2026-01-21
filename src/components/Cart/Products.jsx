export default function Products() {
    return (
        <>
            {/* Item do Carrinho - Repita este bloco para cada livro */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
              <img src="capa-livro.jpg" alt="Livro" className="w-20 h-28 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-bold text-lg">Harry Potter e a Pedra Filosofal</h3>
                <p className="text-gray-500 text-sm">Capa Dura</p>
                <p className="font-semibold mt-2">R$ 59,90</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-2 py-1 border rounded">-</button>
                <span>1</span>
                <button className="px-2 py-1 border rounded">+</button>
              </div>
            </div>
        </>
    ); 
}