import React from "react";
import { BsDashLg } from "react-icons/bs";
import { MdChatBubbleOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Pagination, Tag, ButtonLink } from "../components";
import { posts } from "../data";
import { RootState } from "../redux/store";

const Posts = () => {
  const { pageNo } = useSelector((state: RootState) => state.state);
  const currentPage = Number(pageNo);
  const maxPage = Math.ceil(posts.length / 4);

  if (currentPage > maxPage)
    return (
      <div className="flex-grow text-center py-8">
        <p className="text-2xl xl:text-3xl font-primary font-bold">
          No posts found!
        </p>
      </div>
    );

  return (
    <div className="flex-grow">
      <div className="flex flex-col gap-y-20">
        {posts
          .slice(4 * (currentPage - 1), 4 * currentPage)
          .map((post, index) => (
            <article
              key={`post-${index}`}
              className="post bg-white sm:px-6 sm:pt-5 pb-10 md:px-12 md:pt-10 md:pb-14 w-full relative flex-col"
            >
              <div className="flex flex-wrap sm:flex-nowrap gap-y-4 gap-x-4 md:gap-x-6 mb-4 md:mb-8">
                <Link
                  to={`/posts/${post.url}`}
                  className="w-full h-full sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px] flex-shrink-0 object-cover"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </Link>

                <div className="flex flex-col px-4 sm:px-0">
                  <Link
                    to={`/posts/${post.url}`}
                    className="text-lg md:text-[28px] xl:text-[30px] mb-2 sm:mb-3 xl:text-4xl text-heading font-bold hover-underline !decoration-4 !leading-[1.3]"
                  >
                    {post.title}
                  </Link>
                  <p className="flex flex-wrap items-center text-sm xl:text-base gap-x-3">
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

              <div className="flex flex-col px-4 sm:px-0">
                <p className="text-[15px] line-clamp-5 md:line-clamp-3 md:text-base lg:text-sm xl:text-[17px] mb-6 md:mb-12 !leading-[1.5]">
                  {post.excerpt}
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
                      src={post.author.image}
                      alt={post.author.name}
                      className="w-9 h-9 rounded-full"
                    />
                    <span className="text-xs lg:text-[15px] font-medium font-primary">
                      {post.author.name}
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <ButtonLink urlTo={`/posts/${post.url}`}>
                  Continue Reading
                </ButtonLink>
              </div>
            </article>
          ))}
      </div>

      <Pagination />
    </div>
  );
};

export default Posts;
