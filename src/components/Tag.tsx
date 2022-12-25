import React from "react";
import { Link } from "react-router-dom";

interface Props {
  tagName: string;
  tagColor: string;
  tagUrl: string;
}

const Tag: React.FC<Props> = ({ tagName, tagColor, tagUrl }) => {
  return (
    <Link
      to={`/tags/${tagUrl}`}
      className="text-xs tag py-1 px-3 gap-x-1 flex items-center hover:-translate-y-0.5 transition-all duration-300"
    >
      <span style={{ color: tagColor }} className="text-base">
        #
      </span>
      <span className="text-btnPrimary font-medium text-xs md:text-sm">
        {tagName}
      </span>
    </Link>
  );
};

export default Tag;
