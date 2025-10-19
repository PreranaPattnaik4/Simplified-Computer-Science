'use server';

/**
 * @fileOverview This file defines a Genkit flow for breaking down a high-level goal into a series of actionable steps.
 *
 * - multiStepTaskExecution - A function that takes a natural language goal and returns a structured object containing the original goal and an array of steps.
 * - MultiStepTaskExecutionInput - The input type for the multiStepTaskExecution function.
 * - MultiStepTaskExecutionOutput - The return type for the multiStepTaskExecution function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MultiStepTaskExecutionInputSchema = z.string().describe('A natural language goal from the user (e.g., \"Patch all production servers\").');
export type MultiStepTaskExecutionInput = z.infer<typeof MultiStepTaskExecutionInputSchema>;

const MultiStepTaskExecutionOutputSchema = z.object({
  originalGoal: z.string().describe('The original goal input by the user.'),
  steps: z.array(
    z.object({
      description: z.string().describe('A clear, technical, sequential step.'),
    })
  ).describe('An array of steps required to achieve the original goal.'),
});
export type MultiStepTaskExecutionOutput = z.infer<typeof MultiStepTaskExecutionOutputSchema>;

export async function multiStepTaskExecution(
  input: MultiStepTaskExecutionInput
): Promise<MultiStepTaskExecutionOutput> {
  return multiStepTaskExecutionFlow({goal: input});
}

const prompt = ai.definePrompt({
  name: 'multiStepTaskExecutionPrompt',
  input: {schema: z.object({goal: MultiStepTaskExecutionInputSchema})},
  output: {schema: MultiStepTaskExecutionOutputSchema},
  prompt: `You are an expert IT co-manager. Your job is to take a high-level goal from the user and break it down into a series of clear, technical, sequential steps.

Goal: {{{goal}}}

Break down the above goal into a series of steps. Your response should be a JSON object with the original goal and an array of steps.`,
});

const multiStepTaskExecutionFlow = ai.defineFlow(
  {
    name: 'multiStepTaskExecutionFlow',
    inputSchema: z.object({goal: MultiStepTaskExecutionInputSchema}),
    outputSchema: MultiStepTaskExecutionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return { ...output!, originalGoal: input.goal };
  }
);
