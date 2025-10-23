import { Square } from "../components/Square.jsx"
import { calculateWinner } from "../Lib/calculateWinner.js"

export function Board({ xIsNext, squares, onPlay }) {
    const winnerInfo = calculateWinner(squares)
    const winner = winnerInfo?.winner
    const winningLine = winnerInfo?.line

    function handleClick(i) {
        if (winner || squares[i]) return

        const nextSquares = squares.slice()
        nextSquares[i] = xIsNext ? 'X' : 'O'
        onPlay(nextSquares)
    }

    let status
    let statusClass = 'status-default'

    if (winner) {
        status = `🎉 Player ${winner} Wins!`
        statusClass = 'status-winner'
    } else if (squares.every(Boolean)) {
        status = "🤝 It's a Draw!"
        statusClass = 'status-draw'
    } else {
        status = `Next: Player ${xIsNext ? 'X' : 'O'}`
        statusClass = xIsNext ? 'status-x' : 'status-o'
    }

    function renderSquare(i) {
        const isWinning = winningLine?.includes(i)
        return (
            <Square
                key={i}
                value={squares[i]}
                onSquareClick={() => handleClick(i)}
                highlight={isWinning}
                disabled={!!winner || !!squares[i]}
            />
        )
    }

    return (
        <div className="board-wrapper">
            <div className={`game-status ${statusClass}`}>
                {status}
            </div>

            <div className="board-grid">
                {Array.from({ length: 9 }, (_, i) => renderSquare(i))}
            </div>
        </div>
    )
}
