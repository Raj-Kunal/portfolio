import Image from "next/image";
import React from "react";
import img from "../public/assets/portfolio-04.jpg"
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-4 flex items-center py-11">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Currently I&#39;m pursuing my BTech in Computer Science Engineering
            from Maharaja Surajmal Institute of Technology, GGSIPU.
          </p>
          <p className="py-2 text-gray-600">
            I&#39;m a passionate Full Stack Developer 🚀and I am spending my
            time building projects with Reactjs | Nextjs | Nodejs | MongoDB |
            Firebase and some other cool libraries and frameworks, and learning
            new technologies.{" "}
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={img}
            alt="/"
            width={500}
            height={400}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
