import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  php,
  mysql,
  laravel,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  aqua,
  atrahdis,
  bpptik,
  dblogspot,
  catatan,
  game,
  portfolio,
  threejs,
  framer,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React",
    icon: mobile,
  },
  {
    title: "MySQL",
    icon: backend,
  },
  {
    title: "Web Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "mysql",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Admin",
    company_name: "AHS-Hardea",
    icon: aqua,
    iconBg: "#051319",
    date: "Maret 2020 - Desember 2020",
    points: [
      "helps receive incoming and outgoing aqua products.",
      "managing products sold and managing products that are defective or damaged.",
      "helps manage incoming and outgoing finances.",
      "receive goods and clean up goods when they enter the store",
    ],
  },
  {
    title: "Graphic Design",
    company_name: "PT. Atrahdis Idea Nusantara",
    icon: atrahdis,
    iconBg: "#051319",
    date: "Juni 2023 - Agustus 2023",
    points: [
      "Create designs for posters, Instagram posts, Instagram stories, and create designs for websites.",
      "Correct if there are images that do not match.",
      "Create image designs for at least 6 posts to be uploaded to Instagram in one day.",
      "Create a logo design, game design or promotional design for a company.",
    ],
  },
  {
    title: "Junior Web Developer",
    company_name: "BPPTIK",
    icon: bpptik,
    iconBg: "#051319",
    date: "Juli 2023 - Agustus 2023",
    points: [
      "Learn basic programming using the PHP programming language.",
      "Learn MySQL and create a simple program using the PHP programming language.",
      "Create more efficient programs with PHP and MySQL.",
      "Certification and competency tests are held at the BPPTIK office.",
    ],
  },
];

const projects = [
  {
    name: "D Blogspot",
    description:
      "A web-based platform that allows users to search for and manage personal blog posts, giving dblogspot users the convenience of writing their articles on this platform.",
    tags: [
      {
        name: "tailwind",
        image: tailwind,
      },
      {
        name: "mysql",
        image: mysql,
      },
      {
        name: "tailwind",
        image: laravel,
      },
      {
        name: "figma",
        image: figma,
      },
    ],
    image: dblogspot,
    source_code_link: "https://github.com/dhearr",
  },
  {
    name: "App-Catatan",
    description:
      "This web application was created to help my friend who is selling a meatball product. Initially orders were only recorded in ordinary notes, now they are recorded in the web application.",
    tags: [
      {
        name: "react",
        image: reactjs,
      },
      {
        name: "tailwind",
        image: tailwind,
      },
      {
        name: "figma",
        image: figma,
      },
    ],
    image: catatan,
    source_code_link: "https://github.com/dhearr",
  },
  {
    name: "Suwit Game",
    description:
      "I learned this Javanese script game made with HTML, CSS and JavaScript from WPU YouTube channel. This web game was made when I was learning JavaScript (DOM).",
    tags: [
      {
        name: "html",
        image: html,
      },
      {
        name: "css",
        image: css,
      },
      {
        name: "javasript",
        image: javascript,
      },
    ],
    image: game,
    source_code_link: "https://github.com/dhearr",
  },
  {
    name: "My Portfolio",
    description:
      "This portfolio website was created using React, Framer Motion and TailWindcss technology, this portfolio website was inspired by Helmi Satria Figma design.",
    tags: [
      {
        name: "react",
        image: reactjs,
      },
      {
        name: "three",
        image: threejs,
      },
      {
        name: "tailwind",
        image: tailwind,
      },
      {
        name: "framer",
        image: framer,
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
