import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import styles from "../style.js";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <nav className="w-full flex py-4 justify-between relative navbar">
          <img src={logo} alt="cool meqs" className="w-[124px] h-[64px]" />

          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[14px] hover:text-secondary active:text-secondary ${
                  index === navLinks.length - 1 ? "mr-1" : "mr-10"
                } text-slate-900`}
              >
                <Link to={nav.id}>
                  <a>{nav.title}</a>
                </Link>
              </li>
            ))}
            <Button styles="ml-24" />
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[24px] h-[24px]"
              onClick={() => setToggle((prev) => !prev)}
            />
            <div
              className={`${
                toggle ? "block" : "hidden"
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4 min-w-[150px] rounded-sm sidebar`}
            >
              <ul className="list-none flex flex-col   justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[14px] ${
                      index === navLinks.length - 1 ? "mr-1" : "mb-4"
                    } text-white`}
                  >
                    <Link to={nav.id}>
                      <a>{nav.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
