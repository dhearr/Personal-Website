import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { Link } from "react-router-dom";
import arrowLeft from "/src/assets/play.png";
import { MdWorkOutline } from "react-icons/md";
import { LuNetwork } from "react-icons/lu";
import { experience } from "../data";
import { useSoundManager } from "../utils/soundManager";
import GameGate from "../components/GameGate";

// Start Timeline Element
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#092b3a",
        color: "#fff",
        boxShadow: "0px 10px 10px -10px rgba(0, 0, 0, 0.5)",
        border: "1px solid #113344",
        paddingBottom: 0,
      }} // Style Card Element
      contentArrowStyle={{
        borderRight: "7px solid  rgb(245, 245, 245)",
      }} // Arrow Card Element
      iconStyle={{ background: "#092B3A" }} // Background Icon
      icon={<MdWorkOutline />} // Icon
    >
      <h1 className="text-sm font-medium">{experience.company_name}</h1>
      <h4 className="text-xs mb-4 mt-4">{experience.title}</h4>
      <h5 className="text-xs mb-3 text-[#C9C9C9]">{experience.points}</h5>
      <h5 className="text-[10px] text-[#797979]">{experience.date}</h5>
    </VerticalTimelineElement>
  );
};
// End Timeline Element

export default function Experience() {
  const { playAccent } = useSoundManager();
  return (
    <section className={styles.sectionDetail}>
      {/* Start Card Detail */}
      <GameGate>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0 }}
          className={styles.cardDetail}
        >
          {/* Start Button Back */}
          <Link to="/home" className={styles.buttonBack} onClick={playAccent}>
            <span className="text-lg inline-flex mr-1">
              <img
                src={arrowLeft}
                alt="arrow-left"
                className="sm:w-4 sm:h-4 w-3 h-3 rotate-180"
              />
            </span>
          </Link>
          {/* End Button Back */}
          {/* Start My Experience */}
          <div className="max-w-3xl">
            <h1 className="text-md md:text-lg tracking-wider text-[#fff]">
              Work Experience
            </h1>
            <hr className={styles.line} />
            <p className="text-xs md:text-sm md:leading-8 leading-7 text-[#C9C9C9]">
              {experience.description}
            </p>
          </div>
          {/* End My Experience */}
          {/* Start Experience*/}
          <div className="mt-8 sm:mt-16 max-w-3xl">
            <div className="flex items-center">
              <span className="mr-4 text-xl sm:text-2xl bg-[#092B3A] rounded-md p-2 shadow-xl border border-[#113344]">
                <LuNetwork />
              </span>
              <h1 className="text-md md:text-lg text-[#fff]">Experience</h1>
            </div>
            {/* Start TimeLine */}
            <VerticalTimeline layout={"1-column-left"} className="ml-0">
              {/* Start ExperienceCard */}
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
              ))}
              {/* End ExperienceCard */}
            </VerticalTimeline>
            {/* End TimeLine */}
          </div>
          {/* End Experience */}
        </motion.div>
      </GameGate>
      {/* End Card Detail */}
    </section>
  );
}
