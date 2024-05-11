import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaServer,
  FaComputer,
  FaWrench,
} from "react-icons/fa6";

import { FaSyncAlt } from "react-icons/fa";

import {
  SiRedux,
  SiChakraui,
  SiExpress,
  SiMysql,
  SiVisualstudiocode,
  SiPostman,
  SiAffinityphoto,
  SiAdobepremierepro,
} from "react-icons/si";

const skillsData = [
  {
    title: "Frontend",
    icon: FaComputer,
    tech: [
      {
        name: "HTML5",
        icon: FaHtml5,
      },
      {
        name: "CSS3",
        icon: FaCss3,
      },
      {
        name: "Javascript",
        icon: FaJs,
      },
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "Redux",
        icon: SiRedux,
      },
      {
        name: "Bootstrap",
        icon: FaBootstrap,
      },
      {
        name: "Chakra UI",
        icon: SiChakraui,
      },
    ],
  },
  {
    title: "Backend",
    icon: FaServer,
    tech: [
      {
        name: "MongoDB / NoSQL",
        icon: FaHtml5,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
      },
      {
        name: "SQL",
        icon: SiMysql,
      },
      {
        name: "RESTful APIs",
        icon: FaSyncAlt,
      },
    ],
  },
  {
    title: "Tools",
    icon: FaWrench,
    tech: [
      {
        name: "Git & Github",
        icon: FaGithub,
      },
      {
        name: "Visual Studio Code",
        icon: SiVisualstudiocode,
      },
      {
        name: "Postman",
        icon: SiPostman,
      },
      {
        name: "Figma",
        icon: FaFigma,
      },
      {
        name: "Affinity Photo 2",
        icon: SiAffinityphoto,
      },
      {
        name: "Davinci Resolve",
        icon: SiAdobepremierepro,
      },
    ],
  },
];

export default skillsData;
