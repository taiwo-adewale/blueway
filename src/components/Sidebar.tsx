import React from "react";

import { SectionTitle, Tags, SocialIconsBoxes } from ".";

const Sidebar = () => {
  return (
    <div className="w-[30%] flex-shrink-0 space-y-[50px] hidden lg:flex flex-col">
      <div>
        <SectionTitle title="Tag Cloud" />

        <Tags />
      </div>
      <div>
        <SectionTitle title="Follow Me!" />

        <div className="grid grid-cols-4 gap-x-3">
          <SocialIconsBoxes />
        </div>
      </div>
      <div className="sticky top-8">
        <SectionTitle title="Advertising" />

        <div className="w-full flex justify-center items-center">
          <div className="w-[80%] border-[2px] border-btnPrimary">
            <div className="h-[400px] m-0.5 bg-btnPrimary flex justify-center items-center">
              <span className="text-white text-2xl font-bold text-center">
                Advertising <br /> Area
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
