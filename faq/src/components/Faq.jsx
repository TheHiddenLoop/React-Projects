import React from 'react'
import FaqItems from './FaqItems'

export default function Faq() {
  const items = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
  ];

  return (
    <div className="max-w-xl mx-auto mt-8 px-4">
      {items.map((e, i) => (
        <FaqItems key={i} item={e} index={i} />
      ))}
    </div>
  );
}