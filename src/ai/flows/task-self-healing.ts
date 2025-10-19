'use server';

/**
 * @fileOverview An AI agent that analyzes a failed task and creates a new, corrected plan.
 *
 * - taskSelfHealing - A function that handles the task self-healing process.
 * - TaskSelfHealingInput - The input type for the taskSelfHealing function.
 * - TaskSelfHealingOutput - The return type for the taskSelfHealing function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const TaskSelfHealingInputSchema = z.object({
  goal: z.string().describe('The original goal of the failed task.'),
  failureLog: z.string().describe('The log containing the error information from the failed task.'),
});
export type TaskSelfHealingInput = z.infer<typeof TaskSelfHealingInputSchema>;

const TaskSelfHealingOutputSchema = z.object({
  newGoal: z.string().describe('The new, corrected goal to address the failure.'),
});
export type TaskSelfHealingOutput = z.infer<typeof TaskSelfHealingOutputSchema>;

export async function taskSelfHealing(input: TaskSelfHealingInput): Promise<TaskSelfHealingOutput> {
  return taskSelfHealingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'taskSelfHealingPrompt',
  input: {schema: TaskSelfHealingInputSchema},
  output: {schema: TaskSelfHealingOutputSchema},
  prompt: `You are an expert IT co-manager. A previous attempt to accomplish a goal has failed.  Analyze the original goal and the failure log to formulate a new, corrected goal that acknowledges the failure and aims to correct it.

Original Goal: {{{goal}}}
Failure Log: {{{failureLog}}}

Formulate a new goal that addresses the issues in the failure log.  Be specific and actionable.

Your response should be a JSON object with the key "newGoal".`,
});

const taskSelfHealingFlow = ai.defineFlow(
  {
    name: 'taskSelfHealingFlow',
    inputSchema: TaskSelfHealingInputSchema,
    outputSchema: TaskSelfHealingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
