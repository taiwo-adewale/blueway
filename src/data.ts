interface linksType {
  linkName: string;
  linkUrl: string;
}

interface tagsType {
  tag: string;
  color: string;
}

export const links: linksType[] = [
  {
    linkName: "home",
    linkUrl: "/",
  },
  {
    linkName: "membership",
    linkUrl: "/",
  },
  {
    linkName: "style guide",
    linkUrl: "/",
  },
  {
    linkName: "#tag",
    linkUrl: "/",
  },
  {
    linkName: "more",
    linkUrl: "/",
  },
];

export const tags: tagsType[] = [
  {
    tag: "Getting Started",
    color: "#FF4C60",
  },
  {
    tag: "Health",
    color: "#f5b061",
  },
  {
    tag: "Lifestyle",
    color: "#83fbd7",
  },
  {
    tag: "Music",
    color: "#fb0699",
  },
  {
    tag: "Technology",
    color: "#3f8cff",
  },
  {
    tag: "Travel",
    color: "#7171e2",
  },
];
