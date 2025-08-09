import React, { useState, useEffect } from 'react';

export default function App() {
  const [bars, setBars] = useState([]);

  const addProgressBar = () => {
    const id = Date.now();
    setBars((prev) => [...prev, { id, value: 0, max: 100 }]);
  };

  useEffect(() => {
    const intervals = bars.map((bar) => {
      if (bar.value >= bar.max) return null;

      const interval = setInterval(() => {
        setBars((prevBars) =>
          prevBars.map((b) =>
            b.id === bar.id && b.value < b.max
              ? { ...b, value: b.value + 1 }
              : b
          )
        );
      }, 30);

      return interval;
    });

    return () => {
      intervals.forEach((int) => int && clearInterval(int));
    };
  }, [bars]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center p-6">
      <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 w-full max-w-2xl shadow-xl">
        <h1 className="text-3xl font-semibold text-center mb-6 tracking-wide">Auto-Fill Progress Bars</h1>

        <button
          onClick={addProgressBar}
          className="block w-full text-center py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-500 hover:to-blue-600 rounded-xl font-medium transition duration-300 shadow-md mb-8"
        >
          ➕ Add New Progress Bar
        </button>

        <div className="space-y-6">
          {bars.map((bar) => (
            <div key={bar.id}>
              <div className="w-full bg-white/10 rounded-full h-6 overflow-hidden shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 to-lime-400 transition-all duration-100 ease-linear"
                  style={{ width: `${(bar.value / bar.max) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
