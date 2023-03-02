import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { BsDashLg } from "react-icons/bs";
import { BiCopy } from "react-icons/bi";
import { MdChatBubbleOutline } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaGlobeAmericas,
} from "react-icons/fa";

import {
  Newsletter,
  Sidebar,
  Tag,
  SectionTitle,
  Comment,
  Alert,
} from "../components";
import {
  Paragraph,
  Blockquote,
  Heading,
  List,
  LinkSpan,
  Divider,
  Span,
} from "../components/postBody";
import HeaderFooterWrap from "../wrapper/HeaderFooterWrap";
import { posts } from "../data";

const Post = () => {
  const { postUrl } = useParams();
  const navigate = useNavigate();

  const [post] = posts.filter((post) => post.url === postUrl);

  const next = post.id >= posts.length - 1 ? 0 : post.id + 1;
  const prev = post.id < 1 ? posts.length - 1 : post.id - 1;

  const [alertActive, setAlertActive] = useState<boolean>(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(
      `https://blueway-wale.netlify.app/posts/${postUrl}`
    );
    setAlertActive(true);
    setTimeout(() => setAlertActive(false), 2000);
  };

  useEffect(() => {
    if (!post) navigate("/");
  }, []);

  if (!post) return null;

  return (
    <>
      <div className="container">
        <div className="flex w-full gap-x-12 pt-4 md:pt-8 xl:pt-12 pb-12">
          <div className="flex-grow">
            <img
              src={post.image}
              alt={post.title}
              className="w-full min-h-[250px] object-cover"
            />
            <div className="xs:px-4 px-[30px] sm:px-[60px] py-[50px] bg-white mb-14 post">
              <div>
                <div className="text-center">
                  <h2 className="font-bold text-2xl md:text-3xl lg:text-2xl xl:text-3xl mb-5">
                    {post.title}
                  </h2>

                  <p className="flex flex-wrap items-center text-[15px] xl:text-base gap-x-3 justify-center">
                    <span className="flex flex-wrap space-x-3 items-center">
                      <span>{post.date}</span>
                      <BsDashLg className="fill-primary" />
                    </span>
                    <span className="flex flex-wrap space-x-3 items-center">
                      <span>{post.minsToRead} min read</span>
                      <MdChatBubbleOutline className="fill-primary" />
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-12 post-body">{post.body}</div>

              <div className="flex flex-col items-center text-center mb-12">
                <p className="text-sm font-primary font-bold mb-6">Tagged in</p>

                <div className="flex flex-wrap gap-y-2 gap-x-4">
                  {post.tags.map((tag) => (
                    <Tag
                      key={`${post.url}-${tag.tag}`}
                      tagName={tag.tag}
                      tagColor={tag.color}
                      tagUrl={tag.url}
                    />
                  ))}
                </div>
              </div>

              <Divider />

              <div className="flex flex-wrap justify-center gap-y-4 gap-x-6 items-center mb-8">
                <span className="font-primary font-bold mr-2">
                  Share Article:{" "}
                </span>
                <div className="flex flex-wrap gap-1">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    className="w-11 h-11 mx-1 mb-1 rounded-full hover:-translate-y-[5px] transition-all duration-300 bg-[#175BEB] flex-center cursor-pointer"
                  >
                    <FaFacebookF className="text-base fill-white" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    className="w-11 h-11 mx-1 mb-1 rounded-full hover:-translate-y-[5px] transition-all duration-300 bg-[#1DA1F2] flex-center cursor-pointer"
                  >
                    <FaTwitter className="text-base fill-white" />
                  </a>
                  <a
                    href="https://gmail.com"
                    target="_blank"
                    className="w-11 h-11 mx-1 mb-1 rounded-full hover:-translate-y-[5px] transition-all duration-300 bg-[#ff4c60] flex-center cursor-pointer"
                  >
                    <FaEnvelope className="text-base fill-white" />
                  </a>
                  <a
                    href="https://whatsapp.com"
                    target="_blank"
                    className="w-11 h-11 mx-1 mb-1 rounded-full hover:-translate-y-[5px] transition-all duration-300 bg-[#1fb381] flex-center cursor-pointer"
                  >
                    <FaWhatsapp className="text-base fill-white" />
                  </a>
                </div>
              </div>

              <div className="relative pl-6 pr-12 sm:pr-16 py-3 text-center linkSpan-copy bg-mainBg w-full text-sm md:text-base tracking-normal mb-12 break-all">
                {`https://blueway-wale.netlify.app/posts/${postUrl}`}
                <BiCopy
                  onClick={handleCopyToClipboard}
                  className="fill-primary text-xl absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 cursor-pointer"
                />
              </div>

              {alertActive && <Alert message="Copied to clipboard!" />}
            </div>

            <div className="xs:px-4 px-[30px] sm:px-[60px] py-[60px] bg-white mb-14 post">
              <div className="flex flex-col text-center flex-center space-y-8">
                <div className="flex-center flex-wrap sm:flex-nowrap gap-x-5 gap-y-3">
                  <img
                    src={post.author.image}
                    alt={post.author.name}
                    className="w-20 h-20 rounded-full hover-up"
                  />
                  <div className="flex flex-col">
                    <a href="#" className="large-text hover-underline">
                      {post.author.name}
                    </a>
                    <span className="text-xs sm:text-sm">
                      Collaborator & Editor
                    </span>
                  </div>
                </div>

                <p className="normal-text">
                  Hello! My name is {post.author.name} working from Nigeria. I
                  create websites for differents markets. Also, i offer live
                  support via our ticket system.
                </p>

                <div className="space-x-6 flex">
                  <a href="https://twitter.com" target="_blank">
                    <FaTwitter className="text-xl fill-[#1DA1F2]" />
                  </a>
                  <a href="https://facebook.com" target="_blank">
                    <FaFacebookF className="text-xl fill-[#175BEB]" />
                  </a>
                  <a href="https://wale-portfolio.netlify.app" target="_blank">
                    <FaGlobeAmericas className="text-xl fill-primary" />
                  </a>
                </div>
              </div>
            </div>

            <div className="xs:px-4 p-[30px] sm:p-[60px] bg-white mb-14 post">
              <div className="flex flex-wrap sm:flex-nowrap items-center justify-between mb-8 gap-y-2">
                <h3 className="font-bold text-black text-2xl font-primary">
                  Member Discussion
                </h3>
                <span className="text-gray-400 font-secondary text-sm sm:text-base">
                  3 comments
                </span>
              </div>

              <div className="mb-14">
                {post.comments &&
                  post.comments.map((comment, index) => (
                    <Comment key={`comment-${index}`} {...comment} />
                  ))}
              </div>

              <Divider large={true} />

              <div className="my-14 flex flex-col text-center items-center">
                <h3 className="mb-3 text-2xl sm:text-3xl text-black font-bold">
                  Join the discussion
                </h3>
                <p className="normal-text mb-8 text-black">
                  Become a member of <span>Blueway</span> to start commenting.
                </p>
                <div className="text-center mb-8">
                  <Link
                    to="/sign-up"
                    className="hover:opacity-90 bg-primary rounded-lg text-white py-4 px-6 transition-all duration-300"
                  >
                    Sign Up now
                  </Link>
                </div>
                <p className="text-[rgba(0,0,0,0.5)]">
                  Already a member?{" "}
                  <Link to="/login" className="text-primary">
                    Sign In
                  </Link>{" "}
                </p>
              </div>

              <Divider large={true} />
            </div>

            <SectionTitle title="Related Articles" large={true} />

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10 mb-14">
              {posts.slice(0, 3).map((post, index) => (
                <div key={`related-post-${index}`} className="flex gap-x-4">
                  <Link
                    to={`/posts/${post.url}`}
                    className="w-[70px] md:w-[90px] h-[70px] md:h-[90px] flex-shrink-0"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full"
                    />
                  </Link>

                  <div className="flex flex-col mb-2">
                    <Link
                      to={`/posts/${post.url}`}
                      className="text-heading text-[13px] lg:text-base xl:text-lg font-bold mb-1 hover-underline"
                    >
                      {post.title}
                    </Link>
                    <p className="text-xs md:text-sm">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <SectionTitle title="Other Stories" large={true} />

            <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between gap-y-6 gap-x-10 md:gap-x-20 mb-14">
              <article className="flex gap-x-4 p-4 w-full md:p-6 bg-white post">
                <Link
                  to={`/posts/${posts[prev].url}`}
                  className="w-[60px] h-[70px] md:w-[80px] md:h-[80px] flex-shrink-0"
                >
                  <img
                    src={posts[prev].image}
                    alt={posts[prev].title}
                    className="w-full h-full"
                  />
                </Link>

                <div className="flex flex-col mb-2">
                  <Link
                    to={`/posts/${posts[prev].url}`}
                    className="text-heading text-[13px] lg:text-base font-bold mb-1.5 hover-underline"
                  >
                    {posts[prev].title}
                  </Link>
                  <span className="text-xs lg:text-sm">Previous Story</span>
                </div>
              </article>

              <article className="flex gap-x-4 p-4 w-full md:p-6 bg-white post">
                <Link
                  to={`/posts/${posts[next].url}`}
                  className="w-[60px] h-[70px] md:w-[80px] md:h-[80px] flex-shrink-0"
                >
                  <img
                    src={posts[next].image}
                    alt={posts[next].title}
                    className="w-full h-full"
                  />
                </Link>

                <div className="flex flex-col mb-2">
                  <Link
                    to={`/posts/${posts[next].url}`}
                    className="text-heading text-[13px] lg:text-base font-bold mb-1.5 hover-underline"
                  >
                    {posts[next].title}
                  </Link>
                  <span className="text-xs lg:text-sm">Next Story</span>
                </div>
              </article>
            </div>
          </div>

          <Sidebar />
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default HeaderFooterWrap(Post);
