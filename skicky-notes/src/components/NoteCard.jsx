import { Pencil, Check, Trash } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function NoteCard({ div, index, constraintsRef, divs, setDivs }) {
  const [isEnable, setIsEnable] = useState(false);
  const [title, setTitle] = useState(div.title || "Reminder");
  const [content, setContent] = useState(
    div.content || "Finish your project and push to GitHub 🚀"
  );

  const saveChanges = (newTitle, newContent) => {
    const updated = divs.map((d) => {
      if (d.id === div.id)
        return { ...d, title: newTitle, content: newContent, color: d.color };
      return d;
    });
    setDivs(updated);
    localStorage.setItem("notes", JSON.stringify(updated));
  };

  const handleDelete = () => {
    const updated = divs.filter((d) => d.id !== div.id);
    setDivs(updated);
    localStorage.setItem("notes", JSON.stringify(updated));
  };

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      style={{ backgroundColor: div.color }}
      className="absolute shadow-md rounded-md p-4 w-[300px] h-[200px] cursor-grab active:cursor-grabbing"
      initial={{ top: 40 + index * 50, left: 40 + index * 50 }}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => saveChanges(title, content)}
          readOnly={!isEnable}
          className={`outline-none border-b ${
            isEnable ? "border-gray-600" : "border-transparent"
          } bg-transparent font-bold text-gray-800 text-lg w-full`}
        />
        <div
          className="cursor-pointer bg-white p-[4px] rounded-full shadow hover:shadow-md transition-shadow duration-200 flex items-center justify-center"
          onClick={() => setIsEnable(!isEnable)}
        >
          {isEnable ? (
            <Check size={18} className="text-green-600" />
          ) : (
            <Pencil size={18} className="text-gray-600" />
          )}
        </div>
      </div>
      <div className="relative h-full">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onBlur={() => saveChanges(title, content)}
          readOnly={!isEnable}
          rows={5}
          maxLength={150}
          className={`outline-none resize-none w-full h-full bg-transparent text-gray-700`}
        />
        <div
          className={`absolute bottom-7 right-[-10px] cursor-pointer bg-white p-1 rounded-full shadow hover:shadow-md transition-shadow duration-200 `}
          onClick={handleDelete}
        >
          <Trash size={16} className="text-red-600" />
        </div>
      </div>
    </motion.div>
  );
}
