import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { InputDate } from "./components/InputData";

function App() {
  const [text, setText] = useState("");
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  return (
    <InputDate
      input={setText}
      word={wordCount}
      characters={charCount}
      value={text}
    />
  );
}

export default App;
