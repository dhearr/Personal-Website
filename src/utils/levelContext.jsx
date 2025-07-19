import { createContext, useContext, useState, useEffect } from "react";

const LevelContext = createContext();

export function LevelProvider({ children }) {
  const [unlockedLevels, setUnlockedLevels] = useState(["easy"]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("unlockedLevels") || '["easy"]'
    );
    setUnlockedLevels(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("unlockedLevels", JSON.stringify(unlockedLevels));
  }, [unlockedLevels]);

  return (
    <LevelContext.Provider value={{ unlockedLevels, setUnlockedLevels }}>
      {children}
    </LevelContext.Provider>
  );
}

export function useLevels() {
  return useContext(LevelContext);
}
