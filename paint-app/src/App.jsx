import { useEffect, useRef, useState } from "react";
import { Paints } from "./components/paints";
import "./app.css";

function App() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState("#6366f1");
  const [lineOpacity, setLineOpacity] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalAlpha = lineOpacity;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
  }, [lineColor, lineOpacity, lineWidth]);

  const startDrawing = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctxRef.current.beginPath();
    ctxRef.current.moveTo(x, y);
    setIsDrawing(true);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "my-painting.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  const endDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) {
      return;
    }

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctxRef.current.lineTo(x, y);
    ctxRef.current.stroke();
  };

  return (
    <div className="app">
      <div className="main-content">
        <aside className="sidebar">
          <Paints
            setLineColor={setLineColor}
            setLineOpacity={setLineOpacity}
            setLineWidth={setLineWidth}
            lineColor={lineColor}
            lineWidth={lineWidth}
            lineOpacity={lineOpacity}
          />

          <div className="action-buttons">
            <button className="btn btn-clear" onClick={clearCanvas}>
              Clear Canvas
            </button>
            <button className="btn btn-save" onClick={downloadImage}>
              Save Image
            </button>
          </div>
        </aside>

        <main className="canvas-area">
          <canvas
            ref={canvasRef}
            width={1149}
            height={633}
            className="canvas"
            onMouseDown={startDrawing}
            onMouseUp={endDrawing}
            onMouseMove={draw}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
