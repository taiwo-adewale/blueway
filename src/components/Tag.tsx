import React from "react";

interface Props {
  tagName: string;
  tagColor: string;
  fontSize: number;
}

const Tag: React.FC<Props> = ({ tagName, tagColor, fontSize }) => {
  return (
    <a
      href="#"
      className="text-xs tag py-1 px-3 gap-x-1 flex items-center hover:-translate-y-0.5 transition-all duration-300"
    >
      <span style={{ color: tagColor }} className="text-base">
        #
      </span>
      <span
        className="text-btnPrimary font-medium"
        style={{ fontSize: `${fontSize}px` }}
      >
        {tagName}
      </span>
    </a>
  );
};

export default Tag;
