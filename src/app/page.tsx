import Image from "next/image";
import Navbar from "../components/Navbar";
import "./pa.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="Main md:flex transition-all duration-300  min-h-screen overscroll-none flex-row md:flex-col items-center justify-between md:py-16 py-8 px-24">
        <Navbar />
        <div className="flex flex-col justify-center items-center py-16 ">
          <div className=" md:bg-gradient-to-br from-blue-500 to-purple-600 p-2 md:rounded-full ">
            <Image
              src={"/Aditya.jpeg"}
              alt="Aditya Image"
              height={400}
              width={400}
              className="rounded-full"
            />
          </div>
          <Link
            href={
              "https://drive.google.com/file/d/1LAy0EXEW-Bpe2DICkCIGw9-flo7-q7q6/view?usp=sharing"
            }
            target="_blank">
            <button className="heading px-16 hover:scale-95 transition-all duration-200 hover:bg-purple-400 rounded-md bg-green-400 font-mono text-black font-semibold text-lg mt-10 py-2">
              Resume
            </button>
          </Link>
          <h1 className="heading flex justify-center items-center w-[340px] md:w-[80%] text-xl md:text-3xl font-bold font-mono text-black bg-yellow-400 px-5 py-2 my-8 rounded-md ">
            👨🏽‍💻Software Engineer | Full Stack Developer | Open-Source Contributor
          </h1>
          <div className="heading flex flex-col justify-center items-center bg-[#50ffaf] text-black font-Satisfy w-[340px] md:w-[80%] px-10 py-5 rounded-md space-y-3 ">
            <p>
              - Hey Hey! Welcom I&apos;m delighted to have you here. My name is
              Aditya Singh, and I am a passionate computer science undergrad,
              software engineer, and full-stack web developer hailing from India
              👨🏽‍💻.
            </p>
            <p>
              - As a software engineer, I thrive on turning innovative ideas
              into reality. I believe in the power of elegant and efficient code
              that not only works flawlessly but also creates meaningful
              experiences for users. From designing intuitive user interfaces to
              crafting robust back-end systems, I love every aspect of the
              development process.
            </p>
            <p>
              - Continuous learning and staying up-to-date with emerging
              technologies are at the core of my professional ethos. I actively
              seek out new challenges and opportunities to expand my skill set.
              With a strong dedication to detail and a problem-solving mindset,
              I strive to deliver high-quality solutions that exceed
              expectations.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
