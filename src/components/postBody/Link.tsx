import React from "react";

type Props = {
  children: string;
  href: string;
};

const Link = ({ children, href }: Props) => {
  return (
    <a href={href} className="text-primary">
      {children}
    </a>
  );
};

export default Link;
