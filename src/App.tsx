import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { Home, Login, SignUp, Post, Tags } from "./pages";
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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/membership" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/posts/:postUrl" element={<Post />} />
      <Route path="/tags" element={<Tags />} />
      <Route path="/tags/:tag" element={<Tags />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
