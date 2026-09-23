export default function ProjectsSection() {
  return (
    <section className="relative w-full min-h-175 bg-[#EAEAEA] py-16 flex flex-col overflow-hidden">
      
      <div className="absolute top-0 right-0 w-20 md:w-32 h-32 md:h-48 bg-[#0A365C]" />

      <div className="w-full max-w-7xl mx-auto px-8 relative z-10">
        <h2 className="font-playfair text-5xl md:text-6xl text-stone-900 tracking-[0.2em] mb-12">
          PROJETOS
        </h2>
      </div>

      <div className="relative w-full mt-4 flex items-center min-w-[40%] min-h-125">
        
        <div className="absolute right-0 top-0 w-full lg:w-[75%] h-full">
          {/* Para o futuro: Substitua a div abaixo pelo componente <Image /> do Next.js */}
          <div 
            className="w-full h-full bg-cover bg-center shadow-lg bg-stone-300"
            style={{ backgroundImage: "url('/projetos/projeto-destaque.jpg')" }}
          />
        </div>

        <div className="relative z-10 w-full lg:w-[45%] bg-[#0A365C] text-white p-8 md:p-14 lg:p-16 flex items-center justify-between lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2">
          
          <button aria-label="Projeto anterior" className="text-2xl md:text-3xl text-white/70 hover:text-white transition-colors">
            &lt;
          </button>

          <div className="flex flex-col flex-1 px-6 md:px-12">
            <h3 className="font-playfair text-3xl md:text-5xl mb-8 font-normal tracking-wide">
              Lorem ipsum
            </h3>
            <button className="self-start border border-white/70 px-6 py-2 text-xs md:text-sm tracking-widest text-white/90 hover:bg-white hover:text-white transition-all uppercase">
              Show more
            </button>
          </div>

          <button aria-label="Próximo projeto" className="text-2xl md:text-3xl text-white/70 hover:text-white transition-colors">
            &gt;
          </button>

        </div>
      </div>
    </section>
  );
}