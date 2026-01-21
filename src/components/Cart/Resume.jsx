export default function Resume() {
    return (<>
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
        </>
    );
}