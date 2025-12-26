
import React from 'react';

const PainSection: React.FC = () => {
  const pains = [
    { title: 'Conflitos Conjugais', desc: '80% das brigas em casa começam ou terminam por causa do dinheiro.', icon: '⚖️' },
    { title: 'Dívidas Crônicas', desc: 'O sentimento de carregar um peso que impede você de olhar para o futuro.', icon: '⛓️' },
    { title: 'Falta de Herança', desc: 'Não deixar um legado financeiro e moral para seus filhos por falta de ordem.', icon: '👨‍👩‍👧‍👦' },
  ];

  return (
    <section className="py-24 bg-navy text-off-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-6 italic">Você está pagando juros com a sua paz.</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-off-white/70">
            A desorganização financeira não é apenas um problema matemático, é um sintoma de desordem na alma e na rotina da família.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pains.map((pain, idx) => (
            <div key={idx} className="group p-8 border border-gold/20 hover:border-gold transition-all duration-500">
              <div className="text-4xl mb-6 block group-hover:scale-110 transition-transform">{pain.icon}</div>
              <h3 className="text-2xl mb-4 text-gold">{pain.title}</h3>
              <p className="text-off-white/60 leading-relaxed">
                {pain.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="serif text-2xl md:text-3xl max-w-3xl mx-auto">
            "A ordem financeira é o primeiro passo para a liberdade moral da família."
          </p>
          <p className="mt-4 uppercase tracking-widest text-gold text-sm">- Herculles Alexandre</p>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
