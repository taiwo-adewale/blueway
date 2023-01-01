import React from "react";

type Props = {
  children: string;
};

const Heading = ({ children }: Props) => {
  return <h3 className="large-text mb-8">{children}</h3>;
};

export default Heading;
