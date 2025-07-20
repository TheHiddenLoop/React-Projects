import {ChevronDown, ChevronUp} from "lucide-react"
import { useState } from 'react'
import { useEffect } from 'react';
export default function FaqItems({ item, index }) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (index === 0) {
      setOpen(true);
    }
  }, []);

  return (
    <div className="border-b border-gray-300 py-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(!isOpen)}>
        <div className="text-lg font-medium">{item.question}</div>
        <button className="text-gray-600 hover:text-black transition-transform duration-300">
          {isOpen ? (
            <ChevronUp className="inline w-5 h-5" />
          ) : (
            <ChevronDown className="inline w-5 h-5" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="mt-2 text-gray-700 whitespace-pre-line">
          {item.answer}
        </div>
      )}
    </div>
  );
}