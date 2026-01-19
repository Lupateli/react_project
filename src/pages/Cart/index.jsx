import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Cart() {
  return (<>
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-full mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-8">Seu Carrinho</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LISTA DE PRODUTOS (2 colunas no desktop) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
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
          </div>

          {/* RESUMO DO PEDIDO (1 coluna no desktop) */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-fit">
            <h2 className="text-xl font-bold mb-4">Resumo</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>R$ 59,90</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Frete</span>
              <span className="text-green-600 font-medium">Grátis</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-lg font-bold mb-6">
              <span>Total</span>
              <span>R$ 59,90</span>
            </div>
            
            {/* Reutilizando seu estilo de botão de compra */}
            <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors">
              Finalizar Compra
            </button>
          </div>

        </div>
      </main>

    </div>
     <Footer />
    </>
  );
}