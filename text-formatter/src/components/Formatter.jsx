import { Button } from "./Button";
import "../App.css";
import { useState } from "react";
import { Clipboard, ClipboardCheck } from "lucide-react";
import { toast } from "react-hot-toast";

export function Formatter() {
  const [text, setText] = useState("");
  const [isBold, setBold] = useState(false);
  const [isItalic, setItalic] = useState(false);
  const [isUnderline, setUnderline] = useState(false);
  const [transform, setTransform] = useState("none");
  const [isCopy, setCopy] = useState(false);

  const handleChange = (e) => setText(e.target.value);

  const handleBold = () => setBold(!isBold);
  const handleItalic = () => setItalic(!isItalic);
  const handleUnderline = () => setUnderline(!isUnderline);
  const handleUppercase = () => setTransform("uppercase");
  const handleLowercase = () => setTransform("lowercase");
  const handleCapitalize = () => setTransform("capitalize");

  const applyTextTransform = (txt) => {
    switch (transform) {
      case "uppercase":
        return txt.toUpperCase();
      case "lowercase":
        return txt.toLowerCase();
      case "capitalize":
        return txt.replace(/\b\w/g, (c) => c.toUpperCase());
      default:
        return txt;
    }
  };

  const formattedText = applyTextTransform(text);

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedText)
      .then(() => {
        setCopy(true);
        setTimeout(() => setCopy(false), 2000);
        toast.success("Copied formatted text!");

      })
      .catch(() => toast.error("Failed to copy text."));
  };

  return (
    <div className="app-container">
      <h1>Text Formatter</h1>

      <div>
        <label>Enter your text:</label>
        <textarea
          className="inputText"
          placeholder="Type your text here..."
          spellCheck="false"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>

      <div>
        <label>Choose formatting options:</label>
        <div className="button-grid">
          <Button onClick={handleBold} name="Bold" />
          <Button onClick={handleItalic} name="Italic" />
          <Button onClick={handleUnderline} name="Underline" />
          <Button onClick={handleUppercase} name="UPPERCASE" />
          <Button onClick={handleLowercase} name="lowercase" />
          <Button onClick={handleCapitalize} name="Capitalize Words" />
        </div>
      </div>

      <div>
        <label>Formatted text:</label>
        <div
          className="formatted-output"
          style={{
            fontWeight: isBold ? "bold" : "normal",
            fontStyle: isItalic ? "italic" : "normal",
            textDecoration: isUnderline ? "underline" : "none",
          }}
        >
          {formattedText}
        </div>
        <div className="copy" onClick={handleCopy}>
          {isCopy ? <ClipboardCheck size={30} /> : <Clipboard size={30} />}
        </div>
      </div>
    </div>
  );
}
