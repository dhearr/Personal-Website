import { motion } from "framer-motion";
import { styles } from "../styles";
import { avatar } from "../../public/static/images";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { contacts } from "../data";
import { MdTouchApp } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

export default function Contact() {
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
        {/* Start Header Contact */}
        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl font-semibold leading-6 tracking-wider text-[#fff]">
            Contact
          </h1>
          <hr className={styles.line} />
          {contacts.description.map((contact, index) => (
            <p
              key={index}
              className="text-md sm:text-xl font-normal text-[#C9C9C9]"
            >
              {contact.title}
            </p>
          ))}
        </div>
        {/* End Header Contact */}
        {/* Start Get In Touch */}
        <div className="mt-8 sm:mt-16 max-w-3xl">
          <div className="flex items-center">
            <span className="mr-4 text-xl sm:text-2xl bg-[#092B3A] rounded-md p-2 shadow-xl border border-[#113344]">
              <MdTouchApp />
            </span>
            <h1 className="text-xl sm:text-2xl font-medium text-[#fff]">
              Get In Touch
            </h1>
          </div>
        </div>
        {/* End Get In Touch */}
        {/* Start Contact Me */}
        <div className="flex flex-col sm:flex-row my-10">
          <div className="flex justify-center items-center">
            <div className="relative">
              <img
                className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full"
                src={avatar}
                alt="dhea ramdani"
              />
              <span className="absolute h-3 w-3 bg-green-600 rounded-full left-[55px] sm:left-[60px] bottom-1 sm:bottom-1"></span>
              <span className="absolute h-3 w-3 bg-green-500 rounded-full left-[55px] sm:left-[60px] bottom-1 sm:bottom-1 animate-ping"></span>
            </div>
          </div>
          {contacts.contact.map((contact, index) => (
            <div
              key={index}
              className="flex flex-col ml-0 sm:ml-4 mt-2 sm:mt-0 sm:text-start text-center sm:items-start items-center"
            >
              <h1 className="text-md sm:text-lg font-medium mb-1 text-[#fff]">
                {contact.title}
              </h1>
              <a
                href="mailto:dhearr27@gmail.com"
                className="inline-flex items-center text-[13px] sm:text-sm font-normal text-[#C9C9C9] mb-1"
              >
                <span className="text-xl sm:text-2xl mr-1">
                  <IoIosMail />
                </span>
                {contact.email}
              </a>
              <a
                href="https://instagram.com/dherrrrrrrrrrrr/"
                target="blank"
                className="inline-flex items-center text-[13px] sm:text-sm font-normal text-[#C9C9C9]"
              >
                <span className="text-xl sm:text-2xl mr-1">
                  <RiInstagramFill />
                </span>
                {contact.instagram}
              </a>
            </div>
          ))}
        </div>
        {/* End Contact Me */}
      </motion.div>
      {/* Start Card Detail */}
    </section>
  );
}
