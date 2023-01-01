import React from "react";

interface Props {
  title: string;
  large?: boolean;
}

const SectionTitle: React.FC<Props> = ({ title, large }) => {
  return (
    <div className="flex items-center gap-x-4 mb-8">
      <h4
        className={`font-bold text-2xl text-heading ${large && "sm:text-3xl"}`}
      >
        {title}
      </h4>

      <div className="bg-primary h-0.5 flex-grow"></div>
    </div>
  );
};

export default SectionTitle;
