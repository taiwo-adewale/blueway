import React from "react";

import { SocialIcons, Button } from ".";

const Newsletter = () => {
  return (
    <div className="w-full bg-white newsletter flex justify-center p-[24px] md:p-[50px]">
      <div className="flex flex-col w-full text-center py-2">
        <h2 className="text-[26px] md:text-[30px] xl:text-4xl text-heading font-bold mb-5 leading-[1.2]">
          Subscribe to Blueway
        </h2>

        <p className="mb-8 text-sm sm:text-base">
          Get the latest posts delivered right to your email.
        </p>

        <form
          action=""
          className="flex flex-col md:flex-row justify-center gap-y-6 sm:gap-y-8 items-center mb-6"
        >
          <input
            type="email"
            className="input-shadow bg-mainBg py-3 px-6 w-full md:w-[350px] placeholder:text-textColor placeholder:font-medium tracking-normal placeholder:text-center placeholder:text-sm placeholder:xl:text-base"
            placeholder="Enter your email address"
          />
          <Button type="submit" classNames="font-primary">
            Submit
          </Button>
        </form>

        <div className="flex justify-center mb-2">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
