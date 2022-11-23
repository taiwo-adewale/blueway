import React from "react";

interface Props {
  tag: string;
  fontSize: number;
}

const Tag: React.FC<Props> = ({ tag, fontSize }) => {
  return (
    <div className="text-xs tag py-1 px-3 gap-x-1 flex items-center">
      <span className="text-red-500 text-base">#</span>
      <span
        className="text-btnPrimary font-medium"
        style={{ fontSize: `${fontSize}px` }}
      >
        {tag}
      </span>
    </div>
  );
};

export default Tag;
