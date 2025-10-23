import { useToast } from "./hooks/useToast";
import Container from "./components/Container";

function App() {
  const { toast, addToast } = useToast();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">Toast Demo</h1>

      <div className="flex gap-4">
        <button
          onClick={() => addToast("Info toast!", "info")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded shadow transition"
        >
          Show Info
        </button>

        <button
          onClick={() => addToast("Success toast!", "success")}
          className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded shadow transition"
        >
          Show Success
        </button>

        <button
          onClick={() => addToast("Warning toast!", "warning")}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded shadow transition"
        >
          Show Warning
        </button>

        <button
          onClick={() => addToast("Error toast!", "error")}
          className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded shadow transition"
        >
          Show Error
        </button>
      </div>

      <Container toast={toast} />
    </div>
  );
}

export default App;
