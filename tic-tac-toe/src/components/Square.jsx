export function Square({ value, onSquareClick, highlight, disabled }) {
  let squareClass = "game-square"

  if (highlight) squareClass += " square-winning"
  if (value === "X") squareClass += " square-x"
  if (value === "O") squareClass += " square-o"
  if (disabled) squareClass += " square-disabled"

  return (
    <button className={squareClass} onClick={onSquareClick} disabled={disabled}>
      <span className="square-value">{value}</span>
    </button>
  )
}
