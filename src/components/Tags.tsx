import React from "react";

import { Tag } from ".";
import { tags } from "../data";

interface Props {
  fontSize?: number;
}

const Tags = ({ fontSize }: Props) => {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-6">
      {tags.map((tag, index) => (
        <Tag
          key={`footer-tag-${index}`}
          tagName={tag.tag}
          tagColor={tag.color}
          fontSize={fontSize || 14}
        />
      ))}
    </div>
  );
};

export default Tags;
