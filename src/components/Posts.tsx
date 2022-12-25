import React from "react";
import { BsDashLg } from "react-icons/bs";
import { MdChatBubbleOutline } from "react-icons/md";
import { Link } from "react-router-dom";

import { images } from "../constants";
import { Pagination, Tag, ButtonLink } from ".";
import { posts } from "../data";

const Posts = () => {
  return (
    <div className="flex-grow">
      <div className="flex flex-col gap-y-20">
        {posts.map((post, index) => (
          <article
            key={`post-${index}`}
            className="post bg-white px-6 pt-5 pb-10 md:px-12 md:pt-10 md:pb-14 w-full relative flex-col"
          >
            <div className="flex flex-wrap sm:flex-nowrap gap-y-4 gap-x-4 md:gap-x-6 mb-4 md:mb-8">
              <Link
                to={`/posts/${post.url}`}
                className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] flex-shrink-0"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full"
                />
              </Link>

              <div className="flex flex-col">
                <Link
                  to={`/posts/${post.url}`}
                  className="text-base md:text-[28px] xl:text-[30px] sm:mb-3 xl:text-4xl text-heading font-bold underline-hover !decoration-4"
                >
                  {post.title}
                </Link>
                <p className="flex flex-wrap items-center text-[15px] xl:text-base gap-x-3">
                  <span className="flex flex-wrap space-x-3 items-center">
                    <span>{post.date}</span>
                    <BsDashLg className="fill-primary" />
                  </span>
                  <span className="flex flex-wrap space-x-3 items-center">
                    <span>{post.minsToRead} min read</span>
                    <MdChatBubbleOutline className="fill-primary" />
                  </span>
                </p>
              </div>
            </div>

            <p className="text-[13px] md:text-base lg:text-sm xl:text-[17px] mb-6 md:mb-12">
              {post.body}
            </p>

            <div className="flex justify-between items-center">
              <div className="flex flex-wrap gap-x-2 gap-y-1.5">
                {post.tags.map((tag) => (
                  <Tag
                    key={`post-${index}-${tag.tag}`}
                    tagName={tag.tag}
                    tagColor={tag.color}
                    tagUrl={tag.url}
                  />
                ))}
              </div>

              <div className="hidden md:flex items-center gap-x-2">
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

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
              <ButtonLink urlTo="/">Continue Reading</ButtonLink>
            </div>
          </article>
        ))}
      </div>

      <Pagination />
    </div>
  );
};

export default Posts;
