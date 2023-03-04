import React, { useEffect, useRef, useState } from "react";
import { HiX } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Tags, Tag } from "../components";
import { setIsSearch } from "../redux/features/stateSlice";
import { RootState } from "../redux/store";
import { posts, postsType } from "../data";

const Search = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const { isSearch } = useSelector((state: RootState) => state.state);
  const [searchVal, setSearchVal] = useState<string>("");
  const [searchResults, setSearchResults] = useState<null | postsType[]>(null);

  useEffect(() => {
    if (!inputRef.current) throw Error("inputRef is not assigned");

    if (isSearch) {
      inputRef.current.focus();
    }
  }, [isSearch]);

  useEffect(() => {
    const handleEscPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseSearch();
      }
    };

    document.addEventListener("keydown", handleEscPress);

    return () => document.removeEventListener("keydown", handleEscPress);
  }, []);

  const handleCloseSearch = () => {
    dispatch(setIsSearch(false));
    setSearchResults(null);
    setSearchVal("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchResults(
      posts.filter((post) =>
        post.title.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };

  return (
    <div
      className={`fixed w-full  inset-0 bg-white z-[99] transition-all overflow-y-auto duration-500 ${
        isSearch
          ? "opacity-100 pointer-events-auto scale-100"
          : "opacity-0 pointer-events-none scale-0"
      }`}
    >
      <div className="flex justify-center items-center min-h-screen">
        <div
          onClick={handleCloseSearch}
          className="fixed right-2 top-2 p-2 cursor-pointer"
        >
          <HiX className="w-8 h-8 fill-btnPrimary" />
        </div>

        <div className="container pt-32 pb-16">
          <div className="flex flex-col text-center items-center">
            <p className="hidden lg:block text-[20px] xl:text-4xl font-bold mb-10 text-btnPrimary font-primary">
              Press <span className="text-primary font-primary">ESC</span> to
              close
            </p>

            <form onSubmit={handleSubmit} className="w-full mb-4">
              <div className="w-full md:w-[90%] relative mx-auto">
                <input
                  ref={inputRef}
                  type="search"
                  className="pr-[50px] py-4 px-6 h-[45px]"
                  placeholder="Type to start your search..."
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                />

                <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 cursor-pointer">
                  <FaSearch className="fill-primary" />
                </button>
              </div>
            </form>

            {searchResults && searchResults.length > 0 && (
              <div className="grid sm460:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full md:w-[90%] mt-8 gap-x-4 gap-y-8">
                {searchResults.map((post, index) => (
                  <article
                    key={`search-result-${index}`}
                    className="flex flex-col"
                  >
                    <Link onClick={handleCloseSearch} to={`/posts/${post.url}`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-[200px] sm:h-[150px] object-cover rounded-lg mb-2"
                      />
                    </Link>

                    <Link
                      onClick={handleCloseSearch}
                      to={`/posts/${post.url}`}
                      className="text-sm pb-1 !text-left text-heading font-bold hover-underline !decoration-2"
                    >
                      {post.title}
                    </Link>

                    <span className="!text-left text-sm">{post.date}</span>

                    <div className="flex pt-4">
                      <Tag
                        tagName={post.tags[0].tag}
                        tagColor={post.tags[0].color}
                        tagUrl={post.tags[0].url}
                      />
                    </div>
                  </article>
                ))}
              </div>
            )}

            {searchResults && searchResults.length === 0 && (
              <div>
                <p className="font-bold sm:!text-lg lg:!text-xl text-btnPrimary font-primary">
                  No results found
                </p>
              </div>
            )}

            <p className="mt-[100px] text-lg mb-4 text-btnPrimary tracking-normal">
              Or check our <span className="text-primary">P</span>
              opular <span className="text-primary">C</span>
              ategories...
            </p>

            <Tags fontSize={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
