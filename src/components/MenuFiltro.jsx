export default function MenuFiltro() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-sm">
      <h3 className="text-lg font-semibold mb-4">Filtrar Livros</h3>
      <form className="flex flex-col gap-4">
        <div>
          <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
          <select id="categoria" className="w-full p-2 border border-gray-300 rounded-md">
            <option value="">Todas</option>
            <option value="ficcao">Ficção</option>
            <option value="narrativa">Narrativa</option>
            <option value="poesia">Poesia</option>
          </select>
        </div>
        <div>
          <label htmlFor="ano" className="block text-sm font-medium text-gray-700 mb-1">Ano de Publicação</label>
          <input type="number" id="ano" placeholder="Ex: 2020" className="w-full p-2 border border-gray-300 rounded-md"/>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
          Aplicar Filtros
        </button>
      </form>
    </div>
  )
}