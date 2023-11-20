import {
  FaDiagramProject,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
  FaYoutube,
} from "react-icons/fa6";
import {
  ChatApp,
  CodePenClone,
  FreshJuiceUI,
  ImageSharing,
  OpenAI,
  PixabayClone,
  PortfolioFirebase,
  RestaurantClone,
  SocialMedia,
} from "../assets";

export const Socials = [
  {
    id: `facebook-${Date.now()}`,
    Icon: FaFacebookF,
    uri: "https://www.facebook.com/profile.php/?id=100006344310010",
    color: "#1877F2",
  },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uri: "https://www.linkedin.com/in/shreepad-kulkarni8",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uri: "https://github.com/shree243",
    color: "#fff",
  }
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: `E-commerce Website-${Date.now()}`,
    name: "E-commerce Website",
    imgSrc: RestaurantClone,
    gitURL: "https://github.com/shree243/React-SpringBoot-E-Commerce-Project",
  },
  {
    id: `TIC-TAC-TOE-${Date.now()}`,
    name: "TIC-TAC-TOE",
    imgSrc: CodePenClone,
    gitURL: "https://github.com/shree243/Tic-Tac-Toe-React-Game",
  },
  {
    id: `Jenkins Deploy-${Date.now()}`,
    name: "Jenkins Deploy",
    imgSrc: OpenAI,
    gitURL: "",
  },
  {
    id: `Social Media-App-${Date.now()}`,
    name: "Social Media-App",
    imgSrc: ChatApp,
    gitURL: "https://github.com/shree243/SocialMedia-website-Mern",
  }
];
