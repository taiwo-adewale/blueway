import React from "react";

type Props = {
  children: string;
};

const Heading = ({ children }: Props) => {
  return (
    <h3 className="font-bold text-2xl md:text-3xl lg:text-2xl xl:text-3xl mb-8">
      {children}
    </h3>
  );
};

export default Heading;
