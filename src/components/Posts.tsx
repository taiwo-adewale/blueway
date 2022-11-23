import React from "react";

import { Post } from ".";

const Posts = () => {
  return (
    <div className="flex-grow flex flex-col gap-y-20">
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
