import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="submit"
      className={`py-2 px-6 bg-blue-gradient hover:border hover:border-1 hover:border-blue-gradient hover:bg-white hover:text-slate-800 font-serif font-medium text-[18px] text-white outline-none ${styles} rounded-[30px]`}
    >
      Send Message
    </button>
  );
};

export default Button;
