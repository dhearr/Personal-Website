import { motion } from "framer-motion";
import { author } from "../data";
import Clock from "../components/Clock";
import { styles } from "../styles";
import { useSoundManager } from "../utils/soundManager";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const { forcePlay, playAccent } = useSoundManager();
  const navigate = useNavigate();

  const handleStartClick = () => {
    forcePlay();
    playAccent();
    navigate("/home", { state: { showModal: true } });
  };

  return (
    <section className={styles.sectionHero}>
      <div className={styles.wrapperHero}>
        {/* Clock */}
        <div className="absolute top-5 right-5 sm:right-10">
          <Clock />
        </div>
        {/* Name Logo */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="max-w-sm sm:max-w-xl text-center"
        >
          <h1 className={styles.authorName}>{author.name}</h1>
        </motion.div>
        {/* Tombol Start */}
        <button
          onClick={handleStartClick}
          className="animates mt-10 text-xs sm:text-sm pixel-text cursor-pointer text-center"
        >
          - Click to Start -
        </button>
      </div>

      {/* Background Gradient */}
      <div className={styles.bgGradient}></div>
    </section>
  );
}
