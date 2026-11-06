"use client";

import { useState } from "react";

export default function EnvironmentsSection() {
  const ambientes = [
    { id: "01", name: "Cozinha", image: "/kitchen-section.png" },
    { id: "02", name: "Dormitório", image: "/bedroom-section.png" },
    { id: "03", name: "Living", image: "/living-section.png" },
    { id: "04", name: "Outros", image: "/staircase-section.png" },
  ];

  // 1. Mudamos o estado para controlar o ID ativo
  const [activeId, setActiveId] = useState(ambientes[0].id);

  return (
    <section className="relative w-full min-h-175 overflow-hidden bg-[#EAEAEA]">
      
      {/* Fundo Azul */}
      <div className="absolute top-0 bottom-0 left-0 w-[35%] bg-[#0A365C] z-0" />

      {/* Conteúdo Principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start py-24 md:py-32 px-8">

        {/* Coluna Esquerda: Imagem */}
        <div className="w-full md:w-1/2 relative h-full">
          <div className="sticky top-32 flex justify-center md:justify-start">
            
            {/* 
              NOVO: Contentor pai (wrapper). Ele herda os seus tamanhos originais 
              (w-[85%] max-w-100 aspect-3/4) para garantir que o sticky e a estrutura não quebrem. 
            */}
            <div className="relative z-10 w-[85%] max-w-100 aspect-3/4">
              
              {/* Moldura Branca: Recuada para -top-10 e -left-10 para envolver toda a pilha de cartas */}
              
              
              {/* 2. Mapeamento das imagens empilhadas */}
              {ambientes.map((ambiente, index) => {
                const isActive = activeId === ambiente.id;
                const activeIndex = ambientes.findIndex(a => a.id === activeId);
                
                // Calcula a posição na pilha (1, 2 ou 3) para as imagens que não estão ativas
                let offset = 0;
                if (!isActive) {
                  offset = index < activeIndex ? index + 1 : index;
                }

                return (
                  <div 
                    key={ambiente.id}
                    className={`absolute top-0 left-0 w-full h-full bg-cover bg-center shadow-lg transition-all duration-500 ease-in-out
                      ${isActive ? "z-20 opacity-100" : "z-10 opacity-70 brightness-50"}
                    `}
                    style={{ 
                      backgroundImage: `url('${ambiente.image}')`,
                      // Aplica o deslocamento na diagonal para cima/esquerda nas imagens inativas
                      transform: isActive 
                        ? "translate(0px, 0px)" 
                        : `translate(-${offset * 12}px, -${offset * 12}px)`
                    }}
                  />
                );
              })}
            </div>

          </div>
        </div>

        {/* Coluna Direita: Textos */}
        <div className="w-full md:w-1/2 mt-24 md:mt-0 md:pl-16 flex flex-col space-y-24 pb-32">
          {ambientes.map((ambiente) => (
            <div 
              key={ambiente.id} 
              className="flex items-baseline space-x-4 cursor-pointer group w-fit"
              // 3. Atualiza o estado com o ID correto
              onMouseEnter={() => setActiveId(ambiente.id)}
            >
              <span className="text-stone-400 text-sm md:text-base font-light group-hover:text-[#0A365C] transition-colors">
                {ambiente.id}/
              </span>
              <h3 className="relative font-playfair text-5xl md:text-6xl text-stone-900 group-hover:text-[#0A365C] tracking-wide 
                transform origin-left transition-all duration-300 group-hover:scale-105
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.75 after:bg-[#0A365C] after:transition-all after:duration-300 after:ease-out group-hover:after:w-full"
              >
                {ambiente.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}