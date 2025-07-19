import { motion } from "framer-motion";
import { credits } from "../data";
import { useEffect, useState } from "react";
import { useSoundManager } from "../utils/soundManager";
import ModalInfo from "../components/Modal-Info";

export default function Credits() {
  const { playMusic, stopMusic } = useSoundManager();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Hentikan audio apapun dulu
    stopMusic();
    // Mainkan musik credits
    playMusic("credits");

    // cegah tombol back
    const handlePopState = () => {
      window.history.pushState(null, "", window.location.href);
    };
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);

    const timer = setTimeout(() => {
      setShowModal(true);
    }, 55000);

    return () => {
      // ketika keluar dari credits
      stopMusic();
      playMusic("main");
      window.removeEventListener("popstate", handlePopState);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="fixed inset-0 bg-[#091F2A] bg-hero-pattern bg-cover text-white overflow-hidden flex justify-center">
      {/* modal info */}
      {showModal && (
        <ModalInfo
          content={`Terima kasih sudah menyempatkan waktu untuk melihat credits ini. Setiap nama yang tertera adalah bagian penting dari perjalanan saya. Jangan lupa ngoding hari ini!`}
          onClose={() => {
            // ketika user menekan tombol Play di modal
            setShowModal(false);
            // arahkan kembali ke halaman utama atau apa pun
            window.location.href = "/home"; // arahkan sesuai kebutuhanmu
          }}
          button={"Home"}
        />
      )}

      {/* konten credits */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "-300%" }}
        transition={{
          duration: 80,
          ease: "linear",
        }}
        className="flex flex-col items-center max-w-2xl space-y-6 text-xs md:text-sm px-6"
      >
        <h1 className="text-xl text-center sm:text-3xl font-bold mb-10">
          THANKS FOR COMING
        </h1>
        <h1 className="text-xl text-center sm:text-3xl font-bold mb-10">
          CREDITS:
        </h1>
        <ul>
          {credits.map((credit, i) => (
            <li key={i} className="mb-5 flex flex-col text-center leading-7">
              <span className="mb-4 text-[#42a8db]"> {credit.title}</span>
              {credit.name}
            </li>
          ))}
        </ul>
        <p className="text-xs mt-14 text-center leading-7">
          Saya pribadi memohon maaf yang sebesar‑besarnya apabila ada nama,
          pihak, atau sumber daya yang belum tercantum dalam daftar credit ini.
          Setiap kontribusi sangat saya hargai, dan saya mengucapkan terima
          kasih yang tulus kepada semua yang telah membantu dalam proses
          pengembangan ini.
        </p>
        <p className="text-xs mt-16 text-center leading-7">
          Copyright &copy; 2025 | DHEA RAMDANI
        </p>
      </motion.div>
    </section>
  );
}
