import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

export default function Hero() {
  return (
    <section className="w-full mx-auto">
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start pt-24`}
      >
        <div className="flex flex-col justify-center items-center mt-5 mr-3 relative z-10">
          <motion.div
            variants={textVariant()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-5 h-5 rounded-full bg-[#0891B2]"
          />
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="w-1 sm:h-64 h-44 violet-gradient"
          />
        </div>
        <div className="z-10">
          <h1 className={`${styles.textName}`}>dhea ramdani.</h1>
          <h1 className={`${styles.textSlug}`}>
            happy the world of programming, especially front end developer
          </h1>
          <p className={`${styles.heroSubText} font-normal`}>
            want to become an expert in the field of{" "}
            <span className="font-semibold">software engineering</span> and{" "}
            <span className="font-semibold">front end developer.</span>
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#B3DDEB] to-transparent w-full h-full absolute top-0 left-0 z-0"></div>
    </section>
  );
}
