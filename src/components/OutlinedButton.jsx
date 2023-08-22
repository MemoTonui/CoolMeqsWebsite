import React from "react";
import { Link } from "react-router-dom";

const OutlinedButton = ({ styles }) => {
  return (
    <Link to="/about">
      <button
        type="button"
        className={`py-2 px-6  border border-1 border-secondary bg-white text-secondary hover:text-white hover:bg-secondary font-serif font-medium text-[15px]  outline-none ${styles} rounded-[30px]`}
      >
        Learn More ...
      </button>
    </Link>
  );
};

export default OutlinedButton;
