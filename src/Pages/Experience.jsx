import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { MdWorkOutline } from "react-icons/md";
import { LuNetwork } from "react-icons/lu";
import { experience } from "../data";

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
      <h1 className="text-md sm:text-lg font-medium">
        {experience.company_name}
      </h1>
      <h4 className="text-sm mb-2">{experience.title}</h4>
      <h5 className="text-sm mb-3 text-[#C9C9C9]">{experience.points}</h5>
      <h5 className="text-xs text-[#797979]">{experience.date}</h5>
    </VerticalTimelineElement>
  );
};
// End Timeline Element

export default function Experience() {
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
        {/* Start My Experience */}
        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl font-semibold leading-6 tracking-wider text-[#fff]">
            Work Experience
          </h1>
          <hr className={styles.line} />
          <p className="text-sm sm:text-md font-normal text-[#C9C9C9]">
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
            <h1 className="text-xl sm:text-2xl font-medium text-[#fff]">
              Experience
            </h1>
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
      {/* End Card Detail */}
    </section>
  );
}
