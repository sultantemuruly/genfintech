import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();

  const result = await streamText({
    model: openai("gpt-4-turbo"),
    prompt:
      "I'm gonna send you a csv file content. You should analyze the financial statement and give suggestion whether to buy or sell stocks. If there is no any financial statement data you should output: 'The provided file does not contain information about financial statements of the company.' " +
      prompt,
  });

  return result.toDataStreamResponse();
}
