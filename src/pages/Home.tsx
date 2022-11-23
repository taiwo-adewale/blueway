import React from "react";

import { Newsletter, Posts, Sidebar } from "../components";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="flex w-full gap-x-12 py-12">
          <Posts />
          <Sidebar />
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default Home;
