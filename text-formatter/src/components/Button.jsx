export function Button({ name, onClick }) {
  return (
    <button onClick={onClick} className="format-button">
      {name}
    </button>
  );
}
