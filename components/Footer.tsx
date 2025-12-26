
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-off-white/60 py-20 border-t border-gold/10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 border border-gold flex items-center justify-center transform rotate-45">
              <span className="transform -rotate-45 font-bold text-gold text-sm">HA</span>
            </div>
            <h2 className="text-xl serif tracking-wider text-off-white">HERCULLES ALEXANDRE</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed mb-8">
            "Salvar as almas através da ordenação da vida financeira." Dedicado a restaurar a honra e a paz nas famílias brasileiras através da excelência técnica e virtude moral.
          </p>
          <div className="flex space-x-4">
             {['Instagram', 'LinkedIn', 'YouTube'].map(social => (
               <a key={social} href="#" className="hover:text-gold transition-colors text-xs uppercase tracking-widest">{social}</a>
             ))}
          </div>
        </div>

        <div>
          <h3 className="text-off-white font-bold uppercase tracking-widest text-xs mb-8">Acesso Rápido</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#about" className="hover:text-gold transition-colors">A Jornada</a></li>
            <li><a href="#method" className="hover:text-gold transition-colors">Método O.F.</a></li>
            <li><a href="#blog" className="hover:text-gold transition-colors">Blog da Ordem</a></li>
            <li><a href="#quiz" className="hover:text-gold transition-colors">Diagnóstico Grátis</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-off-white font-bold uppercase tracking-widest text-xs mb-8">Informações</h3>
          <ul className="space-y-4 text-sm">
             <li><a href="#" className="hover:text-gold transition-colors">Políticas de Privacidade</a></li>
             <li><a href="#" className="hover:text-gold transition-colors">Termos de Uso</a></li>
             <li><a href="#" className="hover:text-gold transition-colors">Contato Direto</a></li>
             <li className="mt-8">
                <div className="border border-gold/20 p-4 rounded-sm flex items-center gap-4">
                   <div className="text-2xl">🔒</div>
                   <div className="text-[10px] uppercase tracking-widest">
                      <p className="font-bold text-off-white">Site Seguro</p>
                      <p>Dados criptografados</p>
                   </div>
                </div>
             </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-off-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em]">
        <p>© 2025 Herculles Alexandre. Todos os direitos reservados à Ordem.</p>
        <p>CNPJ: 00.000.000/0001-00</p>
      </div>
    </footer>
  );
};

export default Footer;
