"use client"; // Necessário para executar hooks e animações no cliente

import { useRef } from "react";
import Navbar from "./Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".reveal-text",
      { 
        y: 60, 
        opacity: 0
      }, 
      {
        y: 0,
        opacity: 1, 
        duration: 1.5,
        stagger: 0.3,
        ease: "power4.out",
        delay: 0.2,
      }
    );
  }, { scope: containerRef });

  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section 
        ref={containerRef} 
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center flex flex-col items-center space-y-4">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white font-normal tracking-wide">
            <span className="block reveal-text opacity-0">Lorem ipsum</span>
            <span className="block reveal-text opacity-0">dolor sit amet</span>
          </h1>
        </div>

      </section>
    </main>
  );
}