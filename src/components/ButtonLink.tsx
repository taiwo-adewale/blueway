import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setIsNavMobile } from "../redux/features/stateSlice";

interface ButtonType {
  children: React.ReactNode;
  urlTo: string;
  classNames?: string;
}

const ButtonLink = ({ children, urlTo, classNames }: ButtonType) => {
  const dispatch = useDispatch();
  return (
    <Link
      to={urlTo}
      className="bg-white text-[13px] xl:text-[15px] font-medium relative group inline-block"
      onClick={() => dispatch(setIsNavMobile(false))}
    >
      <span
        className={`relative inset-0 bg-btnPrimary py-2.5 px-7 text-white whitespace-nowrap inline-block group-hover:-translate-x-[5px] group-hover:-translate-y-[5px] transition-all duration-300 ${
          classNames ? classNames : ""
        }`}
      >
        {children}
      </span>

      <div className="absolute inset-0 border-[2px] border-btnPrimary"></div>
    </Link>
  );
};

export default ButtonLink;
