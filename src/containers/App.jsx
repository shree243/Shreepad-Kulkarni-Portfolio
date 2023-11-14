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
          <AnimatePresence>
            {Socials &&
              Socials.map((item, index) => (
                <HomeSocialLinks key={index} data={item} index={index} />
              ))}
          </AnimatePresence>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-12">

          <p className="text-texlight text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            minus placeat rem recusandae repellat, veritatis quod ratione dignissimos
            similique ex nobis accusamus dolores sapiente corrupti culpa fuga aut
            explicabo dolorem.
          </p>
          <p className="text-texlight text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            minus placeat rem recusandae repellat, veritatis quod ratione dignissimos
            similique ex nobis accusamus dolores sapiente corrupti culpa fuga aut
            explicabo dolorem.
          </p>
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <p className="text-texlight text-center">
              shreepadkulkarni73@gmail.com
            </p>
            <p className="txt-textlight text-center">+44-7741878718</p>
            <a href="#">
              <p className="text-primary text-center">Hire Me</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
