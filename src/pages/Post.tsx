import React from "react";
import { useParams } from "react-router-dom";
import { BsDashLg } from "react-icons/bs";
import { MdChatBubbleOutline } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaEnvelope } from "react-icons/fa";

import { Newsletter, Sidebar, Tag } from "../components";
import {
  Paragraph,
  Blockquote,
  Heading,
  List,
  Link,
  Divider,
  Span,
} from "../components/postBody";
import HeaderFooterWrap from "../wrapper/HeaderFooterWrap";
import { posts } from "../data";

const Post = () => {
  const { postUrl } = useParams();
  const [post] = posts.filter((post) => post.url === postUrl);

  return (
    <>
      <div className="container">
        <div className="flex w-full gap-x-12 pt-4 md:pt-8 xl:pt-12 pb-12">
          <div className="flex-grow">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />

            <div className="xs:px-4 px-[30px] sm:px-[60px] py-[50px] bg-white">
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

              <div className="mt-12">
                <Paragraph>
                  <Span className="font-bold">Hey there</Span>, welcome to your
                  new home on the web!
                </Paragraph>

                <Paragraph>
                  Unlike social networks, this one is all yours. Publish your
                  work on a custom domain, invite your audience to subscribe,
                  send them new content by email newsletter, and offer premium
                  subscriptions to generate sustainable recurring revenue to
                  fund your work.
                </Paragraph>

                <Blockquote>
                  Ghost is an independent, open source app, which means you can
                  customize absolutely everything. Inside the admin area, you'll
                  find straightforward controls for changing themes, colors,
                  navigation, logos and settings — so you can set your site up
                  just how you like it. No technical knowledge required.
                </Blockquote>

                <Paragraph>
                  If you're feeling a little more adventurous, there's really no
                  limit to what's possible. With just a little bit of HTML and
                  CSS you can modify or build your very own theme from scratch,
                  or connect to Zapier to explore advanced integrations.
                  Advanced developers can go even further and build entirely
                  custom workflows using the Ghost API.
                </Paragraph>

                <Paragraph>
                  This level of customization means that Ghost grows with you.
                  It's easy to get started, but there's always another level of
                  what's possible. So, you won't find yourself outgrowing the
                  app in a few months time and wishing you'd chosen something
                  more powerful!
                </Paragraph>

                <Paragraph>
                  You'll find an outline of all the different topics below, with
                  links to each section so you can explore the parts that
                  interest you most.
                </Paragraph>

                <Paragraph>
                  Once you're ready to begin publishing and want to clear out
                  these starter posts, you can delete the "Ghost" staff user.
                  Deleting an author will automatically remove all of their
                  posts, leaving you with a clean blank canvas.
                </Paragraph>

                <Heading>Your guide to Ghost</Heading>

                <List>
                  {[
                    "Customizing your brand and site settings",
                    "Writing & managing content, an advanced guide for creators",
                    "Building your audience with subscriber signups",
                    "Selling premium memberships with recurring revenue",
                    "How to grow your business around an audience",
                    "Setting up custom integrations and apps",
                  ]}
                </List>

                <Paragraph>
                  If you get through all those and you're hungry for more, you
                  can find an extensive library of content for creators over on{" "}
                  <Link href="https://wale-portfolio.netlify.app/">
                    the Ghost blog
                  </Link>
                  .
                </Paragraph>

                <Divider />

                <Heading>Getting help</Heading>

                <Paragraph>
                  If you need help,{" "}
                  <Link href="https://wale-portfolio.netlify.app/">
                    Ghost(Pro)
                  </Link>{" "}
                  customers can always reach our full-time support team by
                  clicking on the Ghost(Pro) link inside their admin panel.
                </Paragraph>

                <Paragraph>
                  If you're a developer working with the codebase in a
                  self-managed install, check out our{" "}
                  <Link href="https://wale-portfolio.netlify.app/">
                    developer community
                  </Link>{" "}
                  forum to chat with other users.
                </Paragraph>

                <Paragraph>Have fun!</Paragraph>
              </div>

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

              <div className="px-6 py-3 text-center link-copy bg-mainBg w-full text-sm md:text-base tracking-normal mb-12 break-all">
                https://ghost.estudiopatagon.com/maktub/classic/
              </div>
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
