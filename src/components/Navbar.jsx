/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { motion } from "framer-motion";
import { navVariant } from "../utils/motion";
import { avatar } from "../../public/static/images";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScrollLink = () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom > 0) {
        setActive(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollLink);
    return () => {
      window.removeEventListener("scroll", handleScrollLink);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom > 0) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getNavbarTextColor = (sectionId) => {
    switch (sectionId) {
      case "about":
        return "#004E68";
      case "work":
        return "#fff";
      case "project":
        return "#CB014F";
      case "contact":
        return "#AFBDFF";
      default:
        return "";
    }
  };

  const getNavbarBackgroundColor = (sectionId) => {
    switch (sectionId) {
      case "about":
        return "rgb(89, 204, 242, 0.1)";
      case "work":
        return "rgb(7, 89, 133, 0.2)";
      case "project":
        return "rgb(136, 19, 55, 0.2)";
      case "contact":
        return "rgb(7, 42, 55, 0.3)";
      default:
        return "";
    }
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
    },
    exit: {
      scaleY: 0,
    },
  };

  const navbarStyle = {
    background: getNavbarBackgroundColor(activeSection),
    color: getNavbarTextColor(activeSection),
    transition: "background 0.5s ease-in-out",
  };

  const navigate = useNavigate();

  return (
    <>
      <motion.nav
        variants={navVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-transparent`}
      >
        <div
          className={` ${styles.navbarStyle} hidden lg:flex`}
          style={navbarStyle}
        >
          <ul className="list-none hidden sm:flex flex-row gap-[40px] text-[18px]">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.id
                    ? "set-show-bubble px-5 py-[2px]"
                    : "opacity-30"
                } font-medium cursor-pointer`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            <Link to="/Blogs" as="/Blogs">
              <li className="cursor-pointer opacity-30 font-medium">🔥blog</li>
            </Link>
          </ul>
        </div>
      </motion.nav>
      <div className="block lg:hidden fixed z-[9999] w-full p-2">
        <div className="flex justify-end w-full">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[40px] h-[40px] object-contain cursor-pointer absolute mt-5 mr-3"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`${!toggle ? "hidden" : "flex"} bg-cyan-50 rounded-xl`}
        >
          <ul className="ml-5 text-[#0E7490] font-semibold">
            <li className="mt-4">
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={avatar}
                alt="dhea ramdani"
              />
            </li>
            <li
              className="mt-5 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <a href="#about">About</a>
            </li>
            <li
              className="mt-5 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <a href="#work">Work Experience</a>
            </li>
            <li
              className="mt-5 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <a href="#project">Project</a>
            </li>
            <li
              className="mt-5 cursor-pointer mb-5"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <a href="#contact">Contact me</a>
            </li>
            <li
              className="mt-5 cursor-pointer mb-5"
              onClick={() => navigate("/blogs")}
            >
              🔥Blog
            </li>
          </ul>
        </motion.div>
      </div>
    </>
  );
}
