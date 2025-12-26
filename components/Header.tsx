
import React, { useState } from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const [isJornadaOpen, setIsJornadaOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy text-off-white shadow-xl py-4 px-6 md:px-12 flex justify-between items-center border-b border-gold/10">
      {/* Logo Area */}
      <a href={`#${Page.HOME}`} className="flex items-center space-x-3 group">
        <div className="w-10 h-10 border-2 border-gold flex items-center justify-center transform rotate-45 group-hover:bg-gold transition-colors duration-300">
          <span className="transform -rotate-45 font-bold text-gold group-hover:text-navy text-xl transition-colors duration-300">HA</span>
        </div>
        <div className="hidden sm:block">
          <h1 className="text-xl serif tracking-wider">HERCULLES</h1>
          <p className="text-[10px] uppercase tracking-widest text-gold -mt-1 font-semibold">ORDEM & PAZ</p>
        </div>
      </a>

      {/* Navigation Area */}
      <nav className="hidden md:flex space-x-2 items-center">
        <a
          href={`#${Page.ABOUT}`}
          className={`text-[11px] uppercase tracking-[0.2em] px-4 py-2 transition-all ${
            currentPage === Page.ABOUT ? 'text-gold font-bold' : 'text-off-white/70 hover:text-gold'
          }`}
        >
          Sobre
        </a>

        <a
          href={`#${Page.METHOD}`}
          className={`text-[11px] uppercase tracking-[0.2em] px-4 py-2 transition-all ${
            currentPage === Page.METHOD ? 'text-gold font-bold' : 'text-off-white/70 hover:text-gold'
          }`}
        >
          Conheça mais
        </a>

        <a
          href={`#${Page.BLOG}`}
          className={`text-[11px] uppercase tracking-[0.2em] px-4 py-2 transition-all ${
            currentPage === Page.BLOG ? 'text-gold font-bold' : 'text-off-white/70 hover:text-gold'
          }`}
        >
          Blog
        </a>

        {/* Dropdown Jornada */}
        <div 
          className="relative group py-2"
          onMouseEnter={() => setIsJornadaOpen(true)}
          onMouseLeave={() => setIsJornadaOpen(false)}
        >
          <button
            className="text-[11px] uppercase tracking-[0.2em] px-4 py-2 flex items-center gap-2 text-off-white/70 group-hover:text-gold transition-all"
          >
            Jornada
            <svg 
              className={`w-3 h-3 transition-transform duration-300 ${isJornadaOpen ? 'rotate-180 text-gold' : ''}`} 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Submenu Dropdown */}
          <div className={`absolute right-0 lg:left-0 mt-0 w-64 bg-navy border border-gold/20 shadow-2xl transition-all duration-300 origin-top-left ${
            isJornadaOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
          }`}>
            <div className="py-2">
              <a 
                href="#products" 
                className="block px-6 py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-gold/10 hover:text-gold transition-colors border-b border-white/5"
              >
                Chave da Ordem
              </a>
              <a 
                href="#products" 
                className="block px-6 py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-gold/10 hover:text-gold transition-colors"
              >
                Método Ordem Financeira
              </a>
            </div>
          </div>
        </div>

        <div className="pl-6">
          <a
            href="#quiz"
            className="bg-gold text-navy px-6 py-3 rounded-sm font-bold text-[11px] uppercase tracking-widest hover:bg-gold/90 transition-all transform hover:scale-105 inline-block shadow-lg shadow-gold/10"
          >
            Comece Aqui
          </a>
        </div>
      </nav>

      {/* Mobile Toggle Placeholder */}
      <div className="md:hidden">
         <a href="#quiz" className="bg-gold text-navy px-4 py-2 rounded-sm font-bold text-[10px] uppercase">Diagnóstico</a>
      </div>
    </header>
  );
};

export default Header;
