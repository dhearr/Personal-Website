// src/components/ModalGameEasy.jsx
import { useState, useEffect } from "react";
import { useSoundManager } from "../utils/soundManager";

export default function ModalGameEasy({ onClose, onSuccess, onFail }) {
  const { playAccent } = useSoundManager();

  // state soal
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [attemptsLeft, setAttemptsLeft] = useState(3);

  useEffect(() => {
    generateQuestion();
    // disable scroll belakang
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const generateQuestion = () => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    setNum1(a);
    setNum2(b);
    setAnswer("");
  };

  const handleSubmit = () => {
    const correct = num1 + num2;
    const userAnswer = parseInt(answer);

    if (userAnswer === correct) {
      playAccent();
      onSuccess();
    } else {
      // salah
      playAccent();
      const remaining = attemptsLeft - 1;
      setAttemptsLeft(remaining);
      setError(`Jawaban salah! Kesempatan tersisa: ${remaining}`);
      setAnswer("");

      if (remaining <= 0) {
        // gagal total
        onFail();
      } else {
        generateQuestion();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      {/* Modal Box */}
      <div className="relative bg-[#091F2A] border-4 border-[#006ba1] p-6 rounded-lg shadow-xl w-[90%] max-w-md text-center">
        <h2 className="text-white pixel-text text-lg mb-4">
          Jawab Soal Ini Dulu!
        </h2>
        <p className="text-white text-sm mb-4">
          Berapa hasil dari{" "}
          <span className="font-bold text-yellow-400">{num1}</span> +{" "}
          <span className="font-bold text-yellow-400">{num2}</span> ?
        </p>

        <input
          type="number"
          pattern="[0-9]*"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="px-3 py-3 w-full rounded border border-[#006ba1] text-white text-xs focus:border-[#006ba1] focus:outline-none"
        />

        {error && (
          <p className="text-red-400 text-xs mt-2 pixel-text">{error}</p>
        )}

        <div className="flex justify-center mt-4 gap-2">
          <button
            onClick={() => {
              playAccent();
              onClose();
            }}
            className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded pixel-text text-xs"
          >
            Batal
          </button>
          <button
            onClick={handleSubmit}
            className="bg-[#006ba1] hover:bg-[#008ecf] text-white py-1 px-3 rounded pixel-text text-xs"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
