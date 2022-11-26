import React from "react";

import picOne from "../assets/picture 11.jpg";
import picTwo from "../assets/picture-10.jpeg";

import { Tag } from ".";

const Post = () => {
  return (
    <div className="post bg-white px-12 pt-10 pb-14 w-full relative flex-col">
      <div className="flex gap-x-6 mb-8">
        <img src={picOne} alt="" className="w-[120px] h-[120px]" />

        <div className="flex flex-col">
          <a
            href="#"
            className="text-3xl mb-2 xl:text-4xl text-heading font-bold"
          >
            Far far away, behind the word mountains
          </a>
          <p>March 16, 2021 3 min read 1</p>
        </div>
      </div>

      <p className="text-sm lg:text-[15px] xl:text-[17px] mb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        nostrum quidem deleniti ab, quisquam corrupti, rem facilis molestias
        alias quo inventore, hic quaerat incidunt reprehenderit debitis
        repellendus earum labore repellat...
      </p>

      <div className="flex justify-between items-center">
        <div className="gap-x-2 gap-y-1.5">
          <Tag tagName="Getting Started" tagColor="#fb3451" fontSize={12} />
        </div>

        <div className="flex items-center gap-x-2">
          <img src={picTwo} alt="" className="w-9 h-9 rounded-full" />
          <span className="text-xs lg:text-base font-medium">Jonathan Doe</span>
        </div>
      </div>

      <a
        href="#"
        className="bg-btnPrimary absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-white py-2.5 px-7 font-medium"
      >
        Continue reading
      </a>
    </div>
  );
};

export default Post;
