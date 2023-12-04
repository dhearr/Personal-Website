/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
import { navVariant } from "../utils/motion";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function Navbar() {
  const [active, setActive] = useState("");
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

  const navbarStyle = {
    background: getNavbarBackgroundColor(activeSection),
    color: getNavbarTextColor(activeSection),
    transition: "background 0.5s ease-in-out",
  };

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
            <Link to="/blogs" as="/blogs">
              <li className="cursor-pointer opacity-30 font-medium">🔥blog</li>
            </Link>
          </ul>
        </div>
      </motion.nav>
      <Menu />
    </>
  );
}
