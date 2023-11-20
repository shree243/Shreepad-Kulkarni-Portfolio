import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";
const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center
  flex-col gap-12 my-12"
    >
      {/* title */}
      <div className="w-full flex items-center justify-center py-24">

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}


          className="flex items-center justify-center py-24">
          <img src={Leaf1} className="w-6 h-auto object-contain margin-left: 15%;" alt="" />
          <p className="text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r
    from-primary to-secondary">About </p>
          <img src={Leaf2} className="w-6 h-auto object-contain margin-right: 15%" alt="" />
        </motion.div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* image */}
        <div className="w-full flex items-center justify-center px-8 ">

          <div className="w-full lg:w-96 p-[2px] rounded-md 
  bg-gradient-to-br from bg-primary to-secondary
  relative">
            <img src={about} className="w-full rounded-md h-auto object-contain" alt="" />

            <div className="absolute w-full h-full-top-3 -left-2 
bg-gradient-to-br from bg-primary to-secondary rounded-md blur-[5px] -z-10">

            </div>
          </div>
        </div>
        {/* content */}

        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p className="text-texlight text-base tracking-wide text-justify">
            I am pursuing my Master of Science in Computer Science aiming to graduate in Jan 2025 from University College Birmingham (UCB), UK.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            I have more than 3 years of work experience as a Software Engineer - II at 3i Infotech worked for Crisil and Maxval Technologies. I was a key contributor in developing an end-to-end regulatory applications as low-code no-code, banking systems, Employee management saving billions in penalties and pioneering the company's first cloud-based application.
            journey through academia and the corporate world has equipped me with a diverse skill set, including proficiency in:
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Programming languages: Java, JavaScript, TypeScript, Python
            Web Technologies: Angular, React ,Spring Boot, Node.js, GraphQL
            Databases: MySQL, MongoDB
            Miscellaneous: Microsoft Azure, Git, Jenkins, JIRA, REST APIs, GRPC, Keycloak, Monorepo, Kafka, OPA
            I am actively seeking full time roles in software development starting in Sept 2024. Let's connect and explore opportunities!
          </p>
        </div>
      </div>
    </section>

  )
};

export default About;
