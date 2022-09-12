import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/projectname") {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      className="fixed w-full h-20 shadow-xl z-[100]"
      style={{ backgroundColor: `${navBg}` }}
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Link href={"/"} passHref>
          <Image
            src="/../public/assets/logo.png"
            alt=""
            width="90"
            height="60"
          />
        </Link>
        <div>
          <ul className="hidden md:flex" style={{ color: `${linkColor}` }}>
            <Link href={"/"}>
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href={"/#about"}>
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href={"/#skills"}>
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href={"/#projects"}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href={"/#contact"}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div
            className="md:hidden"
            onClick={handleNav}
            style={{ color: `${linkColor}` }}
          >
            <AiOutlineMenu size={27} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href={"/"} passHref>
                <Image
                  src="/../public/assets/logo.png"
                  width="60"
                  height="35"
                  alt="/"
                  onClick={() => setNav(false)}
                />
              </Link>
              <div
                className="rounded-full p-3 shadow-lg shadow-gray-500 cursor-pointer"
                onClick={handleNav}
              >
                <AiOutlineClose size={27} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 ">
              <p className="w-[85%] md:w-[90%] py-3">
                Let&#39;s build something legendary together.
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-3 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-3 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-3 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-3 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-3 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-32">
              <p className="uppercase font-bold tracking-widest text-[#5651e5]">
                Lets&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/kunal-raj-189884202/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    onClick={() => setNav(false)}
                    className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/Raj-Kunal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    onClick={() => setNav(false)}
                    className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <FaGithub />
                  </div>
                </a>
                <Link href="#contact">
                  <div
                    onClick={() => setNav(false)}
                    className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(false)}
                    className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Navbar;
