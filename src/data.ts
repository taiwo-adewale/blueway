import { images } from "./constants";

interface linksType {
  linkName: string;
  linkUrl: string;
}

interface tagsType {
  tag: string;
  url: string;
  color: string;
}

interface comments {
  commenter: string;
  image: string;
  timeSpent: number;
  comment: string;
  likes: number;
  comments?: comments[];
}

interface postsType {
  title: string;
  url: string;
  image: string;
  date: string;
  minsToRead: number;
  author: string;
  authorImg: string;
  tags: tagsType[];
  body: string;
  comments?: comments[];
}

export const links: linksType[] = [
  {
    linkName: "home",
    linkUrl: "/",
  },
  {
    linkName: "membership",
    linkUrl: "/membership",
  },
  {
    linkName: "style guide",
    linkUrl: "/style-guide",
  },
  {
    linkName: "#tag",
    linkUrl: "/tags",
  },
  {
    linkName: "more",
    linkUrl: "/more",
  },
];

export const tags: tagsType[] = [
  {
    tag: "Getting Started",
    url: "getting-started",
    color: "#FF4C60",
  },
  {
    tag: "Health",
    url: "health",
    color: "#f5b061",
  },
  {
    tag: "Lifestyle",
    url: "lifestyle",
    color: "#83fbd7",
  },
  {
    tag: "Music",
    url: "music",
    color: "#fb0699",
  },
  {
    tag: "Technology",
    url: "technology",
    color: "#3f8cff",
  },
  {
    tag: "Travel",
    url: "travel",
    color: "#7171e2",
  },
];

export const posts: postsType[] = [
  {
    title: "Far far away, behind the word mountains",
    url: "far-far-away-behind-the-word-mountains",
    image: images.mountain01,
    date: "March 16, 2021",
    minsToRead: 3,
    author: "Taiwo Adewale",
    authorImg: images.person01,
    tags: [tags[0], tags[3]],
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores strum quidem deleniti ab, quisquam corrupti, rem facilis molestia alias quo inventore, hic quaerat incidunt reprehenderit debitis repellendus earum labore repellat...",
    comments: [
      {
        commenter: "T Blaze",
        image: images.person01,
        timeSpent: 3,
        comment: "This is my test comment",
        likes: 17,
        comments: [
          {
            commenter: "Nick Cannon",
            image: images.person01,
            timeSpent: 2,
            comment: "This is not the place to test comments",
            likes: 43,
          },
          {
            commenter: "Sophia Black",
            image: images.person01,
            timeSpent: 2,
            comment: "I agree with Nick",
            likes: 8,
          },
        ],
      },
    ],
  },
  {
    title: "War far away, behind the word mountains",
    url: "war-far-away-behind-the-word-mountains",
    image: images.mountain02,
    date: "June 16, 2021",
    minsToRead: 5,
    author: "Taiwo Adewale",
    authorImg: images.person01,
    tags: [tags[2], tags[1], tags[5]],
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores strum quidem deleniti ab, quisquam corrupti, rem facilis molestia alias quo inventore, hic quaerat incidunt reprehenderit debitis repellendus earum labore repellat...",
  },
  {
    title: "Say far away, behind the word mountains",
    url: "say-far-away-behind-the-word-mountains",
    image: images.mountain01,
    date: "March 16, 2021",
    minsToRead: 4,
    author: "Taiwo Adewale",
    authorImg: images.person01,
    tags: [tags[4], tags[2]],
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores strum quidem deleniti ab, quisquam corrupti, rem facilis molestia alias quo inventore, hic quaerat incidunt reprehenderit debitis repellendus earum labore repellat...",
  },
  {
    title: "Say far away, behind the word mountains",
    url: "say-far-away-behind-the-word-mountains",
    image: images.mountain01,
    date: "March 16, 2021",
    minsToRead: 4,
    author: "Taiwo Adewale",
    authorImg: images.person01,
    tags: [tags[4], tags[2]],
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores strum quidem deleniti ab, quisquam corrupti, rem facilis molestia alias quo inventore, hic quaerat incidunt reprehenderit debitis repellendus earum labore repellat...",
  },
];
