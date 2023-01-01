import React from "react";

type Props = {
  children: React.ReactNode;
};

const Paragraph = ({ children }: Props) => {
  return <p className="mb-8 normal-text">{children}</p>;
};

export default Paragraph;
