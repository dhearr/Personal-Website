import { useState } from "react";
import { menu, close } from "../assets";
import { motion } from "framer-motion";
import { avatar } from "../../public/static/images";
import { useNavigate } from "react-router-dom";
import { navVariant } from "../utils/motion";
import { menuLinks } from "../constants";

const Menu = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  return (
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
        variants={navVariant}
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
          {menuLinks.map((link) => (
            <li
              key={link.id}
              className="mt-5 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li
            className="mt-5 cursor-pointer mb-5"
            onClick={() => navigate("/blogs")}
          >
            🔥Blog
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Menu;
