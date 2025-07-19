import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSoundManager } from "../utils/soundManager";

export default function ModalGameExpert({ onClose, onSuccess, onFail }) {
  const { playAccent } = useSoundManager();
  const gridSize = 4; // 4x4
  const totalCells = gridSize * gridSize;

  const [pattern, setPattern] = useState([]); // pola yang harus diingat
  const [userSelection, setUserSelection] = useState([]);
  const [showPattern, setShowPattern] = useState(false);
  const [activeCell, setActiveCell] = useState(null);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    startLevel(1);
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const startLevel = (lvl) => {
    const newPattern = generatePattern(lvl + 1); // jumlah kotak = level + 1
    setPattern(newPattern);
    setUserSelection([]);
    setShowPattern(true);

    // tampilkan pola satu per satu
    let i = 0;
    const interval = setInterval(() => {
      setActiveCell(newPattern[i]);
      setTimeout(() => setActiveCell(null), 500);
      i++;
      if (i >= newPattern.length) {
        clearInterval(interval);
        setTimeout(() => {
          setShowPattern(false);
        }, 500);
      }
    }, 800);
  };

  const generatePattern = (count) => {
    const arr = [];
    while (arr.length < count) {
      const rand = Math.floor(Math.random() * totalCells);
      if (!arr.includes(rand)) arr.push(rand);
    }
    return arr;
  };

  const handleClick = (index) => {
    if (showPattern) return; // belum boleh klik
    if (userSelection.includes(index)) return; // sudah diklik

    playAccent();
    const newSelection = [...userSelection, index];
    setUserSelection(newSelection);

    // cek jika jumlah klik sudah sama dengan pola
    if (newSelection.length === pattern.length) {
      // cek apakah cocok
      const isCorrect = pattern.every((p) => newSelection.includes(p));
      if (isCorrect) {
        if (level >= 5) {
          // misal target 5 level
          onSuccess?.();
          onClose();
        } else {
          setLevel((prev) => prev + 1);
          setTimeout(() => startLevel(level + 1), 1000);
        }
      } else {
        onFail?.();
        onClose();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      <div className="relative bg-[#091F2A] border-4 border-[#006ba1] p-6 shadow-xl w-[90%] max-w-lg text-center">
        <h2 className="text-white pixel-text text-lg mb-2">
          🧩 Pattern Memory
        </h2>
        <p className="text-white text-sm mb-2">
          Ingat pola kotak yang menyala, lalu klik kembali!
        </p>
        <p className="text-yellow-400 text-sm mb-4">Level: {level}</p>

        {/* grid */}
        <div
          className={`grid grid-cols-${gridSize} gap-2 justify-center`}
          style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
        >
          {Array.from({ length: totalCells }).map((_, idx) => {
            const isInPattern = pattern.includes(idx);
            const isActive = activeCell === idx;
            const isSelected = userSelection.includes(idx);

            return (
              <motion.button
                key={idx}
                onClick={() => handleClick(idx)}
                className={`w-full h-16 sm:h-20 border-2 shadow-md transition-colors ${
                  showPattern
                    ? isActive
                      ? "bg-yellow-400"
                      : "bg-[#004466]"
                    : isSelected
                    ? "bg-green-500"
                    : "bg-[#006ba1] hover:bg-[#008ecf]"
                }`}
                whileTap={{ scale: 0.9 }}
              ></motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
