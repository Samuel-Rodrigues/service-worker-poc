import { useEffect, useState } from "react";

/**
 * Gancho personalizado que rastreia o estado de visibilidade do documento.
 * Retorna um booleano indicando se o documento está em primeiro plano ou não.
 */
const useVisibilityChange = () => {
  const [isForeground, setIsForeground] = useState(true);
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsForeground(document.visibilityState === "visible");
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  return isForeground;
};
export default useVisibilityChange;
