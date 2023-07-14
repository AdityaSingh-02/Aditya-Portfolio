import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import Left from "@/components/Left";

const page = () => {
  return (
    <>
      <main className="md:flex transition-all font-light duration-300 min-h-screen flex-row md:flex-col items-center justify-center pt-16 md:pt-24 py-8 px-2">
        <div className="flex flex-col transition-all duration-200 justify-center items-center md:w-[60%] hover:bg-[#1a2540]  py-5 rounded-md space-y-3 ">
          <h1 className="text-xl text-gray-200 ">
            Professional Experience
          </h1>
          <div>
            <p className="flex text-xl hover:text-cyan-400">
              <Link
                href={"https://summerofcode.withgoogle.com/"}
                target="_blank">
                Google Summer of Codes @Rocket.Chat
                <BsBoxArrowInUpRight size={12} />
              </Link>
            </p>
            <p className="">
              Software Development Intern
            </p>
            <p className=" text-gray-400">
              Executed Real-Time Technical Documentation With Code-Tour
              Extension,
              <br /> Helps 90% of Contributors at Rocket.chat
            </p>
            <p className="font-normal text-gray-300">May 2023 - August 2023</p>
            <br />
            <p className="text-xl hover:text-cyan-400">
              <Link href={"https://oncampus.tech/"} target="_blank">
                onCampus Community <BsBoxArrowInUpRight size={12} />{" "}
              </Link>
            </p>
            <p className="">Tech Lead (Full Time)</p>
            <p className="text-gray-300">April 2023 - Present</p>
            <br />
          </div>
        </div>
        {/* Educations */}
        <div className="heading flex flex-col justify-center items-center transition-all duration-200 hover:bg-[#1a2540] text-gray-200  md:w-[60%] md:px-10 py-5 rounded-md space-y-3 ">
          <h1 className="text-xl text-gray-200 ">Education 🏫</h1>
          <div>
            {""}
            <p className="text-gray-300 text-xl">Graduation 🧑🏽‍🎓</p>
            <Link href={"https://www.dituniversity.edu.in/"} target="_blank">
              <p className="flex text-lg text-gray-200 hover:text-cyan-400 transition-all duration-200 cursor-pointer">
                DIT University, India <BsBoxArrowInUpRight size={12} />
              </p>
            </Link>
            <p className="text-gray-300">
              Bachelor&apos;s of Technologies in Computer Science and
              Engineering
            </p>
            <p className="text-sm text-gray-400 "> 2021 - 2025</p>
            <p>--</p>
            <p className="text-gray-300 text-xl ">Schooling 🎒 </p>
            <p className="text-lg text-gray-200 transition-all duration-200 cursor-pointer hover:text-cyan-400">
              Kendriya Vidyalaya No.2 Delhi Cantt, India
            </p>
            <p className="text-sm text-gray-400">2009 - 2021</p>
          </div>
        </div>
        <div className="heading flex flex-col justify-center items-center transition-all duration-200 hover:bg-[#1a2540] text-white  md:w-[60%] md:px-10 py-5 rounded-md space-y-3 ">
          <h1 className="text-xl  ">Technical Skills 👨🏽‍💻</h1>
          <div>
            <p className="text-lg text-gray-200 hover:text-cyan-400 transition-all duration-200 cursor-pointer">Programming Languages</p>
            <p className="text-gray-300">TypeScript | Java | Rust | Python | Go</p>
            <br />
            <p className="text-lg text-gray-200 hover:text-cyan-400 transition-all duration-200 cursor-pointer">FrameWorks/Technologies ⚙️</p>
            <p className="text-gray-300">
              ReactJs | NextJs | NodeJs | Solana | Blockchain | WEB3 | Anchor |
              MongoDB | MySQL | Firebase | GraphQL | Redux | TailwindCSS |
              WebRTC | REST API
            </p>
            <br />
            <p className="text-lg text-gray-200 hover:text-cyan-400 transition-all duration-200 cursor-pointer">Tools ⚒️ </p>
            <p className="text-gray-300">Git | GitHub | Docker | Linux </p>
            <br />
            <p className="text-lg text-gray-200 hover:text-cyan-400 transition-all duration-200 cursor-pointer">Soft Skills </p>
            <p className="text-gray-300">Public Speaking | Teaching | Management</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
