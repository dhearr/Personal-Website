import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useSoundManager } from "../utils/soundManager";
import heart from "/src/assets/heart.png";

export default function ModalGameMedium({ onClose, onSuccess, onFail }) {
  const { playAccent } = useSoundManager();

  // hearts
  const [hearts, setHearts] = useState([0, 1, 2]);

  // angka soal
  const [firstA, setFirstA] = useState(0);
  const [secondA, setSecondA] = useState(0);
  const [firstB, setFirstB] = useState(0);

  // daftar pilihan
  const [choices, setChoices] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  // generate soal baru
  const generateQuestion = () => {
    // acak angka
    const a = Math.floor(Math.random() * 90) + 10; // 10-99
    const b = Math.floor(Math.random() * 90) + 10; // 10-99
    const a2 = Math.floor(Math.random() * 90) + 10; // angka kedua untuk duplicate key

    // buat jawaban benar
    const correct = `{ first: ${a2}, second: ${b} }`;

    // buat pilihan lain yang salah
    const wrong1 = `{ first: ${a}, second: ${b} }`;
    const wrong2 = `{ first: ${a}, second: ${b}, first: ${a2} }`;

    // acak urutan choices
    const newChoices = [correct, wrong1, wrong2].sort(
      () => Math.random() - 0.5
    );

    setFirstA(a);
    setSecondA(b);
    setFirstB(a2);
    setCorrectAnswer(correct);
    setChoices(newChoices);
  };

  useEffect(() => {
    generateQuestion();
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const handleAnswer = (selected) => {
    playAccent();
    if (selected === correctAnswer) {
      onSuccess();
    } else {
      if (hearts.length > 1) {
        setHearts((prev) => prev.slice(0, prev.length - 1));
      } else {
        setHearts([]);
        onFail();
      }
    }
  };

  const heartExit = {
    scale: [1, 1.5, 0],
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
          Apa yang akan menjadi keluaran dari potongan kode berikut?
        </p>

        <pre className="bg-[#001e2f] text-left text-xs text-green-400 p-2 rounded mb-4 overflow-x-auto">
          {`const obj1 = {first: ${firstA}, second: ${secondA}, first: ${firstB}};
console.log(obj1);`}
        </pre>

        {/* Pilihan jawaban */}
        <div className="flex flex-col gap-3">
          {choices.map((choice, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(choice)}
              className="eightbit-btn text-white text-xs px-4 py-2 pixel-text transition-colors bg-[#006ba1] hover:bg-[#008ecf] shadow-[inset_-4px_-4px_0_0_#004e75] active:shadow-[inset_4px_4px_0_0_#003752]"
            >
              {choice}
            </button>
          ))}
        </div>

        {/* hearts */}
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
      </div>
    </div>
  );
}
