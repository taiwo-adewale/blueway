import React from "react";

type Props = {
  large?: boolean;
};

const Divider = ({ large }: Props) => {
  return (
    <hr className={`border-t border-[#eee] mb-12 ${large && "border-2"}`}></hr>
  );
};

export default Divider;
