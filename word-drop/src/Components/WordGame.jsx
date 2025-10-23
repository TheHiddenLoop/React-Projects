import { useEffect, useState, useRef } from "react";

const getRandomLetter = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return letters[Math.floor(Math.random() * letters.length)];
};

export function WordGame() {
  const [letters, setLetters] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setLetters((prev) => [
        ...prev,
        {
          id: Math.random(),
          char: getRandomLetter(),
          top: 0,
          left: Math.floor(Math.random() * 90),
        },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameOver]);

  useEffect(() => {
    if (gameOver) return;

    const dropInterval = setInterval(() => {
      setLetters((prev) =>
        prev
          .map((l) => ({ ...l, top: l.top + 5 }))
          .filter((l) => {
            if (l.top > 100) {
              setGameOver(true);
              return false;
            }
            return true;
          })
      );
    }, 300);

    return () => clearInterval(dropInterval);
  }, [gameOver]);

  useEffect(() => {
    const handleKey = (e) => {
      const key = e.key.toUpperCase();
      setLetters((prev) => {
        const index = prev.findIndex((l) => l.char === key);
        if (index !== -1) {
          const newLetters = [...prev];
          newLetters.splice(index, 1);
          setScore((s) => s + 1);
          return newLetters;
        }
        return prev;
      });
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const restart = () => {
    setLetters([]);
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="game">
      <h1 className="title">🎯 Word Drop Game</h1>
      <p className="score">Score: {score}</p>

      <div className="game-container" ref={containerRef}>
        {letters.map((l) => (
          <div
            key={l.id}
            className="letter"
            style={{ top: `${l.top}%`, left: `${l.left}%` }}
          >
            {l.char}
          </div>
        ))}
      </div>
      {gameOver && (
        <div className="overlay">
          <h2 className="game-over">💀 Game Over!</h2>
          <p className="final-score">Final Score: {score}</p>
          <button className="restart-btn" onClick={restart}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
}
