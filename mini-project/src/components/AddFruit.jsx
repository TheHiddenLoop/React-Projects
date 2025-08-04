import React, { useState } from 'react'
import { fruites } from '../useFtruites';

export default function AddFruit() {
  const [input, setInput] = useState('');
  const handleClick = (e) => {
    if (input === "") return;
    fruites.push({ id: Date.now(), name: input });
    setInput('');
  }
  return (
    <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex items-center gap-2 bg-white p-4 rounded shadow">
        <input
          type="text"
          value={input}
          placeholder="Enter a fruit name"
          onChange={(e) => setInput(e.target.value)}
          className="border px-2 py-1 rounded"
        />
        <button
          onClick={handleClick}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Add Fruit
        </button>
      </div>
    </div>
  )
}
