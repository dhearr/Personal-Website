import { styles } from "../styles";
import { FaLaravel, FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import { self } from "../data";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { PiFinnTheHumanFill } from "react-icons/pi";

export default function About() {
  // Data Card
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

  return (
    <section className={styles.sectionDetail}>
      {/* Start Card Detail */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0 }}
        className={styles.cardDetail}
      >
        {/* Start Button Back */}
        <Link to="/home" className={styles.buttonBack}>
          <span className="text-lg inline-flex mr-1">
            <GoArrowLeft />
          </span>
        </Link>
        {/* End Button Back */}
        {/* Start About Me */}
        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl font-semibold leading-6 tracking-wider text-[#fff]">
            About
          </h1>
          <hr className={styles.line} />
          <p className="text-sm sm:text-md font-normal text-[#C9C9C9]">
            {self.head}
          </p>
          <p className="text-sm sm:text-md font-normal text-[#C9C9C9] mt-5">
            {self.body}
          </p>
        </div>
        {/* End About Me */}
        {/* Start I'am Doing */}
        <div className="mt-8 sm:mt-16 max-w-3xl">
          <div className="flex items-center">
            <span className="mr-4 text-xl sm:text-2xl bg-[#092B3A] rounded-md p-2 shadow-xl border border-[#113344]">
              <PiFinnTheHumanFill />
            </span>
            <h1 className="text-xl sm:text-2xl font-medium text-[#fff]">
              What I&#39;m Doing?
            </h1>
          </div>
          {/* Start Card */}
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
                    <p className="text-[13px] sm:text-sm font-normal text-[#C9C9C9]">
                      {card.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* End Card */}
        </div>
        {/* End I'am Doing */}
      </motion.div>
      {/* Start Card Detail */}
    </section>
  );
}
