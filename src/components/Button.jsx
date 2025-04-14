import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-6 px-10 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Know More
  </button>
);

export default Button;
