import "../App.css";

export function InputDate({ input,word, characters }) {
  return (
    <div className="container">
      <h1>Word Counter</h1>
      <textarea
        onChange={(e) => input(e.target.value)}
        className="textInput"
        placeholder="Type or paste your text here..."
      ></textarea>
      <div className="stats">
        <p>
          <strong>Words:</strong> <span className="wordCount">{word || 0}</span>
        </p>
        <p>
          <strong>Characters:</strong>{" "}
          <span className="charCount">{characters || 0}</span>
        </p>
      </div>
    </div>
  );
}
