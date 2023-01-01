import React from "react";

type Props = {
  children: string;
};

const Blockquote = ({ children }: Props) => {
  return (
    <blockquote
      style={{
        background:
          "no-repeat 97% 100% url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJz48cGF0aCBmaWxsPSdub25lJyBkPSdNMCAwaDI0djI0SDB6Jy8+PHBhdGggZD0nTTE5LjQxNyA2LjY3OUMyMC40NDcgNy43NzMgMjEgOSAyMSAxMC45ODljMCAzLjUtMi40NTcgNi42MzctNi4wMyA4LjE4OGwtLjg5My0xLjM3OGMzLjMzNS0xLjgwNCAzLjk4Ny00LjE0NSA0LjI0Ny01LjYyMS0uNTM3LjI3OC0xLjI0LjM3NS0xLjkyOS4zMTEtMS44MDQtLjE2Ny0zLjIyNi0xLjY0OC0zLjIyNi0zLjQ4OWEzLjUgMy41IDAgMCAxIDMuNS0zLjVjMS4wNzMgMCAyLjA5OS40OSAyLjc0OCAxLjE3OXptLTEwIDBDMTAuNDQ3IDcuNzczIDExIDkgMTEgMTAuOTg5YzAgMy41LTIuNDU3IDYuNjM3LTYuMDMgOC4xODhsLS44OTMtMS4zNzhjMy4zMzUtMS44MDQgMy45ODctNC4xNDUgNC4yNDctNS42MjEtLjUzNy4yNzgtMS4yNC4zNzUtMS45MjkuMzExQzQuNTkxIDEyLjMyMiAzLjE3IDEwLjg0MSAzLjE3IDlhMy41IDMuNSAwIDAgMSAzLjUtMy41YzEuMDczIDAgMi4wOTkuNDkgMi43NDggMS4xNzl6JyBmaWxsPSdyZ2JhKDIxOCwyMjIsMjM3LDEpJy8+PC9zdmc+)",
        backgroundSize: "60px 60px",
      }}
      className="italic mb-12 xs:pl-4 xs:pr-2 pl-8 sm:pl-12 pr-4 sm:pr-6 !leading-[2] md:text-lg lg:text-base xl:text-lg"
    >
      {children}
    </blockquote>
  );
};

export default Blockquote;
