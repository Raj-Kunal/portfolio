import Image from "next/image";
import React, { useState } from "react";
import img1 from "../public/assets/portfolio-04.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {HiOutlineChevronDoubleUp} from "react-icons/hi"
import Link from "next/link";

const Contact = () => {

  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

   // Update inputs value
   const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

   // Form Submit function
   const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/f/bc43c2bb-25a8-4b8a-ae58-5b36a387a640", {
      method: "POST",
      body: formData
    }).then(() => setQuery({ name: "", email: "", message: "", phone:"" }));
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-20 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          CONTACT
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-500 rounded-xl p-4 ">
            <div className="lg:p-4 items-center justify-center h-full  ">
              <div className="hover:scale-105 ease-in duration-300">
                <Image className="rounded-xl" src={img1} height='350px' />
              </div>
              <div>
                <div>
                  <h2 className="py-2">Name Here</h2>
                  <p>MERN Developer</p>
                  <p className="py-4">
                    I am available for freelance or inter positions. Contact me
                    and let's talk.
                  </p>
                </div>
                <div>
                  <p className="uppercase pt-8">Connect With Me</p>
                  <div className="flex items-center justify-between py-4">
                    <a href='https://www.linkedin.com/in/kunal-raj-189884202/' target='_blank'
                    rel='noreferrer'>
                      <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <a href='https://github.com/Raj-Kunal' target='_blank'
                    rel='noreferrer'>
                    <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaGithub />
                    </div>
                    </a>
                    <Link href='#contact'>
                    <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <AiOutlineMail />
                            </div>
                    </Link>
                            <Link href='/resume'>
                            <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <BsFillPersonLinesFill />
                            </div>
                            </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* contact form */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-500 rounded-xl lg:p-4">
            <div className="p-4">
                <form onSubmit={formSubmit}>
                    <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                        <div className="flex flex-col">
                            <label className='uppercase text-sm py-2'>Name</label>
                            <input 
                              name="name"
                              required
                              value={query.name}
                              onChange={handleParam()}
                              className='border-2 rounded-lg p-2 flex border-gray-300' 
                              type="text" />
                        </div>
                        <div className="flex flex-col">
                            <label className='uppercase text-sm py-2'>Phone Number</label>
                            <input
                             name="phone"
                             required
                             autoComplete="off"
                             value={query.phone}
                             onChange={handleParam()}
                              className='border-2 rounded-lg p-2 flex border-gray-300' 
                            type="tel" />
                        </div>
                    </div>
                    <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input 
                       name="email"
                       required
                       value={query.email}
                       onChange={handleParam()}
                      className='border-2 rounded-lg p-2 flex border-gray-300' 
                      type="email" />
                    </div>
                    <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea 
                     name="message"
                     required
                     value={query.message}
                     onChange={handleParam()} className='border-2 rounded-lg p-2 flex border-gray-300' rows={10}></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className='shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] w-full p-3 text-gray-100 mt-6'>Send Message</button>
                </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
            <Link href={'/'}>
                <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
