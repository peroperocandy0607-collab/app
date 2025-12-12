import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key not found");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const initChat = async (): Promise<string> => {
  const ai = getClient();
  if (!ai) return "システムエラーが発生しました。";

  try {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const response: GenerateContentResponse = await chatSession.sendMessage({
      message: "挨拶をして、お客様の今の悩みや興味について優しく問いかけてください。（短めに）"
    });

    return response.text || "こんにちは。ひでです。今日はどうされましたか？";
  } catch (error) {
    console.error("Chat init error:", error);
    return "こんにちは。ご訪問ありがとうございます。";
  }
};

export const sendMessage = async (message: string): Promise<string> => {
  if (!chatSession) {
    // Re-init if lost (though effectively state is held in module scope, better to handle in component in real app)
    await initChat();
  }
  
  if (!chatSession) return "エラーが発生しました。";

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "申し訳ありません、もう一度お願いします。";
  } catch (error) {
    console.error("Message error:", error);
    return "申し訳ありません。現在応答できません。LINEからお問い合わせください。";
  }
};