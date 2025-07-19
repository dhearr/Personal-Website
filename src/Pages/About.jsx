import { useState, useEffect } from "react";
import { styles } from "../styles";
import { FaLaravel, FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import { self } from "../data";
import arrowLeft from "/src/assets/play.png";
import { Link } from "react-router-dom";
import { PiFinnTheHumanFill } from "react-icons/pi";
import { useSoundManager } from "../utils/soundManager";
import ModalLevelSelect from "../components/ModalLevelSelect";
import ModalGameEasy from "../components/ModalGameEasy";
import { useLevels } from "../utils/levelContext";
// import ModalGameMedium, ModalGameHard, ModalGameExpert jika sudah ada nanti

export default function About() {
  const { playAccent } = useSoundManager();

  // 🔥 state untuk buka halaman
  const [isUnlocked, setIsUnlocked] = useState(false);

  // 🔥 state untuk level
  const [showLevelModal, setShowLevelModal] = useState(true);
  const [selectedLevel, setSelectedLevel] = useState(null);

  // 🔥 daftar level yang kebuka
  const { unlockedLevels, setUnlockedLevels } = useLevels();

  // Simpan setiap kali berubah
  useEffect(() => {
    localStorage.setItem("unlockedLevels", JSON.stringify(unlockedLevels));
  }, [unlockedLevels]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("unlockedLevels") || '["easy"]'
    );
    setUnlockedLevels(saved);
  }, []);

  // data card
  const cards = [
    {
      icon: <FaLaravel />,
      name: "Laravel",
      title:
        "I build modern and advanced website and applications with laravel, the php framework.",
    },
    {
      icon: <FaReact />,
      name: "React",
      title:
        "I use ReactJS, a modern JavaScript framework, while making dynamic and static website and applications.",
    },
  ];

  // 🔥 fungsi jika berhasil di level tertentu
  const handleSuccess = (level) => {
    setSelectedLevel(null);
    setIsUnlocked(true); // halaman About boleh tampil
    setShowLevelModal(false);

    // tambahkan level berikutnya ke unlockedLevels
    if (level === "easy" && !unlockedLevels.includes("medium")) {
      setUnlockedLevels((prev) => [...prev, "medium"]);
    }
    if (level === "medium" && !unlockedLevels.includes("hard")) {
      setUnlockedLevels((prev) => [...prev, "hard"]);
    }
    if (level === "hard" && !unlockedLevels.includes("expert")) {
      setUnlockedLevels((prev) => [...prev, "expert"]);
    }
  };

  // 🔥 fungsi jika gagal (misalnya salah terus sampai habis kesempatan)
  const handleFail = () => {
    // tutup modal soal, balik ke modal pilih level
    setSelectedLevel(null);
    setShowLevelModal(true);
    setIsUnlocked(false);
  };

  return (
    <section className={styles.sectionDetail}>
      {/* Modal pilih level */}
      {showLevelModal && !selectedLevel && (
        <ModalLevelSelect
          onSelect={(level) => {
            setSelectedLevel(level);
            setShowLevelModal(false);
          }}
          unlockedLevels={unlockedLevels}
        />
      )}

      {/* Modal Game */}
      {selectedLevel === "easy" && (
        <ModalGameEasy
          onClose={handleFail}
          onSuccess={() => handleSuccess("easy")}
        />
      )}
      {/* Nanti kalau sudah ada modal Medium:
      {selectedLevel === "medium" && (
        <ModalGameMedium
          onClose={handleFail}
          onSuccess={() => handleSuccess("medium")}
        />
      )} */}

      {/* Render konten About hanya jika sudah unlock */}
      {isUnlocked && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0 }}
          className={styles.cardDetail}
        >
          {/* Button Back */}
          <Link to="/home" className={styles.buttonBack} onClick={playAccent}>
            <span className="text-lg inline-flex mr-1">
              <img
                src={arrowLeft}
                alt="arrow-left"
                className="sm:w-4 sm:h-4 w-3 h-3 rotate-180"
              />
            </span>
          </Link>

          {/* About Me */}
          <div className="max-w-3xl">
            <h1 className="text-md md:text-lg tracking-wider text-[#fff]">
              About
            </h1>
            <hr className={styles.line} />
            <p className="text-xs md:text-sm md:leading-8 leading-7 text-[#C9C9C9]">
              {self.head}
            </p>
            <p className="text-xs md:text-sm md:leading-8 leading-7 text-[#C9C9C9] mt-5">
              {self.body}
            </p>
          </div>

          {/* I'am Doing */}
          <div className="mt-8 sm:mt-16 max-w-3xl">
            <div className="flex items-center">
              <span className="mr-4 text-xl sm:text-2xl bg-[#092B3A] rounded-md p-2 shadow-xl border border-[#113344]">
                <PiFinnTheHumanFill />
              </span>
              <h1 className="text-md md:text-lg text-[#fff]">
                What I&#39;m Doing?
              </h1>
            </div>
            <div className="grid lg:grid-cols-2 gap-5 mt-5">
              {cards.map((card) => (
                <div key={card.name} className={styles.borderCard}>
                  <div className={styles.card}>
                    <div className="flex justify-center items-center">
                      <span className="text-4xl sm:text-5xl">{card.icon}</span>
                    </div>
                    <div className="flex flex-col ml-0 sm:ml-4 mt-2 sm:mt-0 sm:text-start text-center sm:items-start items-center">
                      <h1 className="text-md sm:text-lg font-medium mb-2 text-[#fff]">
                        {card.name}
                      </h1>
                      <p className="text-xs md:text-sm md:leading-8 leading-7 font-normal text-[#C9C9C9]">
                        {card.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
