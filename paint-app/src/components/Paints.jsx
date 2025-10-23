import { Palette, Brush, Droplets } from "lucide-react";

export const Paints = ({
  setLineColor,
  setLineWidth,
  setLineOpacity,
  lineColor,
  lineWidth,
  lineOpacity,
}) => {
  const colorPalette = [
    "#6366f1",
    "#8b5cf6",
    "#ec4899",
    "#ef4444",
    "#f97316",
    "#eab308",
    "#22c55e",
    "#06b6d4",
    "#3b82f6",
    "#64748b",
    "#1f2937",
    "#ffffff",
    "#000000",
    "#7c3aed",
    "#dc2626",
    "#059669",
  ];

  return (
    <div className="tools">
      <div className="tool-section">
        <label className="tool-label">
          <Palette size={16} />
          Colors
        </label>
        <div className="color-palette">
          {colorPalette.map((color, index) => (
            <button
              key={index}
              className={`palette-color ${lineColor === color ? "active" : ""}`}
              style={{ backgroundColor: color }}
              onClick={() => setLineColor(color)}
              title={color}
            />
          ))}
        </div>
      </div>

      <div className="tool-section">
        <label className="tool-label">
          <Brush size={16} />
          Brush Width
        </label>
        <div className="slider-container">
          <input
            type="range"
            min="1"
            max="50"
            value={lineWidth}
            onChange={(e) => setLineWidth(e.target.value)}
            className="range-input"
          />
          <span className="slider-value">{lineWidth}px</span>
        </div>
      </div>

      <div className="tool-section">
        <label className="tool-label">
          <Droplets size={16} />
          Opacity
        </label>
        <div className="slider-container">
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            value={lineOpacity}
            onChange={(e) => setLineOpacity(Number.parseFloat(e.target.value))}
            className="range-input"
          />
          <span className="slider-value">{Math.round(lineOpacity * 100)}%</span>
        </div>
      </div>
    </div>
  );
};
