
import React from 'react';

const ProductShowcase: React.FC = () => {
  const products = [
    {
      name: 'A Chave da Ordem',
      tag: 'OFERTA DE ENTRADA',
      price: '29,90',
      features: ['Masterclass Exclusiva', 'Planilha de Diagnóstico', 'Mapa de Dívidas', 'Acesso Vitalício'],
      cta: 'Começar Agora',
      popular: false
    },
    {
      name: 'Método O.F. Completo',
      tag: 'MAIS VENDIDO',
      price: '197,00',
      features: ['Curso Completo (12 Módulos)', 'Comunidade de Alunos', 'Suporte Especializado', 'Planilhas Avançadas'],
      cta: 'Inscrição Completa',
      popular: true
    },
    {
      name: 'Mentoria Individual',
      tag: 'ALTA PERFORMANCE',
      price: 'Sob Consulta',
      features: ['Acompanhamento Direto', 'Análise Patrimonial', 'Planejamento Sucessório', 'Vagas Limitadas'],
      cta: 'Aplicar para Mentoria',
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-transparent relative z-10" id="products">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-navy mb-4">Escolha seu Nível de <span className="italic">Avanço</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto">Soluções para todos os estágios do caos financeiro, do endividamento à proteção patrimonial.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((prod, idx) => (
            <div 
              key={idx} 
              className={`relative p-10 border rounded-sm transition-all duration-300 flex flex-col ${
                prod.popular ? 'bg-navy text-off-white border-gold shadow-2xl scale-105 z-10' : 'bg-white/80 backdrop-blur-sm text-navy border-gray-200 hover:border-navy'
              }`}
            >
              {prod.tag && (
                <span className={`absolute top-0 right-0 transform translate-x-2 -translate-y-2 px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${
                  prod.popular ? 'bg-gold text-navy' : 'bg-navy text-off-white'
                }`}>
                  {prod.tag}
                </span>
              )}
              <h3 className={`text-2xl mb-2 ${prod.popular ? 'text-gold' : 'text-navy'}`}>{prod.name}</h3>
              <div className="mb-8">
                <span className="text-sm opacity-60">R$</span>
                <span className="text-4xl font-bold ml-1">{prod.price}</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {prod.features.map((f, i) => (
                  <li key={i} className="flex items-center text-sm opacity-80 italic">
                    <span className="text-gold mr-3">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-4 font-bold uppercase tracking-widest text-xs transition-all ${
                  prod.popular ? 'bg-gold text-navy hover:bg-gold/90' : 'bg-navy text-off-white hover:bg-navy/90'
                }`}
              >
                {prod.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
