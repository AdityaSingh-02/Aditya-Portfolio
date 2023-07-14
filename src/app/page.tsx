'use client'
import Left from "@/components/Left";

export default function Home() {
  return (
    <>
      <main className="Main md:flex transition-all duration-300 min-h-screen md:h-screen overscroll-none flex-row md:flex-row items-center justify-between md:py-16 py-8 px-2">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <Left />
          {/* right */}
          <div className="right md:w-[50%] ">
            <h1 className="transition-all duration-200 hover:text-cyan-400 flex justify-center items-center w-[340px] md:w-[80%] text-xl md:text-3xl  hover:bg-[#1a2540] hover:shadow-md text-gray-200 px-5 py-2 my-8 rounded-md ">
              👨🏽‍💻Software Engineer | Full Stack Developer | Open-Source
              Contributor
            </h1>
            <div className="transition-all duration-200 flex flex-col text-lg font-light justify-center items-center hover:bg-[#1a2540] hover:shadow-md text-gray-300  md:w-[80%] px-3 md:px-10 py-5 rounded-md space-y-3 ">
              <p>
                As a software engineer, I thrive on turning innovative ideas
                into reality. I believe in the power of elegant and efficient
                code that not only works flawlessly but also creates meaningful
                experiences for users. From designing intuitive user interfaces
                to crafting robust back-end systems, I love every aspect of the
                development process.
              </p>
              <p>
                Continuous learning and staying up-to-date with emerging
                technologies are at the core of my professional ethos. I
                actively seek out new challenges and opportunities to expand my
                skill set. With a strong dedication to detail and a
                problem-solving mindset, I strive to deliver high-quality
                solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
