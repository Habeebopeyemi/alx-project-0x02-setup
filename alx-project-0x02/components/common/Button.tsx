import React from "react";
import type { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ sizes, shapes }) => {
  return (
    <button className={`bg-blue-500 ${sizes} text-white ${shapes}`}>
      click me
    </button>
  );
};

export default Button;
