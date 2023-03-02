import React from "react";
import { FaFacebookF, FaTwitter, FaGlobeAmericas } from "react-icons/fa";
import { Link } from "react-router-dom";

import { SectionTitle, Tags, SocialIconsBoxes } from "../components";
import { images } from "../constants";
import { posts } from "../data";

const Footer = () => {
  return (
    <div className="px-6 md:px-12 mx-auto max-w-[1400px]">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 mb-10 sm:mb-[50px] mt-[70px] gap-[70px]">
        <div>
          <SectionTitle title="Latest Articles" />

          <div className="flex flex-col gap-y-5">
            {posts.slice(0, 3).map((post, index) => (
              <div key={`footer-post-${index}`} className="flex gap-x-4">
                <Link
                  to={`/posts/${post.url}`}
                  className="w-[60px] h-[64px] flex-shrink-0"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </Link>

                <div className="flex flex-col mb-2">
                  <Link
                    to={`/posts/${post.url}`}
                    className="text-heading text-[13px] xl:text-base font-bold mb-1 hover-underline"
                  >
                    {post.title}
                  </Link>
                  <p className="text-xs">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle title="Tag Cloud" />

          <Tags />
        </div>

        <div>
          <SectionTitle title="Follow Me!" />

          <div className="grid grid-cols-4 gap-x-3 ">
            <SocialIconsBoxes />
          </div>
        </div>

        <div>
          <SectionTitle title="About Me" />

          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-nowrap gap-x-5 gap-y-3">
              <img
                src={images.author01}
                alt=""
                className="w-20 h-20 rounded-full"
              />
              <div className="flex flex-col">
                <a href="#" className="font-bold mb-1">
                  Taiwo Adewale
                </a>
                <span className="text-xs sm:text-sm mb-4">
                  Collaborator & Editor
                </span>
                <div className="flex gap-x-2">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    className="px-0.5"
                  >
                    <FaTwitter className="text-base fill-[#1DA1F2]" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    className="px-0.5"
                  >
                    <FaFacebookF className="text-base fill-[#175BEB]" />
                  </a>
                  <a
                    href="https://wale-portfolio.netlify.app"
                    className="px-0.5"
                  >
                    <FaGlobeAmericas className="text-base fill-primary" />
                  </a>
                </div>
              </div>
            </div>
            <p className="text-sm mt-4">
              Hello! My name is Taiwo Adewale working from Nigeria. I create
              websites for differents markets. Also, i offer live support via
              our ticket system.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center flex items-center flex-col pb-[50px]">
        <h2 className="text-[32px] text-btnPrimary m-5 mb-8 font-bold xl:text-6xl">
          <span className="text-primary font-primary">B</span>lueway
        </h2>

        <div className="mb-5 flex flex-wrap justify-center items-center gap-x-2">
          <a
            href="#"
            className="hover:text-primary font-secondary font-medium transition-all duration-300"
          >
            Terms & Conditions
          </a>
          <span className="text-[8px]">|</span>
          <a
            href="#"
            className="hover:text-primary font-secondary font-medium transition-all duration-300"
          >
            Faqs
          </a>
          <span className="text-[8px]">|</span>
          <a
            href="#"
            className="hover:text-primary font-secondary font-medium transition-all duration-300"
          >
            Privacy Policy
          </a>
        </div>

        <p className="text-sm">
          Published with{" "}
          <a
            href="#"
            className="font-secondary font-bold text-btnPrimary transition-all duration-300 hover-underline"
          >
            React
          </a>{" "}
          &{" "}
          <a
            href="#"
            className="font-secondary font-bold text-btnPrimary transition-all duration-300 hover-underline"
          >
            Netlify
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
