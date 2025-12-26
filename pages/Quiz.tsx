
import React, { useState } from 'react';
import { getChaosAssessment } from '../services/geminiService';

const Quiz: React.FC = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ chaosLevel: number; diagnosis: string; advice: string[] } | null>(null);

  const questions = [
    "Como você descreveria a comunicação sobre dinheiro no seu casamento hoje?",
    "Quantas vezes por semana você perde o sono pensando em contas ou dívidas?",
    "Se você parasse de trabalhar hoje, por quantos meses sua família manteria o padrão de vida?",
    "Qual é o seu maior medo em relação ao futuro financeiro dos seus filhos?",
    "Você sente que o dinheiro é seu escravo ou que você é escravo dele?"
  ];

  const handleNext = (answer: string) => {
    const updatedAnswers = [...answers, answer];
    setAnswers(updatedAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      processResult(updatedAnswers);
    }
  };

  const processResult = async (finalAnswers: string[]) => {
    setLoading(true);
    const assessment = await getChaosAssessment(finalAnswers);
    setResult(assessment);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-off-white p-6 text-center">
        <div className="w-16 h-16 border-4 border-gold border-t-navy rounded-full animate-spin mb-8"></div>
        <h2 className="text-3xl serif italic text-navy mb-4">Analisando sua realidade...</h2>
        <p className="text-gray-500">Herculles está processando suas informações para entregar o diagnóstico da Ordem.</p>
      </div>
    );
  }

  if (result) {
    return (
      <div className="min-h-[70vh] bg-off-white py-20 px-6">
        <div className="container mx-auto max-w-2xl bg-white p-12 shadow-2xl border-t-8 border-gold">
          <div className="text-center mb-10">
            <span className="text-gold uppercase tracking-widest text-xs font-bold">Diagnóstico Finalizado</span>
            <h2 className="text-4xl text-navy mt-4 mb-2">Nível de Caos: <span className="text-bordeaux italic">{result.chaosLevel}/10</span></h2>
            <div className="w-full h-2 bg-gray-100 mt-6 relative overflow-hidden">
               <div className="absolute top-0 left-0 h-full bg-bordeaux transition-all duration-1000" style={{width: `${result.chaosLevel * 10}%`}}></div>
            </div>
          </div>

          <div className="mb-10 text-gray-700 leading-relaxed italic border-l-4 border-gold pl-6 py-2">
            "{result.diagnosis}"
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold text-navy mb-6 uppercase tracking-wider">Ações Imediatas da Ordem:</h3>
            <ul className="space-y-4">
              {result.advice.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-gold font-bold">{i + 1}.</span>
                  <p className="text-gray-600">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-navy p-8 text-off-white text-center">
            <h4 className="text-xl mb-4">Quer um plano detalhado para zerar esse caos?</h4>
            <p className="text-sm opacity-70 mb-8">Inscreva-se hoje no Método O.F. com desconto exclusivo de diagnóstico.</p>
            <a 
              href="#products" 
              className="inline-block bg-gold text-navy px-10 py-4 font-bold uppercase tracking-widest text-xs"
            >
              Garantir Minha Vaga
            </a>
          </div>
          
          <button 
            onClick={() => {setStep(0); setAnswers([]); setResult(null);}}
            className="mt-8 text-navy/40 text-xs uppercase tracking-widest hover:text-navy block mx-auto"
          >
            Refazer Diagnóstico
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[70vh] bg-off-white py-20 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.4em] text-gold font-bold mb-4">Passo {step + 1} de {questions.length}</div>
          <h2 className="text-3xl md:text-5xl text-navy leading-tight">{questions[step]}</h2>
        </div>

        <div className="space-y-4 max-w-md mx-auto">
          {step === 4 ? (
            <div className="flex flex-col gap-4">
              <button onClick={() => handleNext("Sinto que sou escravo dele")} className="w-full p-6 border-2 border-gray-200 hover:border-gold hover:bg-gold/5 transition-all text-lg text-navy">Sou escravo do dinheiro</button>
              <button onClick={() => handleNext("Ele é meu escravo")} className="w-full p-6 border-2 border-gray-200 hover:border-gold hover:bg-gold/5 transition-all text-lg text-navy">Ele é meu escravo (possuo ordem)</button>
              <button onClick={() => handleNext("Estamos em conflito constante")} className="w-full p-6 border-2 border-gray-200 hover:border-gold hover:bg-gold/5 transition-all text-lg text-navy">Estamos em conflito constante</button>
            </div>
          ) : (
            <div className="relative">
              <textarea 
                className="w-full p-6 border-2 border-gray-200 focus:border-gold outline-none h-40 text-lg text-navy placeholder:text-gray-300"
                placeholder="Escreva com sinceridade..."
                id="answer-input"
              ></textarea>
              <button 
                onClick={() => {
                  const val = (document.getElementById('answer-input') as HTMLTextAreaElement).value;
                  if(val) {
                    handleNext(val);
                    (document.getElementById('answer-input') as HTMLTextAreaElement).value = '';
                  }
                }}
                className="mt-6 w-full bg-navy text-gold py-4 font-bold uppercase tracking-widest text-xs shadow-lg"
              >
                Próxima Pergunta
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
