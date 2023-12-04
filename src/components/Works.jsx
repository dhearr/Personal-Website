/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
      <div className={`${styles.borderCardProject}`}>
        <div className={`${styles.bgCardProject}`}>
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-rose-100 font-bold text-[24px]">{name}</h3>
            <p className="text-rose-50 mt-2 text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            {tags.map((tag) => (
              <img
                key={tag.name}
                src={tag.image}
                alt={tag.name}
                className="w-6 h-6"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-rose-50`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-rose-50`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-rose-50 text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly describe with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with diferent technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="scrollX mt-20 flex overflow-x-auto max-h-full">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
