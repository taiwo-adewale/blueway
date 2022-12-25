import React from "react";

type Props = {
  children: React.ReactNode;
};

const Paragraph = ({ children }: Props) => {
  return <p className="mb-8 md:text-lg lg:text-base xl:text-lg">{children}</p>;
};

export default Paragraph;
