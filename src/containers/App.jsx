import React from "react";
import Header from './Header';
import Home from "./Home";
import ServiceCount from "./ServiceCount";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { AnimatePresence } from "framer-motion";
import { Socials } from "../utils/helper";
import { HomeSocialLinks } from "../components";
import ParticlesContainer from "./ParticlesContainer";
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


const App = () => {
  return (
    <div className="w-full xl:w-[1500px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">

      <ParticlesContainer />
      {/* header */}
      <Header />
      {/* home container */}
      <Home />

      {/* Services and count cards */}
      <ServiceCount />
      {/* about continer */}
      <About />
      {/* skills container */}
      <Skills />
      {/* project container */}
      <Projects />
      {/* contact container */}
      <Contact />
      {/* footer container  */}
      <div className="w-full flex flex-col items-center justify-start mt-32 mb-12">
        <p className="text-3xl tracking-wide text-texlight">Shreepad Kulkarni</p>
        <div className="flex items-center justify-center gap-16 mt-16">
          {/* <AnimatePresence>
            {Socials &&
              Socials.map((item, index) => (
                <HomeSocialLinks key={index} data={item} index={index} />
              ))}
          </AnimatePresence> */}
        </div>
        {/* <div className="relative">
          <img
            src={SocialMedia}
            alt="Amit Kumar"
            className="block w-full"
            style={{ maxHeight: "400px" }} // Adjust the maximum height as needed
          />
        </div> */}
        <h1 className="text-texlight max-w-xs ">Recommendations</h1>
        <br />
        <div className="flex flex-col gap-8 max-w-lg mx-auto">
          <p className="text-texlight">
            I highly recommend Shreepad Kulkarni as his manager. He possesses a deep understanding of software development and excels in various cutting-edge technologies. Shreepad's technical expertise and organizational skills have been invaluable to the company.
          </p>
          <p className="text-texlight">
            Throughout our years of collaboration on numerous projects, I was consistently impressed by his commitment to delivering high-quality results. He's not only a skilled professional but also an optimistic team player.
          </p>
          <p className="text-texlight">
            I recall our cricket match victory, which reflects his positive team spirit. Having such an enthusiastic and collaborative team member has been a source of pride during my tenure as his manager.
          </p>
          <h1 className="text-texlight">
            <span className="font-bold text-xl">Amit Kumar - </span>
            <span className="font-bold text-xl text-blue-500">Associate Director</span>
            <span className="font-bold text-xl"> - Crisil S&P Global</span>
          </h1>
        </div>

        {/* Experience */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 max-w-lg mx-auto">
          {/* Left Column */}
          <div className="flex-1 max-w-[400px]">
            <p className="text-texlight">
              Working with Shreepad Kulkarni was a fantastic experience. He's proficient in a range of technical skills and is the go-to person for solving challenging problems.
            </p>
          </div>
          {/* Right Column */}
          <div className="flex-1 max-w-[400px]">
            <p className="text-texlight">
              When it comes to work, he's incredibly dedicated and undoubtedly a valuable asset to any team or project.
            </p>
          </div>
          {/* Name at the Bottom */}
          <h1 className="text-texlight w-full text-center mt-8">
            <span className="font-bold text-xl">Nikhil Chaudhari - </span>
            <span className="font-bold text-xl text-blue-500">Software Engineer</span>
            <span className="font-bold text-xl"> - 3i Infotech pvt ltd</span>
          </h1>
        </div>

        {/* Expertise */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 max-w-lg mx-auto">
          <p className="text-texlight">
            Shreepad Kulkarni stands out as a highly proficient professional, showcasing expertise in Java, Spring Boot, Angular, Keycloak, Redis, Kafka, Node.js, and EJS. His outstanding abilities extend beyond technical knowledge.
          </p>
          <h1 className="text-texlight">
            <span className="font-bold text-xl">Shantanu Bhosale - </span>
            <span className="font-bold text-xl text-blue-500">Software Engineer</span>
            <span className="font-bold text-xl"> - Crisil S&P Global</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default App;
