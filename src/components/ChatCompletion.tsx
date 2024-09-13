'use client';

import { useCompletion } from 'ai/react';
import { useState } from 'react';

export default function ChatCompletion() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion({
    api: '/api/completion',
  });

  // Custom variable to set default text for the input
  const [mainText, setMainText] = useState('some text');

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="prompt"
          value={input || mainText}  {/* Use input from useCompletion or mainText */}
          onChange={(e) => {
            handleInputChange(e); // This updates input value in useCompletion
            setMainText(e.target.value); // This updates mainText if needed
          }}
          id="input"
        />
        <button type="submit">Submit</button>
        <div>{completion}</div>
      </form>
    </div>
  );
}
