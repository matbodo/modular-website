import Navbar from "./Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center flex flex-col items-center space-y-4">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white font-normal tracking-wide">
            Lorem ipsum
            <br />
            dolor sit amet
          </h1>
        </div>

      </section>
    </main>
  );
}