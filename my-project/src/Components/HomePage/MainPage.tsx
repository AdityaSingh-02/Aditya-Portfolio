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
      <div className="flex pt-[80px] justify-center h-screen bg-gradient-to-b from-[#1e2129] to-black">
        <div className="flex flex-col space-y-4 justify-center items-center w-[60%] text-white">
          <div className="flex space-x-8 hover:cursor-pointer">
            <Link href={"https://github.com/AdityaSingh-02"} target="_blank">
              <AiFillGithub color="blue" size={28} />
            </Link>
            <Link
              href={"https://www.linkedin.com/mwlite/in/aditya-singh-76065422b"}
              target="_blank">
              <AiOutlineLinkedin color="blue" size={28} />
            </Link>
            <Link href={"https://www.instagram.com/aditya_op/"} target="_blank">
              <AiOutlineInstagram color="blue" size={27} />
            </Link>
            <Link href={"https://www.facebook.com/profile.php?id=100027346094203"} target="_blank">
              <AiOutlineFacebook color="blue" size={27} />
            </Link>
            <Link href={"#"} target="_blank">
              <AiOutlineTwitter color="blue" size={27} />
            </Link>
            <Link href={"#"} target="_blank">
              <SiLeetcode color="blue" size={27} />
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[55px] flex font-Tangerine">I'm an Full Stack Developer <p className="pl-5 text-red-600">|</p></h1>
            <p className="text-lg font-Roboto">Hi, I'm Aditya Singh, I'm Full Stack Web Developer </p>
            <p className="text-lg font-Roboto ">and I'm Currently doing Computer Science Engineering at DIT University, India</p>
          </div>
        </div>
        <div className="pt-5 pr-10">
          <Image src={"/MyImage.jpg"} alt="Me" width={600} height={500} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
