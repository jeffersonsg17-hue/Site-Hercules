
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-24 bg-off-white">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl">
        <div className="relative">
          <img 
            src="https://picsum.photos/seed/portrait/800/1000" 
            alt="Herculles Alexandre" 
            className="rounded-sm shadow-3xl border-4 border-white"
          />
          <div className="absolute -bottom-6 -left-6 bg-gold text-navy p-8 shadow-xl">
             <p className="serif text-2xl italic">"A desordem financeira é um convite para o caos espiritual."</p>
          </div>
        </div>
        
        <div>
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">A Jornada do Guardião</span>
          <h1 className="text-5xl md:text-6xl text-navy mb-8">Quem é Herculles <br/><span className="italic">Alexandre?</span></h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              Com mais de 14 anos de trajetória na Raia Drogasil, onde atuei na gestão de projetos e orçamentos de milhões, aprendi que a técnica sem valor é vazia. 
            </p>
            <p>
              Pós-graduado pela FGV e certificado pela Planejar, minha missão transcendeu os números corporativos quando percebi que as maiores tragédias financeiras não aconteciam nos balanços das empresas, mas nas mesas das cozinhas brasileiras.
            </p>
            <p>
              Como marido e pai, entendi que a segurança financeira é a base para a paz conjugal e o desenvolvimento dos filhos. Minha abordagem de "Terceira Via" une o rigor técnico de um executivo com a sensibilidade de um mentor que valoriza a família acima de tudo.
            </p>
            <p className="font-bold text-navy">
              Não vendo promessas de riqueza fácil. Vendo a liberdade de honrar sua palavra e proteger quem você ama.
            </p>
          </div>

          <div className="mt-12 flex gap-12 items-center">
            <div>
              <p className="text-3xl font-bold text-navy">14+</p>
              <p className="text-xs uppercase tracking-widest text-gold">Anos de Exp.</p>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div>
              <p className="text-3xl font-bold text-navy">1k+</p>
              <p className="text-xs uppercase tracking-widest text-gold">Alunos Impactados</p>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div>
              <p className="text-3xl font-bold text-navy">100%</p>
              <p className="text-xs uppercase tracking-widest text-gold">Foco em Família</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
