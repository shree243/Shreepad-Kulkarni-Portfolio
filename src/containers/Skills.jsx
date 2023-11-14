import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";
import { SkillCard } from "../components";
const Skills = () => {
  return (
    <section
      id="skills"
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
  from-primary to-secondary">Skills </p>
          <img src={Leaf2} className="w-6 h-auto object-contain margin-right: 15%" alt="" />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* image */}

        {/* content */}

        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p className="text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r
  from-primary to-secondary">My Skills and Work Experience </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            minus placeat rem recusandae repellat, veritatis quod ratione dignissimos
            similique ex nobis accusamus dolores sapiente corrupti culpa fuga aut
            explicabo dolorem.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            minus placeat rem recusandae repellat, veritatis quod ratione dignissimos
            similique ex nobis accusamus dolores sapiente corrupti culpa fuga aut
            explicabo dolorem.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            minus placeat rem recusandae repellat, veritatis quod ratione dignissimos
            similique ex nobis accusamus dolores sapiente corrupti culpa fuga aut
            explicabo dolorem.
          </p>
        </div>

        <div className="w-full flex flex-col gap-4 items-center justify-center px-8 ">

          <SkillCard skills={"Java"} percentage={"95%"} color={"#FF3F3F"} move={true} />
          <SkillCard skills={"SpringBoot"} percentage={"95%"} color={"#00008B"} move={false} />
          <SkillCard skills={"Hibernate"} percentage={"95%"} color={"green"} move={true} />
          <SkillCard skills={"React"} percentage={"80%"} color={"green"} move={false} />
          <SkillCard skills={"Angular"} percentage={"80%"} color={"#A020F0"} move={true} />
          <SkillCard skills={"NodeJs"} percentage={"90%"} color={"#FFA500"} move={false} />
          <SkillCard skills={"MySQL"} percentage={"95%"} color={"#ADD8E6"} move={true} />
          <SkillCard skills={"Mongo DB"} percentage={"80%"} color={"#FFC0CB"} move={false} />

        </div>
      </div>
    </section>
  )
};

export default Skills;
