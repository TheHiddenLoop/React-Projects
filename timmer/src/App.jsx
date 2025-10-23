import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(timerRef.current);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [isRunning]);

  const formatTime = (ms) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    const pad = (num) => String(num).padStart(2, '0');

    return (
      `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`
    );
  };

  const handleStartStop = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 text-center w-full max-w-sm sm:max-w-md">
        <div className="text-4xl sm:text-6xl font-mono text-blue-700 mb-8 sm:mb-10 pb-2 border-b-2 border-gray-200">
          {formatTime(time)}
        </div>
        <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-4 sm:space-y-0">
          <button
            onClick={handleStartStop}
            className="bg-blue-600 hover:bg-blue-700 active:translate-y-0.5 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-lg sm:text-xl cursor-pointer transition-all duration-200 min-w-[140px] sm:min-w-[150px] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button
            onClick={handleReset}
            className="bg-red-600 hover:bg-red-700 active:translate-y-0.5 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-lg sm:text-xl cursor-pointer transition-all duration-200 min-w-[140px] sm:min-w-[150px] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Reset
          </button>
        </div>
      </div>
    </div>

  );
}

export default App;
