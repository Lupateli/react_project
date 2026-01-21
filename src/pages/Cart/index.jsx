import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Products from "../../components/Cart/Products";
import Resume from "../../components/Cart/Resume";

export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="max-w-full mx-auto w-full p-4 md:p-8 flex-1">
        <h1 className="text-3xl font-bold mb-8">Seu Carrinho</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          <div className="lg:col-span-2">
            <Products />
          </div>

          <aside className="max-w-md">
            <Resume />
          </aside>

        </div>
      </main>

      <Footer />
    </div>
  );
}