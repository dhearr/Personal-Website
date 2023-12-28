import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { author } from "../data";
import Clock from "../components/Clock";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { styles } from "../styles";

export default function Hero() {
  // Toast Notify
  const notify = () => {
    toast.info("Welcome to the house ", {
      icon: "👋",
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <section className={styles.sectionHero}>
      <div className={styles.wrapperHero}>
        {/* Start Clock */}
        <div className="absolute top-5 right-5 sm:right-10">
          <Clock />
        </div>
        {/* End Clock */}
        {/* Start Name Logo */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="max-w-sm sm:max-w-xl text-center"
        >
          <h1 className={styles.authorName}>{author.name}</h1>
          <h2 className={styles.authorTitle}>{author.title}</h2>
        </motion.div>
        {/* End Name Logo */}
        {/* Start Button */}
        <Link to="/home">
          <button
            onClick={notify}
            className="animates mt-10 text-[18px] sm:text-[28px] font-rubik cursor-pointer text-center"
          >
            - Click to Start -
          </button>
        </Link>
        {/* End Button */}
      </div>
      {/* Start Background Gradient */}
      <div className={styles.bgGradient}></div>
      {/* End Background Gradient */}
    </section>
  );
}
