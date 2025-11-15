
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function generateQuestion(topic: string): Promise<string> {
  try {
    const prompt = `Generate a concise and interesting quiz question about ${topic}. The question should be suitable for someone learning about cryptocurrency. Do not provide the answer. The question should be a single paragraph.`;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });

    const text = response.text;
    if (!text) {
        throw new Error("No text returned from API.");
    }

    return text.trim();
  } catch (error) {
    console.error("Error generating question:", error);
    throw new Error("Failed to communicate with the AI model.");
  }
}

export async function generateAnswer(question: string): Promise<string> {
  try {
    const prompt = `Provide a clear and concise answer to the following question: "${question}". The answer should be easy for a beginner to understand. Explain the core concept directly. The answer should be a single paragraph.`;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    
    const text = response.text;
    if (!text) {
        throw new Error("No text returned from API.");
    }
    
    return text.trim();
  } catch (error) {
    console.error("Error generating answer:", error);
    throw new Error("Failed to communicate with the AI model.");
  }
}
