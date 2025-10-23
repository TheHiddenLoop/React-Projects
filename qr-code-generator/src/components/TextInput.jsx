export function TextInput({ value, onChange }) {
  return (
    <div className="text-input-container">
      <label className="text-input-label">Enter text or URL:</label>
      <input
        type="text"
        className="text-input-field"
        value={value}
        onChange={onChange}
        placeholder=""
      />
    </div>
  );
}
