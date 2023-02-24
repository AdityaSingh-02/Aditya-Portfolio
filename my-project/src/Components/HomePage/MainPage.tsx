import React, { ReactElement } from "react";
import Image from "next/image";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillGithub,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";

const MainPage = (): ReactElement => {
  return (
    <>
      <div className="flex sm:flex-row flex-col-reverse sm:pt-[80px] justify-center h-screen bg-gradient-to-b from-[#21252e] to-black">
        <div className="flex flex-col sm:space-y-4 justify-center items-center w-[60%] text-white">
          <div className="flex sm:space-x-8 space-x-4 pl-10 pt-10 sm:pt-0 sm:pl-0 hover:cursor-pointer ">
            <Link href={"https://github.com/AdityaSingh-02"} target="_blank">
              <AiFillGithub color="red" className="hover:animate-bounce" size={28} />
            </Link>
            <Link
              href={"https://www.linkedin.com/mwlite/in/aditya-singh-76065422b"}
              target="_blank">
              <AiOutlineLinkedin color="red" className="hover:animate-bounce" size={28} />
            </Link>
            <Link href={"https://www.instagram.com/aditya_op/"} target="_blank">
              <AiOutlineInstagram color="red" className="hover:animate-bounce" size={27} />
            </Link>
            <Link
              href={"https://www.facebook.com/profile.php?id=100027346094203"}
              target="_blank">
              <AiOutlineFacebook color="red" className="hover:animate-bounce" size={27} />
            </Link>
            <Link href={"#"} target="_blank">
              <AiOutlineTwitter color="red" className="hover:animate-bounce" size={27} />
            </Link>
            <Link href={"#"} target="_blank">
              <SiLeetcode color="red" className="hover:animate-bounce" size={27} />
            </Link>
          </div>
          <div className="flex flex-col sm:space-y-1 mx-auto sm:justify-center sm:items-center">
            <h1 className="sm:text-[55px] sm:pt-5 sm:pb-4 text-2xl flex pt-3 pl-3 sm:pl-0 font-Tangerine">
              I'm an Full Stack Developer{" "} <p className="pl-5 text-red-600">|</p>
            </h1>
            <p className="px-3 sm:px-0 sm:text-lg py-2 sm:py-0 font-Roboto">
              Hi, I'm Full Stack Web Developer{" "}
            </p>
            <p className="px-3 sm:px-0 sm:text-lg font-Roboto ">
              and I'm Currently doing Computer Science Engineering {" "}at DIT
              University, India
            </p>
          </div>
        </div>
        <div className="sm:pt-5 sm:pr-10 sm:flex sm:items-center">
          <Image src={"/MyImage.jpg"} alt="Me" width={600} height={500} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
