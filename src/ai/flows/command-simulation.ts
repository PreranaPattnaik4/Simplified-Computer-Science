'use server';
/**
 * @fileOverview Simulates the output of a shell command.
 *
 * - simulateCommand - A function that simulates the shell command and returns a simulated output.
 * - SimulateCommandInput - The input type for the simulateCommand function.
 * - SimulateCommandOutput - The return type for the simulateCommand function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const SimulateCommandInputSchema = z.string().describe('The command to simulate.');
export type SimulateCommandInput = z.infer<typeof SimulateCommandInputSchema>;

const SimulateCommandOutputSchema = z.string().describe('The simulated output of the command.');
export type SimulateCommandOutput = z.infer<typeof SimulateCommandOutputSchema>;

export async function simulateCommand(command: SimulateCommandInput): Promise<SimulateCommandOutput> {
  return simulateCommandFlow(command);
}

const prompt = ai.definePrompt({
  name: 'commandSimulationPrompt',
  input: {schema: SimulateCommandInputSchema},
  output: {schema: SimulateCommandOutputSchema},
  prompt: `You are a Linux terminal.  Simulate the output of the following command:\n\n{{{command}}}`,
});

const simulateCommandFlow = ai.defineFlow(
  {
    name: 'simulateCommandFlow',
    inputSchema: SimulateCommandInputSchema,
    outputSchema: SimulateCommandOutputSchema,
  },
  async command => {
    const {output} = await prompt(command);
    return output!;
  }
);
