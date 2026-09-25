export default function HistorySection() {
  const timelineNodes = [
    { id: 1, year: "1998", title: "Fundação" },
    { id: 2, year: "2005", title: "Expansão" },
    { id: 3, year: "2010", title: "Nova Fábrica" },
    { id: 4, year: "2015", title: "Parceria Indusparquet" },
    { id: 5, year: "2019", title: "Prémio de Design" },
    { id: 6, year: "2023", title: "Loja Conceito" },
    { id: 7, year: "2026", title: "Futuro" },
  ];

  return (
    <section className="w-full bg-[#EAEAEA] py-24 flex flex-col items-center overflow-hidden">
      
      <h2 className="font-playfair text-5xl md:text-6xl text-stone-900 tracking-wide mb-32 md:mb-48">
        Nossa história
      </h2>

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-12 h-1 flex items-center">
        
        <div className="absolute left-4 right-4 sm:left-12 sm:right-12 h-px bg-[#0A365C]" />

        {/* Nós da Linha Temporal */}
        <div className="relative z-10 w-full flex justify-between items-center">
          {timelineNodes.map((node, index) => {
            // Alterna entre cima (índices pares) e baixo (índices ímpares)
            const isTop = index % 2 === 0;

            return (
              <div key={node.id} className="relative flex flex-col items-center group cursor-pointer">
                
                {isTop ? (
                  /* Nó a apontar para CIMA */
                  <div className="absolute bottom-0 flex flex-col items-center mb-0">
                    {/* Área de texto futuro (invisível até adicionar conteúdo) */}
                    <div className="absolute bottom-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-center">
                      <span className="block text-[#0A365C] font-bold">{node.year}</span>
                      <span className="block text-sm text-stone-600">{node.title}</span>
                    </div>
                    {/* Ponto superior */}
                    <div className="w-2 h-2 rounded-full bg-[#0A365C]" />
                    {/* Linha vertical */}
                    <div className="w-px h-16 sm:h-24 md:h-32 bg-[#0A365C]" />
                  </div>
                ) : (
                  /* Nó a apontar para BAIXO */
                  <div className="absolute top-0 flex flex-col items-center mt-0">
                    {/* Linha vertical */}
                    <div className="w-px h-16 sm:h-24 md:h-32 bg-[#0A365C]" />
                    {/* Ponto inferior */}
                    <div className="w-2 h-2 rounded-full bg-[#0A365C]" />
                    {/* Área de texto futuro (invisível até adicionar conteúdo) */}
                    <div className="absolute top-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-center">
                      <span className="block text-[#0A365C] font-bold">{node.year}</span>
                      <span className="block text-sm text-stone-600">{node.title}</span>
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