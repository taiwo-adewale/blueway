import React from "react";

interface Props {
  tagName: string;
  tagColor: string;
}

const Tag: React.FC<Props> = ({ tagName, tagColor }) => {
  return (
    <a
      href="#"
      className="text-xs tag py-1 px-3 gap-x-1 flex items-center hover:-translate-y-0.5 transition-all duration-300"
    >
      <span style={{ color: tagColor }} className="text-base">
        #
      </span>
      <span className="text-btnPrimary font-medium text-xs md:text-sm">
        {tagName}
      </span>
    </a>
  );
};

export default Tag;
