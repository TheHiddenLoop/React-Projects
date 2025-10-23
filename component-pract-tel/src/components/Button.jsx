export const Button = ({ disabled = false, children, onClick }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`rounded-lg font-bold px-5 py-2 w-5/6 text-white 
        ${
          disabled
            ? "bg-blue-200 cursor-not-allowed"
            : "bg-green-400 hover:bg-green-500 cursor-pointer"
        }`}
      >
        {children}
      </button>
    </div>
  );
};
