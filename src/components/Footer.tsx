import Image from "next/image";
import Link from "next/link";
import { Star, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A365C] pt-20 pb-8 px-8 flex flex-col items-center">
      
      <div className="mb-20">
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="Modular Logo" 
            width={180} 
            height={60} 
            className="object-contain brightness-0 invert opacity-90"
          />
        </Link>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 text-white/80">
        
        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-playfair tracking-widest uppercase text-sm mb-2">Contato</h4>
          <a href="tel:+5511999999999" className="flex items-center space-x-3 hover:text-white transition-colors text-sm font-light">
            <Phone size={16} strokeWidth={1.5} />
            <span>(11) 99999-9999</span>
          </a>
          <a href="mailto:contato@modular.com.br" className="flex items-center space-x-3 hover:text-white transition-colors text-sm font-light">
            <Mail size={16} strokeWidth={1.5} />
            <span>contato@modular.com.br</span>
          </a>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-playfair tracking-widest uppercase text-sm mb-2">Showroom & Fábrica</h4>
          <div className="flex items-start space-x-3 text-sm font-light">
            <MapPin size={16} strokeWidth={1.5} className="mt-1 shrink-0" />
            <p className="leading-relaxed">
              Av. Principal da Madeira, 1000<br />
              Distrito Industrial<br />
              São Paulo - SP, 00000-000
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-playfair tracking-widest uppercase text-sm mb-2">Navegação</h4>
          <Link href="/produtos" className="hover:text-white transition-colors text-sm font-light w-fit">Produtos</Link>
          <Link href="/projetos" className="hover:text-white transition-colors text-sm font-light w-fit">Projetos Realizados</Link>
          <Link href="/nossa-historia" className="hover:text-white transition-colors text-sm font-light w-fit">Nossa História</Link>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-playfair tracking-widest uppercase text-sm mb-2">Social</h4>
          <div className="flex space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-transform hover:-translate-y-1 duration-300">
              <Star size={22} strokeWidth={1.5} />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-transform hover:-translate-y-1 duration-300">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="12" x2="12" y2="22"></line>
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path>
                <circle cx="12" cy="9" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div className="w-full max-w-7xl border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 font-light">
        <p>&copy; {new Date().getFullYear()} Modular Móveis. Todos os direitos reservados.</p>
        <p className="mt-2 md:mt-0">Desenvolvido por si</p>
      </div>
      
    </footer>
  );
}