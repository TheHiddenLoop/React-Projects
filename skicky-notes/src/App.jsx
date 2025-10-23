import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SkickyNote from "./components/SkickyNote";

export default function App() {
  const [divs, setDivs] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  function handleAdd(color) {
    const newNote = { id: new Date().getTime(), color };
    setDivs((prevDivs) => {
      const updated = [...prevDivs, newNote];
      localStorage.setItem("notes", JSON.stringify(updated));
      return updated;
    });
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(divs));
  }, [divs]);

  return (
    <div className="h-screen w-screen notebook-bg flex flex-col">
      <Navbar handleAdd={handleAdd} />
      <SkickyNote divs={divs} setDivs={setDivs} />
    </div>
  );
}
