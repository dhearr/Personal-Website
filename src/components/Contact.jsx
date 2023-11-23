/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col">
        <motion.div variants={textVariant()} className="">
          <p
            className={`${styles.sectionSubText} bg-clip-text text-transparent bg-gradient-to-t from-[#CFFAFE] to-[#0C4A6E]`}
          >
            get in touch
          </p>
          <h3
            className={`${styles.sectionHeadText} bg-clip-text text-transparent bg-gradient-to-t from-[#CFFAFE] to-[#0C4A6E]`}
          >
            Contact.
          </h3>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mt-10"
        >
          <h1 className={`${styles.textSlug} text-[#CFFAFE]`}>
            Suka ngoding, mau ngoding bareng?
            <br />
            Have any project ideas?
            <br />
            Ask something?
          </h1>

          <div className={styles.warpElementContact}>
            <div className="relative">
              <img
                className="w-[95px] h-[100px] sm:w-[115px] sm:h-[120px] rounded-full"
                src="/src/assets/avatar.jpg"
                alt="dhea ramdani"
              />
              <span className={styles.elementRocket}>🚀</span>
            </div>
            <div>
              <p className="text-[24px] font-semibold text-[#38BDF8]">
                Contact me via
              </p>
              <div className="flex flex-col mt-2">
                <a
                  className="text-[#CFFAFE] text-[20px] font-medium hover:underline"
                  href="mailto:dhearr27@gmail.com"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-envelope-fill inline-flex mr-2"
                      viewBox="0 0 16 16"
                    >
                      <path d={styles.pathEmail} />
                    </svg>
                  </span>
                  dhearr27@gmail.com
                </a>
                <a
                  className="text-[#CFFAFE] text-[20px] font-medium hover:underline"
                  href="https://www.instagram.com/dherrrrrrrrrrrr/"
                  target="blank"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-instagram inline-flex mr-2"
                      viewBox="0 0 16 16"
                    >
                      <path d={styles.pathInstagram} />
                    </svg>
                  </span>
                  @dherrrrrrrrrrrr
                </a>
              </div>
            </div>
          </div>
          <footer className="mt-36 text-[18px] text-[#0E7490]">
            <p>
              Made with React and this design follows
              <a
                href="https://helmisatria.com/"
                className="underline mx-1 font-semibold"
                target="blank"
              >
                Helmi Satria
              </a>
              Figma design but there are several changes.
            </p>
          </footer>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
