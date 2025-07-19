import { styles } from "../styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import arrowLeft from "/src/assets/play.png";
import { useSoundManager } from "../utils/soundManager";
import VolumeBar from "../components/VolumeBar";
import soundOnIcon from "/src/assets/sound-on.png";
import soundOffIcon from "/src/assets/sound-off.png";
import trashIcon from "/src/assets/trash.png";
import ModalConfirm from "../components/ModalConfirm";
import { useLevels } from "../utils/levelContext";
import { useState } from "react";

export default function Setting() {
  const {
    isMusicOn,
    playMusic,
    stopMusic,
    musicVolume,
    setMusicVolume,
    isAccentOn,
    setIsAccentOn,
    playAccent,
    accentVolume,
    setAccentVolume,
  } = useSoundManager();
  const { unlockedLevels, setUnlockedLevels } = useLevels();
  const [showStep, setShowStep] = useState(null);

  const handleToggleBacksound = () => {
    playAccent();
    if (isMusicOn) {
      stopMusic(); // ini otomatis setIsMusicOn(false)
    } else {
      playMusic(); // ini otomatis setIsMusicOn(true)
    }
  };

  const handleClear = () => {
    setShowStep("confirm");
  };

  const handleConfirm = () => {
    // Reset level
    localStorage.removeItem("unlockedLevels");
    setUnlockedLevels(["easy"]);

    // Setelah reset, ubah state untuk menampilkan modal icon
    setShowStep("result");
  };

  const handleCancel = () => {
    setShowStep(null);
  };

  const handleCloseResult = () => {
    setShowStep(null);
  };

  const handleToggleAccent = () => {
    // toggle accent on/off
    playAccent(); // suara klik
    setIsAccentOn((prev) => !prev);
  };

  return (
    <section className={styles.sectionDetail}>
      {showStep === "confirm" && (
        <ModalConfirm
          message="Yakin ingin reset level? Progress level anda akan hilang!"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}

      {showStep === "result" && (
        <ModalConfirm
          message="Progres level berhasil direset!"
          onConfirm={handleCloseResult}
          onCancel={handleCloseResult}
          button={false}
        />
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0 }}
        className={styles.cardDetail}
      >
        {/* Tombol Kembali */}
        <Link to="/home" className={styles.buttonBack} onClick={playAccent}>
          <span className="text-lg inline-flex mr-1">
            <img
              src={arrowLeft}
              alt="arrow-left"
              className="sm:w-4 sm:h-4 w-3 h-3 rotate-180"
            />
          </span>
        </Link>

        <div className="w-full">
          <h1 className="text-md md:text-lg leading-6 tracking-wider text-[#fff]">
            Setting
          </h1>
          <hr className={styles.line} />

          {/* Toggle Backsound */}
          <div className="mt-10 flex items-center justify-between">
            <label className="text-white text-xs md:text-sm">BGM:</label>
            <button
              onClick={handleToggleBacksound}
              className={`eightbit-btn text-white px-4 py-2 text-xs md:text-sm ${
                isMusicOn
                  ? "bg-[#92cd41] hover:bg-[#76c442] active:shadow-[inset_4px_4px_0_0_#166534] shadow-[inset_-4px_-4px_0_0_#4aa52e]"
                  : "bg-red-600 hover:bg-red-700 active:shadow-[inset_4px_4px_0_0_#7f1d1d] shadow-[inset_-4px_-4px_0_0_#8c2022]"
              }`}
            >
              {isMusicOn ? "ON" : "OFF"}
              <img
                src={isMusicOn ? soundOnIcon : soundOffIcon}
                className="inline-block w-5 h-5 ml-2"
              />
            </button>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <label className="text-white text-xs md:text-sm">Volume:</label>
            <VolumeBar
              value={musicVolume}
              onChange={(newValue) => {
                setMusicVolume(newValue);
                if (newValue === 0) {
                  if (isMusicOn) stopMusic();
                } else {
                  if (!isMusicOn) playMusic();
                }
              }}
              disabled={!isMusicOn} // 🔥 disable bar kalau musik OFF
            />
          </div>

          {/* Toggle Accent */}
          <div className="mt-10 flex items-center justify-between">
            <label className="text-white text-xs md:text-sm">SFX:</label>
            <button
              onClick={handleToggleAccent}
              className={`eightbit-btn text-white px-4 py-2 text-xs md:text-sm ${
                isAccentOn
                  ? "bg-[#92cd41] hover:bg-[#76c442] active:shadow-[inset_4px_4px_0_0_#166534] shadow-[inset_-4px_-4px_0_0_#4aa52e]"
                  : "bg-red-600 hover:bg-red-700 active:shadow-[inset_4px_4px_0_0_#7f1d1d] shadow-[inset_-4px_-4px_0_0_#8c2022]"
              }`}
            >
              {isAccentOn ? "ON" : "OFF"}
              <img
                src={isAccentOn ? soundOnIcon : soundOffIcon}
                className="inline-block w-5 h-5 ml-2"
              />
            </button>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <label className="text-white text-xs md:text-sm">Volume:</label>
            <VolumeBar
              value={accentVolume}
              onChange={(newValue) => {
                setAccentVolume(newValue);
                if (newValue === 0) {
                  if (isAccentOn) setIsAccentOn(false);
                } else {
                  if (!isAccentOn) setIsAccentOn(true);
                }
              }}
              disabled={!isAccentOn} // 🔥 disable bar kalau accent OFF
            />
          </div>
          <div className="mt-10 flex items-center justify-between">
            <label className="text-white text-xs md:text-sm">
              Reset Level:
            </label>
            <button
              onClick={() => {
                playAccent();
                handleClear();
              }}
              className="flex items-center px-4 py-2 text-xs md:text-sm bg-red-600 hover:bg-red-700 active:shadow-[inset_4px_4px_0_0_#7f1d1d] shadow-[inset_-4px_-4px_0_0_#8c2022]"
            >
              Clear
              <img src={trashIcon} className="w-6 h-6 ml-1" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
