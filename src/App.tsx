import React, { useEffect } from "react";
// import { Routes, Route } from "react-router";
import { useSelector } from "react-redux";

import { Header, Footer, ScrollToTop, Search } from "./components";
import { Home } from "./pages";
import { RootState } from "./redux/store";

const App = () => {
  const { isSearch, isNavMobile } = useSelector(
    (state: RootState) => state.state
  );

  useEffect(() => {
    const body = document.querySelector("body");

    if (body) {
      if (isSearch || isNavMobile) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }
  }, [isSearch]);

  return (
    <div>
      <Header />

      {isSearch && <Search />}

      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
      <Home />

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
