import React from "react";

import { SocialIcons } from ".";

const Newsletter = () => {
  return (
    <div className="w-full bg-white newsletter flex justify-center p-12">
      <div className="flex flex-col text-center">
        <h2 className="text-3xl text-heading font-bold mb-4">
          Subscribe to Blueway
        </h2>

        <p className="mb-8">
          Get the latest posts delivered right to your email.
        </p>

        <form
          action=""
          className="flex flex-col md:flex-row justify-center items-center mb-8"
        >
          <input
            type="email"
            name=""
            id=""
            className="newsletter__input bg-mainBg py-3.5 px-6 w-full md:w-[350px] placeholder:text-textColor placeholder:font-medium tracking-normal"
            placeholder="Enter your email address"
          />
          <button className="bg-btnPrimary text-white md:h-full font-medium py-3 px-7">
            Search
          </button>
        </form>

        <div className=" flex justify-center">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
