import { Link } from "react-router-dom";
import { useSoundManager } from "../utils/soundManager";

export default function ModalLevelSelect({ onSelect, unlockedLevels }) {
  const { playAccent } = useSoundManager();

  const isUnlocked = (level) => unlockedLevels.includes(level);

  const handleSelect = (level) => {
    if (!isUnlocked(level)) return; // kalau belum kebuka, jangan bisa klik
    playAccent();
    onSelect(level);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      {/* Modal Box */}
      <div className="relative bg-[#091F2A] border-4 border-[#006ba1] p-6 shadow-xl w-[90%] max-w-md text-center">
        <h2 className="text-white pixel-text text-lg mb-4">Pilih Level</h2>

        <div className="flex flex-col gap-3">
          {["easy", "medium", "hard", "expert"].map((level) => (
            <button
              key={level}
              onClick={() => handleSelect(level)}
              className={`py-2 px-4 pixel-text ${
                isUnlocked(level)
                  ? // aktif
                    level === "easy"
                    ? "bg-[#92cd41] hover:bg-[#76c442] active:shadow-[inset_4px_4px_0_0_#166534] shadow-[inset_-4px_-4px_0_0_#4aa52e] text-white px-4 py-2 pixel-text"
                    : level === "medium"
                    ? "bg-yellow-600 hover:bg-yellow-700 active:shadow-[inset_4px_4px_0_0_#854d0e] shadow-[inset_-4px_-4px_0_0_#facc15] text-white px-4 py-2 pixel-text"
                    : level === "hard"
                    ? "bg-orange-600 hover:bg-orange-700 active:shadow-[inset_4px_4px_0_0_#9a3412] shadow-[inset_-4px_-4px_0_0_#fdba74] text-white px-4 py-2 pixel-text"
                    : "bg-purple-600 hover:bg-purple-700 active:shadow-[inset_4px_4px_0_0_#581c87] shadow-[inset_-4px_-4px_0_0_#c084fc] text-white px-4 py-2 pixel-text"
                  : // non aktif
                    "bg-[#222] text-white/50 cursor-not-allowed shadow-[inset_-4px_-4px_0_0_#111] active:shadow-none"
              }`}
              disabled={!isUnlocked(level)}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex justify-center mt-4 gap-2">
          <Link to="/home">
            <button
              onClick={playAccent}
              className="eightbit-btn text-white text-xs px-4 py-2 pixel-text bg-[#6b7280] hover:bg-[#4b5563] shadow-[inset_-4px_-4px_0_0_#374151] active:shadow-[inset_4px_4px_0_0_#1f2937]"
            >
              Batal
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
