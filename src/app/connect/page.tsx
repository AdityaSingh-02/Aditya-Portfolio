import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import Link from "next/link";

const Connection = () => {
  return (
    <>
      <main className="md:flex md:flex-wrap transition-all duration-200 bg-gradient-to-b  min-h-screen flex-row md:flex-col items-center justify-center md:py-16 py-8 px-16 md:px-24 ">
        {/* <Navbar /> */}
        <div className="flex flex-col text-black text-lg md:text-xl space-y-6 md:space-y-8 pt-24 md:pt-0">
          <Link
            href={"https://www.linkedin.com/mwlite/in/aditya-singh-76065422b"}
            target="_blank"
            className="heading hover:scale-95 transition-all duration-200 flex items-center px-10 md:px-44 bg-white py-4 rounded-xl">
            <button className="flex ">
              <AiFillLinkedin size={25} />
              LinkedIn
            </button>
          </Link>
          <Link
            href={"https://github.com/AdityaSingh-02"}
            target="_blank"
            className="heading hover:scale-95 transition-all duration-200 flex items-center px-10 md:px-44 bg-white py-4 rounded-xl">
            <button className="flex">
              <AiFillGithub size={25} />
              GitHub
            </button>
          </Link>
          <Link
            href={"https://www.instagram.com/aditya_op/"}
            target="_blank"
            className="heading hover:scale-95 transition-all duration-200 flex items-center px-10 md:px-44 bg-white py-4 rounded-xl">
            <button className="flex">
              <AiOutlineInstagram size={25} />
              Instagram
            </button>
          </Link>
          <Link
            href={"https://twitter.com/Go_D_Aditya"}
            target="_blank"
            className="heading hover:scale-95 transition-all duration-200 flex items-center px-10 md:px-44 bg-white py-4 rounded-xl">
            <button className="flex">
              <AiOutlineTwitter size={25} />
              Twitter
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Connection;
