import "../App.css"

export function ErrorMessage({ message }) {
  return (
    <div style={{ color: "red", marginTop: "10px" }}>
      {message}
    </div>
  );
}
