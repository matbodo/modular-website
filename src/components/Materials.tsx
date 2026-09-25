export default function MaterialsSection() {
  const woods = [
    { id: 1, name: "Madeira Escura", image: "/materiais/madeira-1.jpg" },
    { id: 2, name: "Madeira Média", image: "/materiais/madeira-2.jpg" },
    { id: 3, name: "Madeira Clara", image: "/materiais/madeira-3.jpg" },
  ];

  return (
    <section className="relative w-full min-h-150 bg-[#EAEAEA] flex flex-col lg:flex-row overflow-hidden">
      
      <div className="absolute top-0 right-0 w-full lg:w-[65%] h-[65%] bg-[#0A365C] z-0" />

      <div className="relative z-10 w-full lg:w-[35%] flex flex-col justify-center px-8 lg:pl-16 py-16 lg:py-0">
        <h2 className="font-playfair text-6xl md:text-7xl lg:text-8xl text-stone-900 tracking-wide leading-tight">
          Matéria-
          <br />
          prima
        </h2>
        <button className="mt-10 self-start border border-[#0A365C] text-[#0A365C] px-8 py-3 text-xs md:text-sm tracking-widest hover:bg-[#0A365C] hover:text-white transition-all uppercase">
          Show more
        </button>
      </div>

      <div className="relative z-10 w-full lg:w-[65%] flex justify-center lg:justify-start items-center gap-4 md:gap-8 px-8 lg:px-12 py-12 lg:py-20">
        {woods.map((wood) => (
          <div 
            key={wood.id}
            className="w-1/3 aspect-10/16 max-w-60 bg-cover bg-center shadow-xl transition-transform hover:-translate-y-3 duration-500 cursor-pointer bg-stone-400"
            style={{ backgroundImage: `url('${wood.image}')` }}
            title={wood.name}
          />
        ))}
      </div>

    </section>
  );
}