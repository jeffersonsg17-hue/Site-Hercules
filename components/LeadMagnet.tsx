
import React, { useState } from 'react';

const LeadMagnet: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Logic for email capture
    }
  };

  return (
    <section className="py-24 bg-navy text-off-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         {/* Background pattern */}
         <div className="grid grid-cols-12 h-full w-full">
            {[...Array(48)].map((_, i) => (
              <div key={i} className="border border-gold/20 aspect-square"></div>
            ))}
         </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl mb-6">O Primeiro Passo Gratuito.</h2>
          <p className="text-lg text-off-white/70 mb-8 max-w-lg leading-relaxed">
            Baixe agora a <span className="text-gold font-bold">Planilha de Planejamento Familiar HA</span>. A mesma ferramenta que utilizei para gerir milhões e que agora vai organizar o seu lar.
          </p>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                required
                className="bg-transparent border-b-2 border-gold/40 focus:border-gold py-4 px-2 outline-none flex-grow text-off-white text-lg placeholder:text-off-white/30"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-gold text-navy px-10 py-4 font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all whitespace-nowrap">
                Receber Planilha
              </button>
            </form>
          ) : (
            <div className="bg-gold/10 border border-gold p-6 text-gold">
              <p className="font-bold">✓ Sucesso! O link foi enviado para o seu e-mail.</p>
            </div>
          )}
          <p className="text-[10px] text-off-white/40 mt-6 uppercase tracking-widest">Respeitamos sua privacidade. Nada de spam.</p>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/sheet/600/400" 
              alt="Planilha HA" 
              className="rounded-sm shadow-2xl border border-gold/20"
            />
            <div className="absolute -top-6 -right-6 bg-gold text-navy w-20 h-20 rounded-full flex items-center justify-center font-bold text-xs uppercase text-center leading-tight shadow-xl">
              GRÁTIS HOJE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
