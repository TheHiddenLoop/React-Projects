import { useCallback, useState } from "react";

let toastId = 0;

export function useToast() {
  const [toast, setToast] = useState([]);
  const addToast = useCallback((message, type = "info", duration = 3000) => {
    const id = ++toastId;
    setToast((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToast((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);
  return { toast, addToast };
}
