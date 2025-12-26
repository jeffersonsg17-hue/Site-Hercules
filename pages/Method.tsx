
import React from 'react';

const Method: React.FC = () => {
  return (
    <div className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <header className="text-center mb-20">
          <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 block">
            A Arquitetura da Prosperidade
          </span>
          <h1 className="text-5xl md:text-7xl text-navy mb-8 serif font-bold leading-tight">
            O Método <br className="md:hidden" /> Ordem Financeira
          </h1>
          <p className="text-lg md:text-xl text-navy/60 italic font-light">
            "Ordem e Paz como fundamento para a vida familiar."
          </p>
        </header>

        <section className="mb-20">
          <img 
            src="https://picsum.photos/seed/method/1200/600" 
            alt="The Method" 
            className="w-full rounded-sm shadow-2xl mb-12 border border-gold/10"
          />
          <div className="prose prose-lg text-gray-700 max-w-none">
            <h2 className="text-3xl text-navy serif mb-6">Por que um método e não apenas dicas?</h2>
            <p className="mb-6">
              Dicas financeiras são como analgésicos: aliviam o sintoma, mas não curam a doença. O Método Ordem Financeira é um tratamento completo para a estrutura da sua vida. 
            </p>
            <p className="mb-12">
              Desenvolvido por Herculles Alexandre ao longo de 14 anos de experiência executiva, este sistema foca no que realmente importa: a restauração da autoridade e da paz dentro de casa.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="bg-white/60 backdrop-blur-sm p-10 border border-gray-100 shadow-sm">
                <h3 className="text-2xl text-navy serif mb-4">Fase 1: O Despertar</h3>
                <p>O momento de encarar a realidade sem filtros. Diagnóstico profundo de fluxos e crenças limitantes.</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-10 border border-gray-100 shadow-sm">
                <h3 className="text-2xl text-navy serif mb-4">Fase 2: A Blindagem</h3>
                <p>Construção das defesas contra imprevistos e eliminação estratégica de dívidas que sugam a energia familiar.</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-10 border border-gray-100 shadow-sm">
                <h3 className="text-2xl text-navy serif mb-4">Fase 3: A Multiplicação</h3>
                <p>O dinheiro agora trabalha para você. Estratégias de investimento conservador focadas em legado e segurança.</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-10 border border-gray-100 shadow-sm">
                <h3 className="text-2xl text-navy serif mb-4">Fase 4: A Paz</h3>
                <p>Gestão contínua e foco nas virtudes. A vida financeira deixa de ser uma preocupação e se torna um suporte.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-navy p-12 text-center text-off-white shadow-3xl">
          <h2 className="text-4xl mb-8 serif italic">Pronto para dar o primeiro passo?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <a href="#products" className="bg-gold text-navy px-10 py-4 font-bold uppercase tracking-widest text-xs rounded-sm transition-all hover:bg-gold/90">Ver Opções de Inscrição</a>
             <a href="#quiz" className="border border-off-white/30 text-off-white px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-off-white hover:text-navy transition-all">Fazer Diagnóstico</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Method;
