import { menuLinks } from "../constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { container, item } from "../utils/motion";
import { author } from "../data";
import Clock from "../components/Clock";
import { BsCaretRight } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
import { styles } from "../styles";

export default function Home() {
  // Custom Style Background Toast
  const contextClass = {
    info: "bg-zinc-900",
    default: "bg-sky-600",
  };

  return (
    <section className={styles.sectionHero}>
      <div className={styles.wrapperHero}>
        {/* Start Toast */}
        <div>
          <ToastContainer
            toastClassName={({ type }) =>
              contextClass[type || "default"] + styles.notifToast
            }
          />
        </div>
        {/* End Toast */}
        {/* Start Clock */}
        <div className="absolute top-5 right-5 sm:right-10">
          <Clock />
        </div>
        {/* End Clock */}
        {/* Start Name Logo */}
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="max-w-sm sm:max-w-xl text-center"
        >
          <h1 className={styles.authorName}>{author.name}</h1>
          <h2 className={styles.authorTitle}>{author.title}</h2>
        </motion.div>
        {/* End Name Logo */}
        {/* Start Menu Link */}
        <div className="mt-5">
          <motion.ul variants={container()} initial="hidden" animate="visible">
            {menuLinks.map((menu) => (
              <Link key={menu.id} to={`/${menu.id}`}>
                <motion.li variants={item()} className={styles.menuTitle}>
                  <span className={styles.arrowTitle}>
                    <BsCaretRight />
                  </span>
                  {menu.title}
                </motion.li>
              </Link>
            ))}
          </motion.ul>
        </div>
        {/* End Menu Link */}
      </div>
      {/* Start Background Gradient */}
      <div className={styles.bgGradient}></div>
      {/* End Background Gradient */}
    </section>
  );
}
