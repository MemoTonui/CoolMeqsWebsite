import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="submit"
      className={`py-4 px-6 bg-blue-gradient font-serif font-medium text-[18px] text-white outline-none ${styles} rounded-[10px]`}
    >
      Send Message
    </button>
  );
};

export default Button;
