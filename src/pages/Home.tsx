import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Newsletter, Posts, Sidebar } from "../components";
import HeaderFooterWrap from "../wrapper/HeaderFooterWrap";
import { setPageNo } from "../redux/features/stateSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const pageNo = searchParams.get("page");

  useEffect(() => {
    if (pageNo) {
      dispatch(setPageNo(pageNo));
    } else {
      dispatch(setPageNo("1"));
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="flex w-full gap-x-12 pt-12 md:pt-8 xl:pt-12 pb-12">
          <Posts />
          <Sidebar />
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default HeaderFooterWrap(Home);
