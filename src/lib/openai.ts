import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function generateText(prompt: string): Promise<string> {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 100,
    });
    return response.data.choices[0]?.text || '';
  } catch (error) {
    console.error('Error generating text:', error);
    throw error;
  }
}
