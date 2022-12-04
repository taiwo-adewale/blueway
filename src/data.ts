interface linksType {
  linkName: string;
  linkUrl: string;
}

interface tagsType {
  tag: string;
  color: string;
}
interface postType {
  postHeader: string;
  post: string;
  cont:string;
  author:string;
  date: string;
  durts:string
}

export const links: linksType[] = [
  {
    linkName: "Home",
    linkUrl: "/",
  },
  {
    linkName: "membership",
    linkUrl: "/membership",
  },
  {
    linkName: "styleguide",
    linkUrl: "/styleguide",
  },
  {
    linkName: "#tag",
    linkUrl: "/tag",
  },
  {
    linkName: "more",
    linkUrl: "/more",
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

export const posting: postType[] = [
  {
    postHeader: "Far far away, behind the word mountains",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nostrum quidem deleniti ab, quisquam corrupti, rem facilis molestias alias quo inventore, hic quaerat incidunt reprehenderit debitis repellendus earum labore repellat...",
    cont:'Continue reading',
    author:'Jonathan Doe',
    date: 'March 16, 2021',
    durts:"3 min read"
  },
  {
    postHeader: "Far far away, behind the word mountains",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nostrum quidem deleniti ab, quisquam corrupti, rem facilis molestias alias quo inventore, hic quaerat incidunt reprehenderit debitis repellendus earum labore repellat...",
    cont:'Continue reading',
    author:'Wale Dev',
    date: 'January 16, 2023',
    durts:"13 min read"
  },
  {
    postHeader: "Far far away, behind the word mountains",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nostrum quidem deleniti ab, quisquam corrupti, rem facilis molestias alias quo inventore, hic quaerat incidunt reprehenderit debitis repellendus earum labore repellat...",
    cont:'Continue reading',
    author:'Susan Storm',
    date: 'Febuary 31, 2000',
    durts:"193 min read"
  },
  {
    postHeader: "Far far away, behind the word mountains",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nostrum quidem deleniti ab, quisquam corrupti, rem facilis molestias alias quo inventore, hic quaerat incidunt reprehenderit debitis repellendus earum labore repellat...",
    cont:'Continue reading',
    author:'Harry Markle',
    date: 'October 16, 2020',
    durts:"3 min read"
  },
  {
    postHeader: "Far far away, behind the word mountains",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nostrum quidem deleniti ab, quisquam corrupti, rem facilis molestias alias quo inventore, hic quaerat incidunt reprehenderit debitis repellendus earum labore repellat...",
    cont:'Continue reading',
    author:'Mark Lee',
    date: 'May 4, 2021',
    durts:"3 min read"
  },
  {
    postHeader: "Far far away, behind the word mountains",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nostrum quidem deleniti ab, quisquam corrupti, rem facilis molestias alias quo inventore, hic quaerat incidunt reprehenderit debitis repellendus earum labore repellat...",
    cont:'Continue reading',
    author:'Jonathan Doe',
    date: 'March 16, 2021',
    durts:"3 min read"
  },
  {
    postHeader: "Far far away, behind the word mountains",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nostrum quidem deleniti ab, quisquam corrupti, rem facilis molestias alias quo inventore, hic quaerat incidunt reprehenderit debitis repellendus earum labore repellat...",
    cont:'Continue reading',
    author:'CodeSamurai',
    date: 'July 8, 2031',
    durts:"5 min read"
  },
  {
    postHeader: "Far far away, behind the word mountains",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nostrum quidem deleniti ab, quisquam corrupti, rem facilis molestias alias quo inventore, hic quaerat incidunt reprehenderit debitis repellendus earum labore repellat...",
    cont:'Continue reading',
    author:'Mary Fox',
    date: 'April 1, 2010',
    durts:"10 min read"
  },
];
