'use client'
import React from 'react'
import Image from 'next/image'

const Left = () => {
  return (
    <>
         <div className="left flex flex-col  items-center md:w-[50%] ">
            <div>
              <Image
                src={"/Aditya.jpeg"}
                alt="Aditya Image"
                height={400}
                width={400}
                className="md:rounded-3xl px-5 md:px-0 pt-10 md:pt-0"
              />
            </div>
            <div className="details font-light text-gray-400 w-[94%] md:w-[70%] pt-7">
              <h1 className="text-3xl text-gray-300">Aditya Singh</h1>
              <h2 className="text-xl text-gray-400">Software Engineer</h2>
              <h2 className="text-lg text-gray-400">
                I build Full stack web Applications and Tools
              </h2>
              <p className="py-2 ">
                Hey Hey! Welcome I&apos;m delighted to have you here.I am a
                passionate computer science undergrad, software engineer, and
                Full-stack web developer hailing from India 👨🏽‍💻.
                <br />
                Back in 2021 I decided to build websites and from that point of
                time I started Learning Web Develoment and Multiple different
                Languages
              </p>
            </div>
            {/* <Link
              href={
                "https://drive.google.com/file/d/1LAy0EXEW-Bpe2DICkCIGw9-flo7-q7q6/view?usp=sharing"
              }
              target="_blank">
              <button className=" hover:scale-95 transition-all ">
                Resume
              </button>
            </Link> */}
          </div>
    </>
  )
}

export default Left