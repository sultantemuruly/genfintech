import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();

  const result = await streamText({
    model: openai("gpt-4-turbo"),
    prompt:
      "im gonna send you a csv file content and i need you to analyze it in terms of financial statements and literacy." +
      prompt,
  });

  return result.toDataStreamResponse();
}
