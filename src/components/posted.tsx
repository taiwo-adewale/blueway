import React from "react";
import { BsDashLg } from "react-icons/bs";
import { MdChatBubbleOutline } from "react-icons/md";

import { images } from "../constants";
import { Tag } from ".";
import { tags } from "../data";
interface Props {
    header: string,
    subs: string,
    Continue: string,
    description:string,
    date: string,
    duration:string
}

const Posted:  React.FC<Props> = ({description, duration,subs,Continue,header,date}) => {
  const tagsNum = Math.ceil(Math.random() * 1);

  return (
    <article className="post bg-white px-6 pt-5 pb-10 md:px-12 md:pt-10 md:pb-14 w-full relative flex-col">
      <div className="flex flex-wrap sm:flex-nowrap gap-y-4 gap-x-4 md:gap-x-6 mb-4 md:mb-8 posts">
        <img
          src={images.mountain01}
          alt=""
          className="w-[90px] h-[90px] md:w-[120px] md:h-[120px]"
        />

        <div className="flex flex-col">
          <a
            href="#"
            className="text-base md:text-[28px] xl:text-[30px] sm:mb-3 xl:text-4xl text-heading font-bold"
          >
            {header}
          </a>
          <p className="flex flex-wrap items-center text-[15px] xl:text-base gap-x-3">
            <span className="flex flex-wrap space-x-3 items-center">
              <span>{date}</span>
              <BsDashLg className="fill-primary" />
            </span>
            <span className="flex flex-wrap space-x-3 items-center">
              <span>{duration}</span>
              <MdChatBubbleOutline className="fill-primary" />
            </span>
          </p>
        </div>
      </div>

      <p className="text-[13px] md:text-base lg:text-sm xl:text-[17px] mb-6 md:mb-12">
        {subs}
      </p>

      <div className="flex justify-between items-center">
        <div className="flex flex-wrap gap-x-2 gap-y-1.5">
          {tags.slice(0, tagsNum).map((tag) => (
            <Tag key={tag.tag} tagName={tag.tag} tagColor={tag.color} />
          ))}
        </div>

        <div className="hidden md:flex items-center gap-x-2">
          <img src={images.person01} alt="" className="w-9 h-9 rounded-full" />
          <span className="text-xs lg:text-[15px] font-medium font-primary">
            {description}
          </span>
        </div>
      </div>

      <a
        href="#"
        className="bg-btnPrimary text-[13px] whitespace-nowrap xl:text-[15px] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-white py-2.5 px-7 font-medium"
      >
        {Continue}
      </a>
    </article>
  );
};

export default Posted;