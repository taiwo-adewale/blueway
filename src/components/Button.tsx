import React from "react";

interface ButtonType {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  classNames?: string;
}

const Button = ({ children, type, classNames }: ButtonType) => {
  return (
    <button
      type={type || "button"}
      className="bg-white text-[13px] xl:text-[15px] font-medium relative group inline-block"
    >
      <span
        className={`relative inset-0 bg-btnPrimary py-2.5 px-7 text-white whitespace-nowrap inline-block group-hover:-translate-x-[5px] group-hover:-translate-y-[5px] transition-all duration-300 ${
          classNames ? classNames : ""
        }`}
      >
        {children}
      </span>

      <div className="absolute inset-0 border-[2px] border-btnPrimary"></div>
    </button>
  );
};

export default Button;
