import React from "react";

import { FooterTitle, Tag } from ".";

import picOne from "../assets/picture-10.jpeg";

const Footer = () => {
  return (
    <div className="container">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 mb-[50px] mt-[70px] gap-[70px]">
        <div>
          <FooterTitle title="Latest Articles" />

          <div className="flex flex-col gap-y-5">
            {[1, 2, 3].map(() => (
              <div className="flex gap-x-4">
                <img src={picOne} alt="" className="w-[60px] h-[64px]" />

                <div className="flex flex-col mt-2">
                  <a
                    href="#"
                    className="text-heading text-[13px] font-bold mb-1"
                  >
                    Far far away, behind the word mountains
                  </a>
                  <p className="text-xs">Mar 16, 2021</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <FooterTitle title="Tag Cloud" />

          <div className="flex flex-wrap gap-x-5 gap-y-6">
            {[
              "Getting Started",
              "Health",
              "Lifestyle",
              "Music",
              "Technology",
              "Travel",
            ].map((tag) => (
              <Tag key={`footer-tag-${tag}`} tag={tag} fontSize={14} />
            ))}
          </div>
        </div>

        <div>
          <FooterTitle title="Follow Me!" />

          <div className="flex flex-wrap gap-x-5 gap-y-6"></div>
        </div>

        <div>
          <FooterTitle title="About Me" />

          <div className="flex flex-wrap gap-x-5 gap-y-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
