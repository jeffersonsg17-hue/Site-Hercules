
import React from 'react';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'O Custo Invisível do Orgulho nas Finanças Familiares',
      category: 'A Desordem',
      excerpt: 'Por que muitos homens preferem o endividamento ao reconhecimento da fragilidade financeira perante a esposa.',
      date: '15 Jan 2025'
    },
    {
      id: '2',
      title: 'A Planilha de Planejamento como Instrumento de Oração',
      category: 'A Ordem',
      excerpt: 'Como a organização material abre espaço para a paz espiritual e o foco nas virtudes superiores.',
      date: '02 Jan 2025'
    },
    {
      id: '3',
      title: 'O Legado que o Dinheiro não pode Comprar, mas pode Proteger',
      category: 'A Vocação',
      excerpt: 'A diferença entre deixar herança e deixar um legado de valores e inteligência financeira para seus filhos.',
      date: '20 Dez 2024'
    }
  ];

  return (
    <div className="py-24 bg-off-white min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <header className="text-center mb-20">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Blog da Ordem</span>
          <h1 className="text-5xl md:text-6xl text-navy mb-8">Reflexões & <span className="italic">Estratégias</span></h1>
          <p className="text-gray-500">Artigos quinzenais sobre finanças, família e virtude.</p>
        </header>

        <div className="grid gap-16">
          {posts.map(post => (
            <article key={post.id} className="group cursor-pointer">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                 <div className="md:w-1/3 aspect-video bg-navy/5 overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/${post.id}/600/400`} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-80"
                    />
                 </div>
                 <div className="md:w-2/3">
                    <div className="flex items-center gap-4 mb-4">
                       <span className="text-[10px] uppercase font-bold tracking-widest bg-gold/10 text-gold px-2 py-1">{post.category}</span>
                       <span className="text-[10px] uppercase tracking-widest text-gray-400">{post.date}</span>
                    </div>
                    <h2 className="text-3xl text-navy serif mb-4 group-hover:text-gold transition-colors">{post.title}</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                    <a href="#" className="inline-flex items-center text-xs uppercase font-bold tracking-widest text-navy group-hover:gap-4 gap-2 transition-all">
                       Continuar Lendo <span className="text-gold">→</span>
                    </a>
                 </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 pt-20 border-t border-gray-200 text-center">
           <p className="text-gray-400 italic mb-8">Quer receber esses artigos em primeira mão no seu e-mail?</p>
           <div className="max-w-md mx-auto">
             <a href="#home" className="bg-navy text-gold px-10 py-4 font-bold uppercase tracking-widest text-xs">Inscrever-se na Newsletter HA</a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
