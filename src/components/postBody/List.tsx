import React from "react";

type Props = {
  children: string[];
};

const List = ({ children }: Props) => {
  return (
    <ul className="mb-8">
      {children.map((item) => (
        <li
          key={item}
          className="post__list-item mb-4 relative xs:pl-6 pl-10 normal-text"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
