
import React from 'react';

const SolutionSection: React.FC = () => {
  const pillars = [
    { 
      number: '01', 
      title: 'Verdade (Diagnóstico)', 
      desc: 'Encarar os números sem medo. Identificar cada centavo que sai e entra para entender o tamanho real do caos.' 
    },
    { 
      number: '02', 
      title: 'Estratégia (Planejamento)', 
      desc: 'Criar uma blindagem patrimonial. Definir prioridades, eliminar o desperdício e honrar compromissos sagrados.' 
    },
    { 
      number: '03', 
      title: 'Virtude (Constância)', 
      desc: 'O dinheiro serve à vida, não o contrário. Desenvolver a disciplina necessária para manter a paz alcançada.' 
    }
  ];

  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-gold font-semibold uppercase tracking-[0.2em] text-xs mb-4 block">O Caminho da Ordem</span>
            <h2 className="text-4xl md:text-6xl text-navy mb-8 leading-tight">Os 3 Pilares do <br/><span className="italic">Método Ordem Financeira</span></h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Diferente de cursos genéricos que focam em "ficar rico rápido", nossa abordagem é baseada em princípios atemporais de gestão e virtudes humanas.
            </p>
            <div className="space-y-8">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <span className="text-4xl serif text-gold/20 font-bold">{pillar.number}</span>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">{pillar.title}</h3>
                    <p className="text-gray-500">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
             <div className="bg-navy p-12 rounded-sm shadow-3xl text-off-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 -rotate-45 translate-x-10 -translate-y-10"></div>
                <h4 className="text-2xl italic mb-6">"Não é sobre planilhas, é sobre salvar casamentos através da verdade financeira."</h4>
                <p className="text-off-white/60 mb-8">
                  Milhares de famílias sofrem por falta de um guia que fale a verdade técnica com autoridade moral. O Método Ordem Financeira preenche essa lacuna.
                </p>
                <img 
                  src="https://picsum.photos/seed/cathedral/600/400" 
                  alt="Financial Order" 
                  className="w-full h-64 object-cover rounded-sm border border-gold/30 mb-8"
                />
                <a href="#method" className="block text-center w-full py-4 border border-gold text-gold uppercase tracking-[0.2em] font-bold text-xs hover:bg-gold hover:text-navy transition-all">
                   Ver Grade Completa do Método
                </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
