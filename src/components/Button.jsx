import React from "react";
import { Link } from "react-router-dom";

const Button = ({ styles }) => {
  return (
    <Link to="#contact_us">
      <button
        type="button"
        className={`py-2 px-6 bg-secondary hover:border hover:border-1 hover:border-secondary hover:bg-white hover:text-secondary font-serif font-medium text-[15px] text-white outline-none ${styles} rounded-[30px]`}
      >
        Request Quote
      </button>
    </Link>
  );
};

export default Button;
