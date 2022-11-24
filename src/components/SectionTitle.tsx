import React from "react";

interface Props {
  title: string;
}

const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex items-center gap-x-4 mb-8">
      <h4 className="text-2xl font-bold text-heading">{title}</h4>

      <div className="bg-primary h-0.5 flex-grow"></div>
    </div>
  );
};

export default SectionTitle;
