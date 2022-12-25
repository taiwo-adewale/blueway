import React from "react";

type Props = {
  children: string;
  className?: string;
};

const Span = ({ children, className }: Props) => {
  return <span className={className && className}>{children}</span>;
};

export default Span;
