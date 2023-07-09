import Navbar from "@/components/Navbar";
import React from "react";
import "./ex.css";
import Link from "next/link";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const page = () => {
  return (
    <>
      <main className="Mains md:flex md:flex-wrap transition-all duration-300  min-h-screen flex-row md:flex-col items-center justify-between md:py-16 py-8 px-24 ">
        <Navbar />

        <div className=" flex flex-col  md:flex-wrap font-mono space-y-9 justify-center items-center py-6">
          <div className="heading flex flex-col justify-center items-center bg-[#50ffaf] text-black font-mono w-[340px] md:w-[100%] px-10 py-5 rounded-md space-y-3 ">
            <h1 className="text-xl font-bold font-mono underline ">
              Professional Experience
            </h1>
            <div>
              <p className="flex font-bold text-xl">
                <Link
                  href={"https://summerofcode.withgoogle.com/"}
                  target="_blank">
                  Google Summer of Codes @Rocket.Chat
                  <BsBoxArrowInUpRight size={12} />
                </Link>
              </p>
              <p className="font-semibold underline">Software Development Intern</p>
              <p className="font-semibold">Executed Real-Time Technical Documentation With Code-Tour Extension,<br /> Helps 90% of Contributors at Rocket.chat</p>
              <p>May 2023 - August 2023</p>
              <br />
              <p className="font-bold text-xl">
                <Link href={"https://oncampus.tech/"} target="_blank">
                  onCampus Community <BsBoxArrowInUpRight size={12} />{" "}
                </Link>
              </p>
              <p className="font-semibold underline">Tech Lead (Full Time)</p>
              <p>April 2023 - Present</p>
              <br />
            </div>
          </div>
          <div className="heading flex flex-col justify-center items-center bg-yellow-400 text-black font-Satisfy w-[340px] md:w-[100%] px-10 py-5 rounded-md space-y-3 ">
            <h1 className="text-xl font-bold font-mono ">Education 🏫</h1>
            <div>
              {""}
              <p className="font-bold font-mono">Graduation 🧑🏽‍🎓</p>
              <Link href={"https://www.dituniversity.edu.in/"} target="_blank">
                <p className="flex font-bold font-mono">
                  DIT University, India <BsBoxArrowInUpRight size={12} />
                </p>
              </Link>
              <p className="font-mono font-semibold">
                Bachelor&apos;s of Technologies in Computer Science and Engineering
              </p>
              <p className="text-sm font-mono "> 2021 - 2025</p>
              <p>--</p>
              <p className="font-bold font-mono">Schooling 🎒 </p>
              <p className="font-mono font-bold">
                Kendriya Vidyalaya No.2 Delhi Cantt, India
              </p>
              <p className="font-mono text-sm">2009 - 2021</p>
            </div>
          </div>
          <div className="heading flex flex-col justify-center items-center bg-red-300 text-black font-mono w-[340px] md:w-[100%] px-10 py-5 rounded-md space-y-3 ">
            <h1 className="text-xl font-bold font-mono ">
              Technical Skills 👨🏽‍💻
            </h1>
            <div>
              <p className="font-bold">Programming Languages</p>
              <p>TypeScript | Java | Rust | Python | Go</p>
              <br />
              <p className="font-bold">FrameWorks/Technologies ⚙️</p>
              <p>
                ReactJs | NextJs | NodeJs | Solana | Blockchain | WEB3 | Anchor | MongoDB | MySQL
                | Firebase | GraphQL | Redux | TailwindCSS | WebRTC | REST API
              </p>
              <br />
              <p className="font-bold">Tools ⚒️ </p>
              <p>Git | GitHub | Docker | Linux </p>
              <br />
              <p className="font-bold">Soft Skills </p>
              <p>Public Speaking | Teaching | Management</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
