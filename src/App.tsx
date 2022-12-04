import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { Header, Footer, ScrollToTop, Search, Fixed } from "./components";
import { Home } from "./pages";
import Membership from "./pages/membership";
import Tag from "./pages/Tag";
import {Navbar} from "./components";
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
  }, [isSearch, isNavMobile]);

  return (
    <div
      className={`transition-all duration-300 ${
        isNavMobile ? "translate-x-[300px] xl:translate-x-0" : ""
      }`}
    >
      <Header />
      {isSearch && <Search />}

      {/*<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>*/}
       <Routes>
        <Route path="/" element={<Navbar />} />
        <Route index element={<Home />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/tag" element={<Tag />} />
      </Routes> 
      <Fixed />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
