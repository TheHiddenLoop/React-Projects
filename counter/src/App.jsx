import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex items-center justify-center p-4 font-inter">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-sm text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
          Simple Counter
        </h1>

        <p className="text-8xl font-bold text-blue-600 mb-10">
          {count}
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleDecrement}
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-xl shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={count === 0} 
          >
            Decrement
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-xl shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200 ease-in-out transform hover:scale-105"
          >
            Reset
          </button>
          <button
            onClick={handleIncrement}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-xl shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200 ease-in-out transform hover:scale-105"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
