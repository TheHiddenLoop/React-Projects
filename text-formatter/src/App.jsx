import { Formatter } from "./components/Formatter";
import "./App.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Formatter />
    </>
  );
}

export default App;
