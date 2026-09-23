import Image from "next/image";
import { Product } from "@/types/types";

const products: Product[] = [
    { id: 1, name: "Mesa de Jantar Carvalho Maciço", imageUrl: "/produtos/mesa-carvalho.jpg" },
  { id: 2, name: "Cadeira Serena em Nogueira", imageUrl: "/produtos/cadeira-serena.jpg" },
  { id: 3, name: "Aparador Ripado Cumaru", imageUrl: "/produtos/aparador-cumaru.jpg" },
  { id: 4, name: "Poltrona Lótus Freijó", imageUrl: "/produtos/poltrona-lotus.jpg" },
]

export default function ProductsSection() {
    return (
        <section className="flex w-full min-h-150 border-y-2 border-blue-500/20">

      <div className="flex-1 bg-[#EAEAEA] py-16 px-8 flex flex-col items-center justify-center">
        
        <h2 className="font-playfair text-5xl md:text-6xl text-stone-900 tracking-[0.2em] mb-14">
          MÓVEIS
        </h2>
1
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative aspect-square border border-stone-300 bg-stone-200 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-6">
                <span className="text-white font-medium text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {product.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Barra Lateral Direita (Azul escuro com a seta) */}
      <button 
        aria-label="Ver mais móveis"
        className="w-20 md:w-32 bg-[#0A365C] hover:bg-[#07243e] transition-colors flex items-center justify-center shrink-0 group"
      >
        <span className="text-white text-2xl md:text-4xl font-light transform transition-transform group-hover:translate-x-2">
          &gt;
        </span>
      </button>
        </section>
    )
}