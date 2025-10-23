import { useState } from "react"
import { Board } from "./components/Board"
import "./App.css"

export default function App() {
  function getRandomStartingPlayer() {
    return Math.random() < 0.5
  }

  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(getRandomStartingPlayer())
  const [gameHistory, setGameHistory] = useState([])

  function handlePlay(nextSquares) {
    setSquares(nextSquares)
    setXIsNext(!xIsNext)

    setGameHistory((prev) => [...prev, { squares: [...squares], player: xIsNext ? "X" : "O" }])
  }

  function restartGame() {
    setSquares(Array(9).fill(null))
    setXIsNext(getRandomStartingPlayer())
    setGameHistory([])
  }

  return (
    <div className="app-container">
      <div className="game-container">
        <div className="game-header">
          <h1 className="game-title">Tic Tac Toe</h1>
          <div className="random-start-indicator">
            Player {xIsNext ? "X" : "O"} goes first!
          </div>
        </div>

        <div className="game-board-container">
          <Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay} />

          <div className="game-controls">
            <button className="restart-button" onClick={restartGame}>
              <svg className="restart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              New Game
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

