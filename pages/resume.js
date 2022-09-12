import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Kunal | Resume</title>
        <link rel="icon" href="/assets/logo.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Kunal Raj</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/kunal-raj-189884202/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/Raj-Kunal"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Problem Solving</p>
          </div>
        </div>
        <p>about section</p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML <span className="px-2">|</span>
            CSS <span className="px-2">|</span>React
            <span className="px-2">|</span>Next
            <span className="px-2">|</span> Tailwind
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">Experience</h5>
        {/* Experience */}
        {/* Experience */}
      </div>
    </>
  );
};

export default resume;
