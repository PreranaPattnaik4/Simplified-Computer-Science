
'use server';
/**
 * @fileOverview A simple chatbot flow.
 *
 * This file defines a Genkit flow that takes a user's query as a string
 * and returns a conversational response from an AI model.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ChatbotInputSchema = z.string();
const ChatbotOutputSchema = z.string();

export async function askChatbot(query: z.infer<typeof ChatbotInputSchema>): Promise<z.infer<typeof ChatbotOutputSchema>> {
  return chatbotFlow(query);
}

const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatbotInputSchema,
    outputSchema: ChatbotOutputSchema,
  },
  async (query) => {
    const { output } = await ai.generate({
      prompt: `You are a helpful AI assistant for a website called "Simplified Computer Science". Your goal is to answer user questions about the site, its courses, career advice, and computer science topics. Be friendly, concise, and helpful.

User question: ${query}`,
      model: 'gemini-1.5-flash-latest',
      config: {
        temperature: 0.7,
      },
    });

    return output || 'Sorry, I could not process that. Please try again.';
  }
);
