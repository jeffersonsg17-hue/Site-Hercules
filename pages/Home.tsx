
import React from 'react';
import Hero from '../components/Hero';
import PainSection from '../components/PainSection';
import SolutionSection from '../components/SolutionSection';
import ProductShowcase from '../components/ProductShowcase';
import LeadMagnet from '../components/LeadMagnet';
import { Page } from '../types';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      
      {/* Social Proof */}
      <section className="py-8 bg-gray-100 border-y border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-6 font-semibold">Experiência Corporativa e Acadêmica</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
             <span className="font-bold text-lg text-navy serif">FGV</span>
             <span className="font-bold text-lg text-navy serif">RaiaDrogasil</span>
             <span className="font-bold text-lg text-navy serif">Planejar</span>
             <span className="font-bold text-lg text-navy serif">CFP®</span>
          </div>
        </div>
      </section>

      <PainSection />
      <SolutionSection />
      
      {/* Quiz Call to Action */}
      <section className="py-20 bg-transparent border-y border-gray-100 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-navy">Descubra seu Nível de Caos</h2>
          <p className="text-lg text-gray-600 mb-10">
            Responda a 5 perguntas rápidas e receba um diagnóstico imediato e personalizado baseado no Método Ordem Financeira.
          </p>
          <a 
            href="#quiz" 
            className="inline-block bg-navy text-gold px-10 py-4 text-sm uppercase tracking-widest font-bold hover:bg-navy/90 transition-all shadow-xl"
          >
            Fazer Diagnóstico Gratuito
          </a>
        </div>
      </section>

      <ProductShowcase />
      <LeadMagnet />
    </div>
  );
};

export default Home;
