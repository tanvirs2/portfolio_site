import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  php,
  laravel,
  tailorGif,
  customFabric,
  cb, banner2d,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "myStory",
    title: "Childhood Story",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "NodeJS Developer",
    icon: nodejs,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Three.JS (3D) Developer",
    icon: threejs,
  },
  {
    title: "JavaScript Developer",
    icon: javascript,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "PHP",
    icon: php,
  }
];

const experiences = [
  {
    title: "Full-stack Developer",
    company_name: "GenomeArc Inc",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2021 - PRESENT (Remote)",
    points: [
      "In this organization, we utilize a specialized software designed exclusively for medical scientists.",
      "I have modified the interface to make it interactive and easy to use for scientists, as they have different requirements compared to other users. Moreover, I have improved the performance optimization.",
      "Additionally, I am involved in the development and guidance of their website, which is user-friendly and dynamic for both general users and administrators.",
    ],
  },/*{
    title: "2D,3D Graphics Programmer",
    company_name: "Codebeyins (Co-Founder)",
    icon: cb,
    iconBg: "#383E56",
    date: "DECEMBER 2021 - PRESENT (Part Time)",
    points: [
      "I am one of the co-founders of this organization.",
      "I am involved in developing and guiding projects, mentoring developers to create user-friendly and dynamic experiences for both general users and administrators.",
      "Sometimes, when nearing the deadline for project development, I step in at the last moment and take over projects, ensuring their completion before the deadline. I play a crucial role in every aspect of our team.",
    ],
  },*/

  {
    title: "Software Engineer",
    company_name: "Banglalink Digital Communication",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2018 - February 2021",
    points: [
      "This company is currently one of the largest telecommunications companies in Bangladesh. I upgraded their existing CRM application to the next version.",
      "When I joined them, they were facing a serious issue with accessing this application. The application was extremely slow and di�cult to use. They had been struggling with this problem for the past three months. I conducted an investigation and within just four days, I identified the problem and reported it to the group head.",
      "I initiated the process of fixing the problem and once it was resolved, my group head expressed great appreciation and they were very pleased  to have me on board.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "West Apparels Ltd",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "September 2017 - April 2018",
    points: [
      "I am employed as a Software Engineer in this company, focusing on utilizing a specialized ERP software designed for the ready-made garments (RMG) industry.",
      "I am responsible for the development of both the frontend and backend of this software. It is specifically designed to be easily navigable for users with limited experience.",
      "I have created 2 complex modules for this software in total, which includes a successful user activity tracking system. The organization's owners are extremely satisfied with this module and have rewarded me with a promotion.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SpinAutomation ERP",
    description:
      "Cloud-based: ERP SpinAutomation is a software suite that operates on the cloud and is specifically created for medium-sized businesses (MSB). It others a wide range of functionalities that can assist MSB in automating their business operations, enhancing their productivity, and enabling more informed decision-making.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "vue",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    techImg: laravel,
    source_code_link: "http://erp.tanvirpro.com/",
  },
  {
    name: "EliteT@ilor (3D)",
    description:
      "Impeccable-custom-tailoring: ElitTailor is an internet-based tailoring platform which enables users to design personalized shirts, suits, and other clothing items. It has a variety of fabrics and styles to choose from. elitTailor is an excellent system for transforming user envisioned garments into reality.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "three.JS",
        color: "green-text-gradient",
      },
      {
        name: "node.JS",
        color: "pink-text-gradient",
      },
    ],
    image: tailorGif,
    techImg: threejs,
    source_code_link: "https://elite.tanvirpro.com/tailor",
  },
  {
    name: "SMS API",
    description:
      "Own-Phone-SMS-API-system: The app is developed for Android using React Native. It allows users to send SMS messages through a specific API URL. The main focus of the app is WebSocket technology, which is the underlying system behind its functionality.",
    tags: [
      {
        name: "react_native",
        color: "blue-text-gradient",
      },
      {
        name: "websocket",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    techImg: reactjs,
    source_code_link: false,
  },

  {
    name: "Dynamic Fabric (2D)",
    description:
      "Replace the fabric with PixiJS, as it allows users to customize their fabric designs. It utilizes WebGL in a way similar to threeJS. It is lightweight and easy to render on user devices, using minimal hardware resources. In a nutshell, it is an amazing technology and the near future of web technology.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "pixijs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: customFabric,
    techImg: figma,
    source_code_link: false,
  },

  {
    name: "Graphics Programing",
    description:
      "This is an animation created using vanilla JavaScript. I named this project \"Sweet Dream\" during development. It does not utilize WebGL or any WebGL libraries like ThreeJS or BabylonJS, so it technically does not rely on the GPU. Instead, it solely relies on the CPU, making it a CPU-intensive project. Nonetheless, it is a unique and impressive piece of work.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "vanilla",
        color: "green-text-gradient",
      },
    ],
    image: banner2d,
    techImg: javascript,
    source_code_link: "https://old.tanvirpro.com/all_project/2D/sweetDream/",
  },
];

const contacts = [
    //https://gitlab.com/tanvirs2
  {
    name: "",
    image: "",
    url: ""
  }
];

export { services, technologies, experiences, testimonials, projects };
