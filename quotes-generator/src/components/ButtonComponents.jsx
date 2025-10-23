export function ButtonComponents({ onClick, label = "Generate" }) {
  return (
    <div className="btn">
      <button onClick={onClick} className="quote-button">
        {label}
      </button>
    </div>
  );
}
