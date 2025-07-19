import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useSoundManager } from "../utils/soundManager";
import heart from "/src/assets/heart.png";

export default function ModalGameEasy({ onClose, onSuccess, onFail }) {
  const { playAccent } = useSoundManager();
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState("");

  // Simpan hearts sebagai array of ids
  const [hearts, setHearts] = useState([0, 1, 2]);
  const inputRef = useRef(null);

  useEffect(() => {
    generateQuestion();
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const generateQuestion = () => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    setNum1(a);
    setNum2(b);
    setAnswer("");

    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleSubmit = () => {
    const correct = num1 + num2;
    const userAnswer = parseInt(answer);

    if (userAnswer === correct) {
      playAccent();
      onSuccess();
    } else {
      playAccent();
      // hapus heart terakhir dengan animasi
      if (hearts.length > 1) {
        setHearts((prev) => prev.slice(0, prev.length - 1));
        setAnswer("");
        generateQuestion();
      } else {
        // sudah tidak ada heart tersisa
        setHearts([]);
        onFail();
      }
    }
  };

  // Animasi untuk heart keluar
  const heartExit = {
    scale: [1, 1.5, 0], // membesar lalu hilang
    opacity: [1, 1, 0],
    rotate: [0, 90, 180],
    transition: { duration: 0.4, ease: "easeOut" },
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      <div className="relative bg-[#091F2A] border-4 border-[#006ba1] p-6 shadow-xl w-[90%] max-w-md text-center">
        <h2 className="text-white pixel-text text-lg mb-4">
          Jawab Soal Ini Dulu!
        </h2>
        <p className="text-white text-sm mb-4">
          Berapa hasil dari{" "}
          <span className="font-bold text-yellow-400">{num1}</span> +{" "}
          <span className="font-bold text-yellow-400">{num2}</span> ?
        </p>

        <input
          ref={inputRef}
          type="number"
          pattern="[0-9]*"
          value={answer}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          onChange={(e) => setAnswer(e.target.value)}
          required
          className="px-3 py-3 w-full rounded border border-[#006ba1] text-white text-xs focus:border-[#006ba1] focus:outline-none"
        />

        {/* Hearts dengan animasi */}
        <div className="flex justify-center mt-4 gap-1 text-xs">
          <AnimatePresence>
            {hearts.map((h) => (
              <motion.img
                key={h}
                src={heart}
                alt="heart"
                className="w-6 h-6"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={heartExit}
              />
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-4 gap-2">
          <button
            onClick={handleSubmit}
            disabled={answer.trim() === ""}
            className={`eightbit-btn text-white text-xs px-4 py-2 pixel-text transition-colors w-full ${
              answer.trim() === ""
                ? "bg-[#006ba1] shadow-[inset_-4px_-4px_0_0_#004e75] cursor-not-allowed opacity-50"
                : "bg-[#006ba1] hover:bg-[#008ecf] shadow-[inset_-4px_-4px_0_0_#004e75] active:shadow-[inset_4px_4px_0_0_#003752]"
            }`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
