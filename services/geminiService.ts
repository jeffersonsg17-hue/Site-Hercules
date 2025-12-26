
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getChaosAssessment(answers: string[]) {
  const prompt = `Analise as seguintes respostas de um pai de família sobre sua situação financeira:
  ${answers.join('\n')}
  
  Forneça um diagnóstico de "Nível de Caos Financeiro" (de 1 a 10) e 3 conselhos práticos imediatos baseados no "Método O.F." (Ordem Financeira). 
  O tom deve ser paternal, sério e acolhedor, focado em honra e proteção da família.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            chaosLevel: { type: Type.NUMBER },
            diagnosis: { type: Type.STRING },
            advice: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["chaosLevel", "diagnosis", "advice"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
}
