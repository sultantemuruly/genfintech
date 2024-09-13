'use client'

import { ChangeEvent, useState } from 'react';
import Papa from 'papaparse';

interface CSVData {
  [key: string]: string;
}

const Page = () => {
  const [csvData, setCsvData] = useState<CSVData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          setCsvData(results.data as CSVData[]);
          setError(null);
        },
        error: (error) => {
          console.error("Error reading CSV file:", error);
          setError("Failed to read CSV file.");
        },
      });
    }
  };

  return (
    <div className="max-w-md mx-auto py-[200px] bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center">CSV File Uploader</h1>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="block w-full text-sm text-gray-700 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
      />
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      {csvData.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Extracted Data:</h2>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">{JSON.stringify(csvData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Page