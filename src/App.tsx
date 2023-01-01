import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { Home, Login, SignUp, Post, Tag } from "./pages";
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
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/posts/:postUrl" element={<Post />} />
      <Route path="/tags" element={<Tag />} />
      <Route path="/tags/:tag" element={<Tag />} />
      <Route path="*" element={<Post />} />
    </Routes>
  );
};

export default App;
