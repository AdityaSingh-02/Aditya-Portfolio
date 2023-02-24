import React, { ReactElement } from "react";
import Image from "next/image";

const DetailsAbout = (): ReactElement => {
  return (
    <>
      <div className="h-[100vh] bg-gradient-to-b from-black to-neutral-900 pt-20 ">
        <div className="sm:flex sm:justify-around">
          <div className="sm:flex hidden">
            <Image src={"/MyImage.jpg"} alt="myImg" width={600} height={100} />
          </div>
          <div className="text-white flex flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold font-Roboto  text-red-600 ">
              About Me
            </h1>
            <p className="font-Roboto text-lg px-5">
              Hey! My name is Aditya Singh, I'm an Second year Computer Science
              Student, <br />
              At Dehradun Institute of Technology University, India. <br />
              I'm An Full stack Web Developer And I am very passionate and
              dedicated towards <br /> my work. <br />
              I have acquired the skills and knowledge necessary to make your project a success. <br />
              I Enjoy every step of the design process, from discussion and collaboration <br />
              to concept and execution.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsAbout;
