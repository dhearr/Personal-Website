/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react-refresh/only-export-components */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full border-card-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={`${styles.bgServicesCard}`}
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-[#004A75] tex-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} mt-12 text-[#093853]`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} text-[#093853]`}>
          Overview.
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#000000] text-[17px] max-w-3xl leading-[30px]"
      >
        I am a junior frontend developer, I have mastered front-end technologies
        such as HTML , CSS, and JavaScript, I am experienced in developing
        responsive web interfaces.
      </motion.p>

      <div className="mt-14 flex flex-wrap gap-10">
        {services.map((service, index, title) => (
          <ServiceCard key={(service, title)} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
