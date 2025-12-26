
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Method from './pages/Method';
import Blog from './pages/Blog';
import Quiz from './pages/Quiz';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const hercullesImage = "https://lh3.googleusercontent.com/d/1HoUPWjQGFw2oaYdxRdpT58bPd3IWFQq6";

  useEffect(() => {
    const handleNavigation = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = Object.values(Page) as string[];
      
      if (validPages.includes(hash)) {
        setCurrentPage(hash as Page);
      } else if (!hash || hash === '') {
        setCurrentPage(Page.HOME);
      }
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleNavigation);
    handleNavigation();

    return () => window.removeEventListener('hashchange', handleNavigation);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME: return <Home />;
      case Page.ABOUT: return <About />;
      case Page.METHOD: return <Method />;
      case Page.BLOG: return <Blog />;
      case Page.QUIZ: return <Quiz />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-gold selection:text-navy relative bg-off-white">
      
      {/* MARCA D'ÁGUA GLOBAL FIXA - Ajustada: -10% tamanho e mais baixa */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-end justify-end">
        <div className="relative w-full h-full flex items-end justify-end opacity-[0.06] lg:opacity-[0.10] transition-opacity duration-1000">
          <img 
            src={hercullesImage} 
            alt="" 
            className="h-[76%] lg:h-[108%] w-auto max-w-[80vw] object-contain mix-blend-multiply"
            style={{ 
              filter: 'grayscale(1) contrast(1.1) brightness(1.1)',
              // translateX(8%): Mantém o posicionamento lateral resiliente
              // translateY(8%): Baixa a imagem conforme solicitado
              transform: 'translateX(8%) translateY(8%)',
              WebkitMaskImage: 'linear-gradient(to top, transparent, black 15%, black 85%, transparent)',
              maskImage: 'linear-gradient(to top, transparent, black 15%, black 85%, transparent)'
            }}
          />
        </div>
      </div>

      <Header currentPage={currentPage} />
      
      {/* Conteúdo Principal com Z-Index superior para sobrepor a marca d'água */}
      <main className="flex-grow animate-in fade-in duration-700 relative z-10">
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
