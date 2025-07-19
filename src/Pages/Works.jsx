import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { LuExternalLink } from "react-icons/lu";
import { work } from "../data";
import { MdLaptopChromebook } from "react-icons/md";

const ProjectCard = ({ name, description, tags, source_code_link }) => {
  // Styles Component Card
  return (
    <div className={styles.borderCard}>
      <div className={styles.card}>
        <div className="flex flex-col sm:text-start items-start">
          <h1
            onClick={() => window.open(source_code_link, "_blank")}
            className="inline-flex items-center text-lg sm:text-xl font-semibold mb-2 text-[#fff] cursor-pointer hover:scale-105"
          >
            {name}
            <span className="ml-2">
              <LuExternalLink />
            </span>
          </h1>
          <p className="text-[13px] sm:text-sm font-normal text-[#C9C9C9]">
            {description}
          </p>
          <div className="flex space-x-2 mt-2">
            {tags.map((tag) => (
              <p
                key={tag.name}
                style={{
                  fontSize: "10px",
                  color: tag.color,
                  fontWeight: "600",
                }}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Works() {
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
        {/* Start My Work */}
        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl font-semibold leading-6 tracking-wider text-[#fff]">
            My Work
          </h1>
          <hr className={styles.line} />
          <p className="text-sm sm:text-md font-normal text-[#C9C9C9]">
            {work.description}
          </p>
        </div>
        {/* End My Work */}
        {/* Start Project */}
        <div className="mt-8 sm:mt-16 max-w-3xl">
          <div className="flex items-center">
            <span className="mr-4 text-xl sm:text-2xl bg-[#092B3A] rounded-md p-2 shadow-xl border border-[#113344]">
              <MdLaptopChromebook />
            </span>
            <h1 className="text-xl sm:text-2xl font-medium text-[#fff]">
              Project
            </h1>
          </div>
        </div>
        {/* Start Card Project */}
        <div className="grid lg:grid-cols-2 gap-5 mt-5">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        {/* End Card Project */}
        {/* End Project */}
      </motion.div>
      {/* Start Card Detail */}
    </section>
  );
}
