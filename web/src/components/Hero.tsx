import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// import Image from "next/image";
import { BackgroundCircle } from ".";
type Props = {};

const Hero: React.FC<Props> = () => {
  const [text, count] = useTypewriter({
    words: ["Hi, I am Satish kumar", "I Love to coding and building Fun stuff"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img
        className="relative rounded-full h-32 w-32 mx-auto "
        src="./sana_crop.jpg"
        alt="my-photo"
      />
      <div>
        <h1>
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
    </div>
  );
};

export default Hero;
