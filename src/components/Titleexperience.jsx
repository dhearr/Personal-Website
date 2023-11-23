/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Titleexperience = () => {
  return (
    <>
      <div className="flex flex-col justify-start sm:justify-center sm:items-center">
        <motion.h1
          variants={textVariant()}
          className={`${styles.heroHeadText}`}
        >
          Career journey.
        </motion.h1>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-start sm:text-center font-medium mt-10 text-[20px] text-sky-200 max-w-3xl"
        >
          That is my career or work experience after graduating as a
          postgraduate student in the field of informatics engineering. Next I
          will pursue my dream and have a career as a front-end developer.
        </motion.p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="130"
          height="12"
          viewBox="0 0 130 12"
          fill="none"
          className="mt-16 mb-8 sm:mb-20"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={styles.pathFirstTitle}
            fill="#155E75"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={styles.pathSecondTitle}
            fill="url(#paint0_linear_48_920)"
            fillOpacity="0.3"
          />
          <defs>
            <linearGradient
              id="paint0_linear_48_920"
              x1="65"
              y1="0"
              x2="65"
              y2="5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#06B6D4" />
              <stop offset="1" stopColor="#22D3EE" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default SectionWrapper(Titleexperience, "work");
