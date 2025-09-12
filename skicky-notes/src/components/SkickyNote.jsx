import { useRef, useEffect } from "react";
import { NoteCard } from "./NoteCard";

export default function SkickyNote({ divs, setDivs }) {
  const constraintsRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) {
      setDivs(JSON.parse(saved));
    }
  }, [setDivs]);

  return (
    <div className="h-screen w-screen flex-1 mt-[65px] relative overflow-hidden">
      <div ref={constraintsRef} className="h-full w-full relative">
        {divs.map((div, i) => (
          <NoteCard
            key={div.id}
            div={div}
            index={i}
            constraintsRef={constraintsRef}
            divs={divs}
            setDivs={setDivs}
          />
        ))}
      </div>
    </div>
  );
}
