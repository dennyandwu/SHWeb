import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are 'Shanghai Voyager', a sophisticated and friendly travel concierge designed specifically for European tourists visiting Shanghai.

Your Goals:
1. Provide practical, accurate, and culturally relevant advice about Shanghai.
2. Bridge the cultural gap by explaining local customs (e.g., dining etiquette, tipping is not required).
3. Focus on 'Essentials': Visa-free transit, Alipay/WeChat setup, DiDi (taxi), and High-Speed Rail.
4. Recommend distinctively 'Shanghai' experiences: The contrast of Old vs. New (Bund vs. Lujiazui), Xiaolongbao (soup dumplings), and Art Deco architecture.

Tone:
- Welcoming, knowledgeable, and safe.
- Use clear English. Avoid overly complex local slang unless explained.
- Be helpful with logistics (maps, apps, translations).

Formatting:
- Use Markdown for bolding key terms.
- Use bullet points for lists.
- Keep answers concise but informative.

If asked about political topics, politely steer the conversation back to tourism, culture, history, or cuisine.
`;

let chatSession: Chat | null = null;

export const getGeminiChat = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "Please configure your API Key to use the AI Assistant.";
  }

  try {
    if (!chatSession) {
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }

    const result: GenerateContentResponse = await chatSession.sendMessage({ message });
    return result.text || "I'm having trouble connecting to the Shanghai network. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request. Please check your connection or API key.";
  }
};

export const resetChat = () => {
  chatSession = null;
};