import React, { useEffect, useRef } from "react";
import { HiX } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { Tags } from ".";
import { setIsSearch } from "../redux/features/stateSlice";

const Search = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) throw Error("inputRef is not assigned");

    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const handleEscPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch(setIsSearch(false));
      }
    };

    document.addEventListener("keydown", handleEscPress);

    return () => document.removeEventListener("keydown", handleEscPress);
  }, []);

  return (
    <div className="fixed h-screen w-full flex justify-center items-center inset-0 bg-white z-[99]">
      <div
        onClick={() => dispatch(setIsSearch(false))}
        className="fixed right-2 top-2 p-2 cursor-pointer"
      >
        <HiX className="w-8 h-8 fill-btnPrimary" />
      </div>

      <div className="container">
        <div className="flex flex-col text-center items-center">
          <p className="hidden lg:block text-[20px] font-bold mb-10 text-btnPrimary">
            Press <span className="text-primary">Esc</span> to close
          </p>

          <form action="" className="w-full mb-4">
            <div className="w-full md:w-[90%] relative mx-auto">
              <input
                ref={inputRef}
                type="search"
                className="w-full pr-[50px] bg-mainBg placeholder:text-sm placeholder:tracking-normal py-4 px-6 h-[45px] input-shadow"
                placeholder="Type to start your search..."
              />

              <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 cursor-pointer">
                <FaSearch className="fill-primary" />
              </button>
            </div>
          </form>

          <p className="mt-[100px] text-lg mb-4 text-btnPrimary tracking-normal">
            Or check our Popular Categories...
          </p>

          <Tags fontSize={12} />
        </div>
      </div>
    </div>
  );
};

export default Search;
