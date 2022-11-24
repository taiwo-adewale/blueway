import React from "react";

import { Post, Pagination } from ".";

const Posts = () => {
  return (
    <div className="flex-grow">
      <div className="flex flex-col gap-y-20">
        <Post />
        <Post />
        <Post />
      </div>

      <Pagination />
    </div>
  );
};

export default Posts;
