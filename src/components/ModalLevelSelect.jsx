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
      <div className="relative bg-[#091F2A] border-4 border-[#006ba1] p-6 rounded-lg shadow-xl w-[90%] max-w-md text-center">
        <h2 className="text-white pixel-text text-lg mb-4">Pilih Level</h2>

        <div className="flex flex-col gap-3">
          {["easy", "medium", "hard", "expert"].map((level) => (
            <button
              key={level}
              onClick={() => handleSelect(level)}
              className={`py-2 px-4 rounded pixel-text ${
                isUnlocked(level)
                  ? // aktif
                    level === "easy"
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : level === "medium"
                    ? "bg-yellow-600 hover:bg-yellow-700 text-white"
                    : level === "hard"
                    ? "bg-orange-600 hover:bg-orange-700 text-white"
                    : "bg-red-600 hover:bg-red-700 text-white"
                  : // non aktif
                    "bg-gray-400 text-gray-700 cursor-not-allowed"
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
              className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded pixel-text text-xs"
            >
              Batal
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
