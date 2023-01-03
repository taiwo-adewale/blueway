import React from "react";
import { Link } from "react-router-dom";
import { BsDashLg } from "react-icons/bs";
import { MdChatBubbleOutline } from "react-icons/md";

import { Newsletter, Tag } from "../components";
import HeaderFooterWrap from "../wrapper/HeaderFooterWrap";
import { posts } from "../data";

const Tags = () => {
  return (
    <>
      <div className="container">
        <div className="w-full pt-4 md:pt-8 xl:pt-12 pb-12">
          <div className="post xs:px-6 xs:py-8 px-12 lg:px-16 py-14 lg:py-20 bg-white flex-center flex-wrap md:flex-nowrap gap-x-10 lg:gap-x-14 xl:gap-x-20 mb-20 sm:mx-8">
            <div className="text-center mb-8 md:mb-0">
              <div className="font-primary font-bold text-[26px] lg:text-[32px] mb-4 sm:whitespace-nowrap">
                <span className="text-primary">#</span> Getting Started
              </div>

              <span>8 Articles</span>
            </div>

            <div className="text-center w-full md:w-auto">
              <p className="flex-grow lg:text-lg inline-block">
                Sometimes you might want to put your site behind closed doors If
                you've got a publication that you don't want the world to see
                yet because it's not ready to launch, you can hide your Ghost
                site behind a simple shared pass-phrase.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mb-12">
            {posts.map((post, index) => (
              <article key={`tag-post-${index}`} className="post bg-white p-8">
                <div className="flex xs:flex-wrap sm:flex-nowrap xs:justify-center gap-y-4 gap-x-4 md:gap-x-6 mb-4 md:mb-8">
                  <Link
                    to={`/posts/${post.url}`}
                    className="xs:w-20 xs:h-20 w-[60px] h-[60px] md:w-[70px] md:h-[70px] flex-shrink-0"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full"
                    />
                  </Link>

                  <Link
                    to={`/posts/${post.url}`}
                    className="text-heading font-bold hover-underline text-xl !decoration-3"
                  >
                    {post.title}
                  </Link>
                </div>

                <p className="flex flex-wrap items-center text-[15px] xl:text-base gap-x-3 justify-center mb-6">
                  <span className="flex flex-wrap space-x-3 items-center">
                    <span>{post.date}</span>
                    <BsDashLg className="fill-primary" />
                  </span>
                  <span className="flex flex-wrap space-x-3 items-center">
                    <span>{post.minsToRead} min read</span>
                    <MdChatBubbleOutline className="fill-primary" />
                    {post.comments && <span>{post.comments.length}</span>}
                  </span>
                </p>

                <p className="text-[13px] md:text-base lg:text-sm xl:text-base mb-6 md:mb-12 text-center">
                  {post.body.slice(0, 120) + "..."}
                </p>

                <div className="flex flex-wrap gap-4 items-center">
                  <Tag
                    tagName={post.tags[0].tag}
                    tagColor={post.tags[0].color}
                    tagUrl={post.tags[0].url}
                  />

                  <div className="flex items-center gap-x-2 ml-auto">
                    <img
                      src={post.authorImg}
                      alt={post.author}
                      className="w-9 h-9 rounded-full"
                    />
                    <span className="text-xs lg:text-[15px] font-medium font-primary">
                      {post.author}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default HeaderFooterWrap(Tags);
