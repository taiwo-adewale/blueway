import React from "react";

type Props = {
  children: string;
};

const Blockquote = ({ children }: Props) => {
  return (
    <blockquote className="italic mb-12 xs:pl-4 xs:pr-2 pl-8 sm:pl-12 pr-4 sm:pr-6 !leading-[2] md:text-lg lg:text-base xl:text-lg">
      {children}
    </blockquote>
  );
};

export default Blockquote;
