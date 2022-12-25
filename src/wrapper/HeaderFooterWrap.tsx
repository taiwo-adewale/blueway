import React from "react";
import { useSelector } from "react-redux";

import { Header, Footer, ScrollToTop, Search } from "../components";
import { RootState } from "../redux/store";

const HeaderFooterWrap = (Component) =>
  function HOC() {
    const { isNavMobile, isSearch } = useSelector(
      (state: RootState) => state.state
    );
    return (
      <div
        className={`transition-all duration-300 ${
          isNavMobile ? "translate-x-[300px] xl:translate-x-0" : ""
        }`}
      >
        <Header />
        {isSearch && <Search />}

        <Component />

        <Footer />
        <ScrollToTop />
      </div>
    );
  };

export default HeaderFooterWrap;
