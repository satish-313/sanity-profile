import { motion } from "framer-motion";
import React from "react";

type Props = {};

const About: React.FC<Props> = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-6xl px-10 justify-evenly items-center mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: .6,
        }}
        className="mt-28 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:h-72 md:w-64 transition-all"
        src="./sana.jpg"
        alt="photo"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50 ">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          animi harum quaerat enim corrupti totam, cum aliquid sequi consectetur
          sit quis eligendi, placeat rerum assumenda quidem natus velit
          aspernatur fuga?
        </p>
      </div>
    </motion.div>
  );
};

export default About;
