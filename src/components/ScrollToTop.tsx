import { useEffect, useRef, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

const ScrollToTop = () => {
  const scrollRef = useRef();
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", function () {
      if (document.documentElement.scrollTop > 500) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    });
  }, []);

  return (
    <div
      onClick={handleScroll}
      // @ts-ignore
      ref={scrollRef}
      className={`fixed shadow-2 w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] bg-btnPrimary right-2 bottom-2 flex justify-center items-center cursor-pointer text-white transition-all duration-500 ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <RiArrowUpSLine className="fill-white text-[22px] sm:text-[26px]" />
    </div>
  );
};

export default ScrollToTop;
