"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 border-b border-[#023968]">

      <div className="shrink-0">
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="Modular Logo" 
            width={120} 
            height={100} 
            className="object-contain"
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-white/90">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <Link href="/produtos" className="hover:text-white transition-colors">Produtos</Link>
        <Link href="/nossa-historia" className="hover:text-white transition-colors">Nossa história</Link>
        <Link href="/projetos" className="hover:text-white transition-colors">Projetos realizados</Link>
        <Link href="/contato" className="hover:text-white transition-colors">Contate-nos</Link>
      </div>

      <div className="flex items-center space-x-6 text-white/90">
        <button aria-label="Pesquisar" className="hover:text-white transition-colors">
          <Search size={20} strokeWidth={1.5} />
        </button>
        <button aria-label="Conta do Utilizador" className="hover:text-white transition-colors">
          <User size={20} strokeWidth={1.5} />
        </button>
      </div>
    </nav>
  );
}