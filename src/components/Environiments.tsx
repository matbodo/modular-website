export default function EnvironmentsSection() {
  const ambientes = [
    { id: "01", name: "Cozinha" },
    { id: "02", name: "Dormitório" },
    { id: "03", name: "Living" },
    { id: "04", name: "Outros" },
  ];

  return (
    // 1. Removido o "flex" da section e definido o fundo cinzento diretamente aqui
    <section className="relative w-full min-h-175 overflow-hidden bg-[#EAEAEA]">
      
      {/* 2. Bloco Azul Absoluto: Agora trava perfeitamente na margem esquerda */}
      <div className="absolute inset-y-0 left-0 w-full md:w-[30%] lg:w-[35%] bg-[#0A365C] z-0" />

      {/* Conteúdo Principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center py-24 px-8">

        {/* Lado da Imagem */}
        <div className="w-full md:w-1/2 relative h-full">
          
          {/* 3. A NOVA DIV STICKY: É ela que trava a imagem a 8rem do topo */}
          <div className="flex justify-center md:justify-start">
            
            {/* Moldura Branca (Offset) */}
            <div className="absolute -top-4 -left-4 w-[85%] max-w-100 aspect-3/4 bg-white z-0 shadow-sm" />
            
            {/* Imagem Principal */}
            <div 
              className="relative z-10 w-[85%] max-w-100 aspect-3/4 bg-cover bg-center shadow-lg bg-stone-300"
              style={{ backgroundImage: "url('/kitchen-section.png')" }}
            />
          </div>

        </div>

        {/* Lado da Lista de Ambientes */}
        <div className="w-full md:w-1/2 mt-20 md:mt-0 md:pl-16 flex flex-col space-y-10">
          {ambientes.map((ambiente) => (
            <div 
              key={ambiente.id} 
              className="flex items-baseline space-x-4 cursor-pointer group"
            >
              <span className="text-stone-400 text-sm md:text-base font-light group-hover:text-[#0A365C] transition-colors">
                {ambiente.id}/
              </span>
              <h3 className="font-playfair text-5xl md:text-6xl text-stone-900 group-hover:text-[#0A365C] transition-colors tracking-wide">
                {ambiente.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}