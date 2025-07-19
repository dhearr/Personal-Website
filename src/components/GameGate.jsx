// src/components/GameGate.jsx
import { useState, useEffect } from "react";
import ModalLevelSelect from "./ModalLevelSelect";
import ModalGameEasy from "./ModalGameEasy";
import ModalGameMedium from "./ModalGameMedium";
import ModalGameHard from "./ModalGameHard";
import ModalGameExpert from "./ModalGameExpert";
import ModalConfirm from "./ModalConfirm";
import ModalInfo from "./Modal-Info";
import { useLevels } from "../utils/levelContext";
import { useSoundManager } from "../utils/soundManager";
import { useNavigate } from "react-router-dom";

export default function GameGate({ children }) {
  const { unlockedLevels, setUnlockedLevels } = useLevels();
  const { changeTrack } = useSoundManager();
  const navigate = useNavigate();

  const [showLevelModal, setShowLevelModal] = useState(true);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showInfoModal1, setShowInfoModal1] = useState(false);
  const [showInfoModal2, setShowInfoModal2] = useState(false);
  const [lastLevel, setLastLevel] = useState(null);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // load level
  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("unlockedLevels") || '["easy"]'
    );
    setUnlockedLevels(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("unlockedLevels", JSON.stringify(unlockedLevels));
  }, [unlockedLevels]);

  const handleSuccess = (level) => {
    setSelectedLevel(null);
    setShowLevelModal(false);
    setLastLevel(level);
    changeTrack("main");
    if (level === "expert") {
      setShowConfirmModal(false);
      setShowInfoModal1(true);
      return;
    }
    setShowInfoModal1(true);
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

  const handleFail = () => {
    setShowConfirmModal(true);
    setSelectedLevel(null);
    setIsUnlocked(false);
    changeTrack("main");
  };

  const handleConfirmAfterFail = () => {
    setShowConfirmModal(false);
    setShowLevelModal(true);
    setIsUnlocked(false);
  };

  const handleCancelAfterFail = () => {
    setShowConfirmModal(false);
    navigate("/home");
  };

  return (
    <>
      {showConfirmModal && (
        <ModalConfirm
          message="Kesempatan kamu sudah habis! Mau coba lagi?"
          onConfirm={handleConfirmAfterFail}
          onCancel={handleCancelAfterFail}
        />
      )}

      {showLevelModal && !selectedLevel && (
        <ModalLevelSelect
          onSelect={(level) => {
            setSelectedLevel(level);
            setShowLevelModal(false);
            changeTrack("game");
          }}
          unlockedLevels={unlockedLevels}
        />
      )}

      {selectedLevel === "easy" && (
        <ModalGameEasy
          onClose={handleFail}
          onSuccess={() => handleSuccess("easy")}
          onFail={handleFail}
        />
      )}
      {selectedLevel === "medium" && (
        <ModalGameMedium
          onClose={handleFail}
          onSuccess={() => handleSuccess("medium")}
          onFail={handleFail}
        />
      )}
      {selectedLevel === "hard" && (
        <ModalGameHard
          onClose={handleFail}
          onSuccess={() => handleSuccess("hard")}
          onFail={handleFail}
        />
      )}
      {selectedLevel === "expert" && (
        <ModalGameExpert
          onClose={() => setSelectedLevel(null)}
          onSuccess={() => handleSuccess("expert")}
          onFail={handleFail}
        />
      )}

      {showInfoModal1 && (
        <ModalInfo
          content={
            lastLevel === "easy"
              ? "Eits, tidak semudah itu Ferguso! Kamu berhasil menyelesaikan level Easy. Mau lanjut ke level Medium?"
              : lastLevel === "medium"
              ? "Wih keren! Kamu sudah menyelesaikan level Medium. Mau lanjut ke level Hard?"
              : lastLevel === "hard"
              ? "Hebat banget! Level Hard berhasil kamu taklukkan. Mau lanjut ke level Expert?"
              : lastLevel === "expert"
              ? "🔥 Keren banget! Kamu berhasil menyelesaikan level Expert! Kamu benar-benar luar biasa! 🔥"
              : "Kamu mau lanjut?"
          }
          button={lastLevel === "expert" ? "Oke!" : "Lanjut"}
          onClose={() => {
            setShowInfoModal1(false);
            if (lastLevel === "easy") {
              changeTrack("game");
              setSelectedLevel("medium");
            }
            if (lastLevel === "medium") {
              changeTrack("game");
              setSelectedLevel("hard");
            }
            if (lastLevel === "hard") {
              changeTrack("game");
              setSelectedLevel("expert");
            }
            if (lastLevel === "expert") {
              setIsUnlocked(true);
              changeTrack("main");
            }
          }}
          showCancel={lastLevel === "expert" ? false : true}
          cancelText="Tidak"
          onCancel={() => {
            setShowInfoModal1(false);
            setShowInfoModal2(true);
          }}
        />
      )}

      {showInfoModal2 && (
        <ModalInfo
          content={
            lastLevel === "easy"
              ? "Yah sayang sekali, padahal kalau kamu lanjut ke level Medium akan lebih seru. Tapi gapapa, selamat menjelajahi portfolio saya."
              : lastLevel === "medium"
              ? "Yah sayang sekali, padahal kalau kamu lanjut ke level Hard. Tantangannya makin asik. Tapi gapapa, selamat menjelajahi portofolio saya."
              : lastLevel === "hard"
              ? "Keren! Walau kamu tidak lanjut ke level Expert, kamu sudah hebat. Selamat menjelajahi portofolio saya."
              : "Selamat menikmati portofolio saya."
          }
          button="Oke!"
          onClose={() => {
            setShowInfoModal2(false);
            setIsUnlocked(true);
          }}
          showCancel={false}
        />
      )}

      {isUnlocked && children}
    </>
  );
}
