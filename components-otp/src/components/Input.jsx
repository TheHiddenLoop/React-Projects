import React from "react";

export const Input = React.forwardRef(({ value, onChange, onKeyDown }, ref) => {
  return (
    <div className="mb-2">
      <input
        ref={ref}
        type="text"
        maxLength="1"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="bg-blue-400 p-2 text-white font-bold rounded-lg w-10 text-center text-xl outline-none"
      />
    </div>
  );
});
