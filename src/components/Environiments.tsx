export default function EnvironmentsSection() {
  const ambientes = [
    { id: "01", name: "Cozinha" },
    { id: "02", name: "Dormitório" },
    { id: "03", name: "Living" },
    { id: "04", name: "Outros" },
  ];

  return (
    <section className="relative w-full min-h-175 flex overflow-hidden">
      
      <div className="absolute inset-y-0 left-0 w-[30%] bg-[#0A365C]" />
      <div className="absolute inset-y-0 right-0 w-[70%] bg-[#EAEAEA]" />

      {/* Conteúdo Principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center py-24 px-8">

        {/* Lado da Imagem (Sobrepondo a divisão de cores) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
          
          {/* Moldura Branca (Offset) */}
          <div className="absolute -top-4 -left-4 w-[85%] max-w-100 aspect-3/4 bg-white z-0 shadow-sm" />
          
          {/* Imagem Principal */}
          <div 
            className="relative z-10 w-[85%] max-w-100 aspect-3/4 bg-cover bg-center shadow-lg bg-stone-300"
            style={{ backgroundImage: "url('/ambientes/ambiente-destaque.jpg')" }}
          />
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