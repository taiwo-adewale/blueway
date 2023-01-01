import React from "react";

type Props = {
  message: string;
};

const Alert = ({ message }: Props) => {
  return (
    <div className="fixed bg-primary top-0 w-full left-0 right-0 p-4 z-[99] text-center link-copy">
      <span className="text-white font-primary">{message}</span>
    </div>
  );
};

export default Alert;
