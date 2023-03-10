import React from "react";
import { motion } from "framer-motion";
type Props = {};

const WorkExpirenceCard: React.FC<Props> = () => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-500px md:w-[600px] xl:w-[980px] snap-center p-10 bg-[#292929] hover:opacity-100 
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-center"
        src="./sana.jpg"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of senocode.com</h4>
        <p className="font-bold text-2xl mt-1">senocode.com</p>
        <div className="flex space-x-2  my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="./logos/reactjs.png"
            alt="react"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work ... Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg ">
          <li>Summery point</li>
          <li>Summery point</li>
          <li>Summery point</li>
          <li>Summery point</li>
        </ul>
      </div>
    </article>
  );
};

export default WorkExpirenceCard;
