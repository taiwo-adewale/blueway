import React from "react";

import { Newsletter, Sidebar } from "../components";
import HeaderFooterWrap from "../wrapper/HeaderFooterWrap";

const Tag = () => {
  return (
    <>
      <div className="container">
        <div className="flex w-full gap-x-12 pt-4 md:pt-8 xl:pt-12 pb-12">
          <div className="flex-grow"></div>
          <Sidebar />
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default HeaderFooterWrap(Tag);
