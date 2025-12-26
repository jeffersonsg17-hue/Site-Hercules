
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-transparent overflow-hidden pt-20 lg:pt-0">
      
      {/* Elementos Decorativos de Fundo Adicionais Removidos (Círculos) */}

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-4 mb-8 justify-center">
            <div className="w-12 h-[1px] bg-gold"></div>
            <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
              Estratégia Financeira Familiar
            </span>
            <div className="w-12 h-[1px] bg-gold"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 leading-[1.1] lg:leading-[1] text-navy serif font-bold">
            Ordenar sua <span className="italic text-gold">vida financeira</span> <br className="hidden md:block" />
            pode salvar sua família.
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-navy/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            O Método Ordem Financeira é o caminho estratégico para converter o caos financeiro em ordem, paz e um legado de virtude para seus filhos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#quiz" 
              className="bg-gold text-navy px-12 py-5 text-[11px] uppercase tracking-[0.25em] font-bold shadow-2xl shadow-gold/20 hover:bg-gold/90 transition-all text-center rounded-sm"
            >
              Quero Ordenar Minha Vida
            </a>
            <a 
              href="#method"
              className="group flex items-center justify-center gap-4 px-10 py-5 text-[11px] uppercase tracking-[0.2em] font-bold text-navy border border-navy/10 hover:border-navy transition-all"
            >
              Conheça o Método 
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
          </div>
          
          {/* Badge de Autoridade sutil no rodapé da Hero */}
          <div className="mt-16 pt-16 border-t border-navy/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
             <span className="font-bold text-sm tracking-widest text-navy serif">FGV</span>
             <span className="font-bold text-sm tracking-widest text-navy serif">RAIA DROGASIL</span>
             <span className="font-bold text-sm tracking-widest text-navy serif">PLANEJAR</span>
             <span className="font-bold text-sm tracking-widest text-navy serif">CFP®</span>
          </div>
        </div>
      </div>

      {/* Marca d'água Vertical Lateral */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-8 opacity-10">
        <div className="w-[1px] h-32 bg-navy"></div>
        <p className="rotate-90 text-[10px] uppercase tracking-[0.8em] text-navy whitespace-nowrap">
          ORDEM • PAZ • VIRTUDE
        </p>
        <div className="w-[1px] h-32 bg-navy"></div>
      </div>
    </section>
  );
};

export default Hero;
