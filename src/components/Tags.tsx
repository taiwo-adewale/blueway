import React from "react";

import { Tag } from ".";

interface Props {
  fontSize?: number;
}

const Tags = ({ fontSize }: Props) => {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-6">
      {[
        "Getting Started",
        "Health",
        "Lifestyle",
        "Music",
        "Technology",
        "Travel",
      ].map((tag) => (
        <Tag key={`footer-tag-${tag}`} tag={tag} fontSize={fontSize || 14} />
      ))}
    </div>
  );
};

export default Tags;
