import React from "react";
import { Link } from "react-router-dom";

const Button = ({ styles }) => {
  return (
    <Link to='/about'>
      <button
        type="button"
        className={`py-4 px-6 bg-secondary font-serif font-medium text-[18px] text-white outline-none ${styles} rounded-[10px]`}
      >
        Learn More
      </button>
    </Link>
  );
};

export default Button;
