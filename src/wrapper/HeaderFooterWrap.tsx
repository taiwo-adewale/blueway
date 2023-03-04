import React from "react";
import { useSelector } from "react-redux";

import { Header, Footer, ScrollToTop, Search } from "../components";
import { RootState } from "../redux/store";

const HeaderFooterWrap = (Component: React.ComponentType) =>
  function HOC() {
    const { isNavMobile } = useSelector((state: RootState) => state.state);
    return (
      <main
        className={`transition-all duration-300 relative ${
          isNavMobile ? "left-[300px] xl:left-0" : "left-0"
        }`}
      >
        <Header />
        <Search />

        <Component />

        <Footer />
        <ScrollToTop />
      </main>
    );
  };

export default HeaderFooterWrap;
