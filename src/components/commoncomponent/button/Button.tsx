"use client";
import { buttonType } from "@/types/type";

const Button = ({
  buttonName,
  disabled,
  classname,
  handleClick,
  type,
}: buttonType) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`py-2 px-4 rounded-lg shadow-lg font-figtree text-base text-ashGray leading-6 font-medium   hover:bg-minCream hover:text-ashGray  transition-all duration-300 ${classname}`}
      disabled={disabled}
    >
      {buttonName}
    </button>
  );
};

export default Button;
