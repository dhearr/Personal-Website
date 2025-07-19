import { useEffect, useState, useRef } from "react";
import useSound from "use-sound";
import typeSfx from "../assets/typing.mp3";
import { useSoundManager } from "../utils/soundManager";
import forwardIcon from "/src/assets/forward.png";

export default function ModalInfo({ onClose, content, button, icon }) {
  const fullText = content;

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(100);
  const [isDone, setIsDone] = useState(false);
  const [started] = useState(true);
  const typingRef = useRef(null);
  const [play] = useSound(typeSfx, { volume: 0.1 });

  // ✅ dari soundManager
  const { playAccent } = useSoundManager();

  // disable scroll belakang modal
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  // efek typing
  useEffect(() => {
    if (!started) return;
    if (index < fullText.length) {
      typingRef.current = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
        play();
      }, speed);
    } else {
      setIsDone(true);
    }
    return () => clearTimeout(typingRef.current);
  }, [index, fullText, speed, play, started]);

  const handleSkip = () => {
    setSpeed(40);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-end">
      {/* 🔒 Overlay hitam transparan yang blok klik di belakang */}
      <div className="absolute inset-0 bg-black bg-opacity-10" />

      {/* Konten modal */}
      <div
        className="
          relative bg-[#091F2A] border-t-4 border-[#006ba1] min-h-[250px] shadow-lg pixel-art
          w-full p-4 sm:p-8 flex flex-col
        "
      >
        {/* Area teks */}
        <div className="flex-1 overflow-hidden">
          <h2 className="text-white text-[10px] sm:text-xs whitespace-pre-line leading-6 sm:leading-6 pixel-text">
            {displayedText}
            <span className="animate-pulse">_</span>
          </h2>
        </div>

        {/* Tombol kanan bawah */}
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => {
              handleSkip();
              playAccent();
            }}
            disabled={isDone}
            className={`eightbit-btn text-white text-[10px] sm:text-xs px-3 py-1 flex items-center pixel-text transition-colors ${
              isDone
                ? "bg-[#222] text-white/50 cursor-not-allowed shadow-[inset_-4px_-4px_0_0_#111] active:shadow-none"
                : "bg-[#6b7280] hover:bg-[#4b5563] shadow-[inset_-4px_-4px_0_0_#374151] active:shadow-[inset_4px_4px_0_0_#1f2937]"
            }`}
          >
            SKIP
            <img
              src={forwardIcon}
              className={`w-3.5 h-3.5 ml-1 inline-block ${
                isDone ? "opacity-50" : "opacity-100"
              }`}
            />
          </button>

          {isDone && (
            <button
              onClick={() => {
                onClose();
                playAccent();
              }}
              className={`eightbit-btn text-white text-[10px] sm:text-xs px-3 py-1 pixel-text transition-colors bg-[#006ba1] hover:bg-[#008ecf] shadow-[inset_-4px_-4px_0_0_#004e75] active:shadow-[inset_4px_4px_0_0_#003752]`}
            >
              {button}
              {icon && <img src={icon} className="inline-block w-3 h-3 ml-1" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
