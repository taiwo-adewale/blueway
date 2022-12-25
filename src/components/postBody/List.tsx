import React from "react";

type Props = {
  children: string[];
};

const List = ({ children }: Props) => {
  return (
    <ul className="mb-8">
      {children.map((item) => (
        <li className="mb-4 relative xs:pl-6 pl-10 post__list-item xl:text-lg">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
