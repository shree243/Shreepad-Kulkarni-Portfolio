import React from "react";
import { ServiceCard } from "../components";

const ServiceCount = () => {
  return (

    <div className="w-full py-6 lg:py-24 flex items-center justify-center
    flex-wrap gap-8">

      <ServiceCard count={"3+"} text={"MERN Projects"} />
      <ServiceCard count={"3+"} text={"Java-React/NG Projects"} />
      <ServiceCard count={"3.6 yrs"} text={"As SDE-||"} />
      <ServiceCard count={"1st"} text={"Ranked in State Yoga Competition"} />
    </div>
  )
};

export default ServiceCount;
