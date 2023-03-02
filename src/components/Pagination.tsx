import { useState } from "react";
import { posts } from "../data";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setPageNo } from "../redux/features/stateSlice";
import { RootState } from "../redux/store";

const Pagination = () => {
  const dispatch = useDispatch();
  const { pageNo } = useSelector((state: RootState) => state.state);
  const currentPage = Number(pageNo);
  const maxPage = Math.ceil(posts.length / 4);

  const handlePrev = (newPage: number) => {
    if (newPage > 0) {
      dispatch(setPageNo(String(newPage)));

      document.documentElement.scrollTo({
        top: 0,
        left: 0,
      });
    }
  };
  const handleNext = (newPage: number) => {
    if (newPage <= posts.length) {
      dispatch(setPageNo(String(newPage)));

      document.documentElement.scrollTo({
        top: 0,
        left: 0,
      });
    }
  };

  if (currentPage > maxPage) return null;

  return (
    <div className="py-4 md:py-[30px] mt-[70px] flex items-center justify-center">
      {currentPage > 1 && (
        <Link
          to={`?page=${currentPage - 1}`}
          onClick={() => handlePrev(currentPage - 1)}
          className="shadow-2 bg-primary py-2 px-4 text-xs lg:text-sm font-bold text-white"
        >
          Prev
        </Link>
      )}

      <span className="text-sm xs:px-2 xs:mx-2 px-3 mx-3">
        Page {currentPage} of {maxPage}
      </span>

      {currentPage < maxPage && (
        <Link
          to={`?page=${currentPage + 1}`}
          onClick={() => handleNext(currentPage + 1)}
          className="shadow-2 bg-primary py-2 px-4 text-xs lg:text-sm font-bold text-white"
        >
          Next
        </Link>
      )}
    </div>
  );
};

export default Pagination;
