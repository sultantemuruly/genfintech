"use client";

import { useCompletion } from "ai/react";
import { Button } from "@/components/ui/button";

export default function AnalyzePage() {
  const { completion, input, setInput, handleSubmit } = useCompletion();

  return (
    <div className="container mx-auto ">
      <h1 className="text-2xl font-bold mb-4 text-center">CSV File Uploader</h1>
      <form
        className="flex items-center justify-between"
        onSubmit={handleSubmit}
      >
        <input
          type="file"
          accept=".csv"
          onChange={async (event) => {
            const file = event.target.files?.[0];
            if (file) {
              const text = await file.text();
              setInput(text);
            }
          }}
          className="block w-full text-sm text-gray-700 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
        />
        <Button type="submit">submit</Button>
      </form>
      {completion && <div>{completion}</div>}
      {input && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Extracted Data:</h2>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            {input}
          </pre>
        </div>
      )}
    </div>
  );
}
