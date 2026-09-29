export default function HistorySection() {
  // Aumentado para 7 itens para replicar exatamente os 7 nós do seu design
  const timeline = [
    { id: 1, year: "1998", title: "Fundação" },
    { id: 2, year: "2002", title: "Expansão" },
    { id: 3, year: "2008", title: "Nova Fábrica" },
    { id: 4, year: "2012", title: "Showroom" },
    { id: 5, year: "2015", title: "Indusparquet" },
    { id: 6, year: "2020", title: "Prémio" },
    { id: 7, year: "2026", title: "Atualidade" },
  ];

  return (
    <section className="relative w-full bg-[#EAEAEA] py-24 flex flex-col overflow-hidden">
      
      <div className="w-full max-w-7xl mx-auto px-8 mb-24 text-center">
        <h2 className="font-playfair text-5xl md:text-6xl text-stone-900 tracking-widest">
          Nossa história
        </h2>
      </div>

      <div className="relative w-full max-w-6xl mx-auto h-64 flex items-center">
        
        {/* Linha Horizontal Central: Vai de ponta a ponta do contentor */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-[#0A365C]" />

        {/* Contentor dos Nós: Tem padding (px-8 md:px-16) para recuar os nós em relação às pontas da linha horizontal */}
        <div className="relative z-10 w-full flex justify-between items-center h-full px-8 md:px-16">
          {timeline.map((node, index) => {
            const isTop = index % 2 === 0;

            return (
              <div key={node.id} className="relative flex flex-col items-center w-0 group cursor-pointer">
                
                {isTop ? (
                  /* Nó para CIMA */
                  <div className="absolute bottom-1/2 flex flex-col items-center">
                    
                    <div className="absolute bottom-full mb-4 w-32 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2">
                      <span className="block font-playfair text-2xl text-[#0A365C] mb-1">{node.year}</span>
                      <span className="block text-xs text-stone-600 uppercase tracking-widest">{node.title}</span>
                    </div>

                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#0A365C]" />
                    <div className="w-px h-16 md:h-24 bg-[#0A365C]" />
                  </div>
                ) : (
                  /* Nó para BAIXO */
                  <div className="absolute top-1/2 flex flex-col items-center">
                    
                    <div className="w-px h-16 md:h-24 bg-[#0A365C]" />
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#0A365C]" />
                    
                    <div className="absolute top-full mt-4 w-32 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-2">
                      <span className="block font-playfair text-2xl text-[#0A365C] mb-1">{node.year}</span>
                      <span className="block text-xs text-stone-600 uppercase tracking-widest">{node.title}</span>
                    </div>

                  </div>
                )}
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}