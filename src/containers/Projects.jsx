import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";
import { ProjectsData } from "../utils/helper";
import { FaGithub } from "react-icons/fa6";
const Projects = () => {
  return (
    <section
      id="projects"
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
    from-primary to-secondary">Projects </p>
          <img src={Leaf2} className="w-6 h-auto object-contain margin-right: 15%" alt="" />
        </motion.div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        <AnimatePresence>
          {ProjectsData && ProjectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
};

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <motion.div key={project.id}
      className="overflow-hidden cursor-pointer relative rounded-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        className="w-ful h-full object-contain rounded-lg"
        src={project.imgSrc} />

      {isHovered && (
        <motion.div className="absolute inset-0 backdrop-blur-md bg-[rgba(0,0,0,0.6)] flex items-center justify-center flex-col gap-2">
          <p className="text-xl text-primary"
          >{project?.name}</p>
          <a href={project?.gitURL} className="">
            <FaGithub className="text-3xl text-white hover:text-primary" />
          </a>
        </motion.div>
      )}
    </motion.div>
  )
}
export default Projects;
