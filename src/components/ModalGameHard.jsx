import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSoundManager } from "../utils/soundManager";
import caracter from "/src/assets/caracter-1.gif";

const icons = ["🍎", "🍌", "🍇", "🍒", "🍍", "🥝"]; // 6 pasang

export default function ModalGameHard({ onClose, onSuccess }) {
  const { playAccent } = useSoundManager();
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);
  const [points, setPoints] = useState(0);

  // 🕒 Timer
  const [timeLeft, setTimeLeft] = useState(30);

  // inisialisasi kartu
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const doubled = [...icons, ...icons]; // buat pasangan
    const shuffled = doubled.sort(() => Math.random() - 0.5);
    setCards(shuffled);

    return () => (document.body.style.overflow = "auto");
  }, []);

  // ⏳ Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) {
      // waktu habis
      onClose();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onClose]);

  // cek jika semua kartu match
  useEffect(() => {
    if (matchedIndices.length === cards.length && cards.length > 0) {
      onSuccess();
    }
  }, [matchedIndices, cards, onSuccess]);

  const handleFlip = (index) => {
    if (
      flippedIndices.length === 2 ||
      flippedIndices.includes(index) ||
      matchedIndices.includes(index)
    ) {
      return;
    }

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      const [firstIdx, secondIdx] = newFlipped;
      if (cards[firstIdx] === cards[secondIdx]) {
        // cocok
        playAccent();
        setMatchedIndices((prev) => [...prev, firstIdx, secondIdx]);
        setPoints((prev) => prev + 100);
        setFlippedIndices([]);
      } else {
        setTimeout(() => {
          setFlippedIndices([]);
        }, 800);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      {/* overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      <div className="relative bg-[#091F2A] border-4 border-[#006ba1] p-6 shadow-xl w-[90%] max-w-lg text-center">
        <img
          src={caracter}
          alt="caracter"
          className="absolute -top-14 left-0 w-12 h-12"
        />
        <h2 className="text-white pixel-text text-sm mb-2">
          Memory Match Game
        </h2>
        <p className="text-white text-sm mb-2">
          Cocokkan semua pasangan kartu sebelum waktu habis!
        </p>

        {/* tampilkan poin & timer */}
        <div className="flex justify-between items-center mb-4 mt-4 text-xs">
          <p className="text-yellow-400">Poin: {points} / 600</p>
          <p className="text-white">{timeLeft} detik</p>
        </div>

        {/* grid kartu */}
        <div className="grid grid-cols-4 gap-2">
          {cards.map((icon, index) => {
            const isFlipped =
              flippedIndices.includes(index) || matchedIndices.includes(index);

            return (
              <motion.div
                key={index}
                className="relative w-full h-16 sm:h-20 cursor-pointer perspective"
                onClick={() => handleFlip(index)}
              >
                <motion.div
                  className="relative w-full h-full preserve-3d"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {/* sisi depan */}
                  <div className="absolute w-full h-full backface-hidden bg-[#006ba1] hover:bg-[#008ecf] text-white shadow-lg flex items-center justify-center text-2xl border-2">
                    ?
                  </div>
                  {/* sisi belakang */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white text-black shadow-lg flex items-center justify-center text-2xl border-2">
                    {icon}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
