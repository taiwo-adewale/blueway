import React from "react";

import { Newsletter } from "../components";
import HeaderFooterWrap from "../wrapper/HeaderFooterWrap";

const Tag = () => {
  return (
    <>
      <div className="container">
        <div className="w-full pt-4 md:pt-8 xl:pt-12 pb-12">
          <div className="post px-16 py-20 bg-white flex-center gap-x-20">
            <div className="text-center">
              <div className="font-primary font-bold text-[32px] mb-4 whitespace-nowrap">
                <span className="text-primary">#</span> Getting Started
              </div>

              <span>8 Articles</span>
            </div>

            <div className="text-center">
              <p className="flex-grow normal-text inline-block">
                Sometimes you might want to put your site behind closed doors If
                you've got a publication that you don't want the world to see
                yet because it's not ready to launch, you can hide your Ghost
                site behind a simple shared pass-phrase.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default HeaderFooterWrap(Tag);
