import React from "react";
import { BsHeart } from "react-icons/bs";

type commentsType = {
  commenter: string;
  image: string;
  timeSpent: number;
  comment: string;
  likes: number;
  comments?: commentsType[];
};

const Comment = ({
  commenter,
  image,
  timeSpent,
  comment,
  likes,
  comments,
}: commentsType) => {
  return (
    <div className="flex mt-10">
      <div className="flex flex-col items-center mr-3">
        <img
          src={image}
          alt="commenter"
          className="w-10 h-10 min-w-[40px]  mb-4 rounded-full flex-shrink-0"
        />
        <span className="h-full w-1 bg-gradient-to-b from-[rgba(0,0,0,0.05)] via-[rgba(0,0,0,0.05)] to-transparent"></span>
      </div>
      <div className="flex flex-col">
        <h4 className="font-bold text-black normal-text font-primary mb-1">
          {commenter}
        </h4>
        <span className="text-[rgba(0,0,0,0.5)] font-secondary text-xs sm:text-sm mb-2">
          {timeSpent} weeks ago
        </span>

        <p className="text-black font-secondary mb-2 text-sm sm:text-base">
          {comment}
        </p>

        <div className="flex items-center font-secondary">
          <BsHeart className="fill-[rgba(0,0,0,0.5)] cursor-pointer" />{" "}
          <span className="ml-2 text-[rgba(0,0,0,0.5)]">{likes}</span>
        </div>

        {comments &&
          comments.map((comm) => (
            <Comment key={`comment-${commenter}-${comm.commenter}`} {...comm} />
          ))}
      </div>
    </div>
  );
};

export default Comment;
