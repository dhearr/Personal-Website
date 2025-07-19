import { menuLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { container, item } from "../utils/motion";
import Clock from "../components/Clock";
import { BsCaretRight } from "react-icons/bs";
import { styles } from "../styles";
import { useSoundManager } from "../utils/soundManager";
import ModalInfo from "../components/Modal-Info";
import { useEffect, useState } from "react";
import caracter from "/src/assets/caracter-1.gif";
import caracterClimb from "/src/assets/climb.gif";
import playIcon from "/src/assets/play.png";

export default function Home() {
  const location = useLocation();
  const { state } = location;
  const [showModal, setShowModal] = useState(false);
  const { playAccent } = useSoundManager();

  // cek state dari navigate
  useEffect(() => {
    if (state?.showModal) {
      setShowModal(true); // tampilkan modal dulu
    }
  }, [state]);

  return (
    <section className={styles.sectionHero}>
      {/* kalau showModal true, tampilkan modal */}
      {showModal && (
        <ModalInfo
          content={
            "Halo, Selamat Datang...\n\nWebsite ini adalah portfolio yang berisi hasil kerja, eksperimen, dan pengalaman saya. Silakan jelajahi dan nikmati! Terima kasih sudah berkunjung."
          }
          button={"Play"}
          onClose={() => setShowModal(false)}
          icon={playIcon}
        />
      )}

      {/* kalau showModal false, tampilkan konten utama */}
      {!showModal && (
        <div className={styles.wrapperHero}>
          {/* Clock */}
          <div className="absolute top-5 right-5 sm:right-10">
            <Clock />
          </div>

          {/* Name Logo */}
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-center"
          >
            <span className="block md:inline text-4xl sm:text-6xl lg:block">
              DHEA
            </span>
            <span className="inline-block text-4xl sm:text-6xl md:ml-2 lg:block lg:ml-0">
              <span className="relative inline-block text-4xl sm:text-6xl">
                <img
                  src={caracter}
                  alt="caracter"
                  className="absolute -top-9 sm:-top-14 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-12 sm:h-12"
                />
                R
              </span>
              AMDAN
              <span className="relative inline-block text-4xl sm:text-6xl">
                <img
                  src={caracterClimb}
                  alt="caracterClimb"
                  className="absolute top-9 sm:top-14 left-6 sm:left-10 -translate-x-1/2 w-8 h-8 sm:w-12 sm:h-12"
                />
                I
              </span>
            </span>
          </motion.div>

          {/* Menu */}
          <div className="mt-5">
            <motion.ul
              variants={container()}
              initial="hidden"
              animate="visible"
            >
              {menuLinks.map((menu) => (
                <Link key={menu.id} to={`/${menu.id}`}>
                  <motion.li
                    variants={item()}
                    className={styles.menuTitle}
                    onClick={playAccent}
                  >
                    <span className={styles.arrowTitle}>
                      <BsCaretRight />
                    </span>
                    {menu.title}
                  </motion.li>
                </Link>
              ))}
            </motion.ul>
          </div>
        </div>
      )}

      <div className={styles.bgGradient}></div>
    </section>
  );
}
