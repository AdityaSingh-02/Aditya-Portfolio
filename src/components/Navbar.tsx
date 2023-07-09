"use client";
import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";

const Navbar: FC = () => {
  const [currRoute, setRoute] = useState("");
  const [userMenu, setUserMenu] = useState(false);
  const params = usePathname();

  useEffect(() => {
    setRoute(params);
  }, []);

  const showMenu = () => {
    setUserMenu(!userMenu);
  };

  return (
    <>
      {/* <div className="navbar font-Satisfy static z-10 md:w-full md:max-w-full md:items-center md:justify-between md:bg-slate-900 md:py-5 md:px-16 md:rounded-2xl  text-sm md:flex hidden "> */}
      {/* <div className="navbar font-Satisfy static z-10 md:w-full md:max-w-full md:items-center md:justify-between md:bg-green-600 heading md:py-5 md:px-16 md:rounded-2xl  text-sm md:flex hidden ">
        <ul className="flex list-none items-center flex-row justify-between w-screen">
          <Link href={"/"}>
            <li
              className={`hover:underline transition-all duration-100 hover:underline-offset-8 cursor-pointer  shadow-xl hover:shadow-blue-600 ${
                currRoute === "/"
                  ? " underline underline-offset-8 shadow-blue-600 "
                  : ""
              }`}>
              About Me
            </li>
          </Link>
          <Link href={"/experience"}>
            <li
              className={`hover:underline transition-all duration-100 hover:underline-offset-8 cursor-pointer shadow-xl hover:shadow-blue-600 ${
                currRoute === "/experience"
                  ? " underline underline-offset-8 shadow-blue-600 "
                  : ""
              }`}>
              Experiences
            </li>
          </Link>
          <Link href={"/connect"}>
            <li
              className={`hover:underline transition-all duration-100 hover:underline-offset-8 cursor-pointer shadow-xl hover:shadow-blue-600 ${
                currRoute === "/connect"
                  ? " underline underline-offset-8 shadow-blue-600 "
                  : ""
              }`}>
              Lets connect
            </li>
          </Link>
          <li className="text-lg font-Satisfy hidden md:flex">Aditya Singh</li>
        </ul>
      </div> */}

      {/* Test Navbar  ------------------------------------------------- */}
      {/* <div className="navbar font-Satisfy static z-10 md:w-full md:max-w-full md:items-center md:justify-between md:bg-slate-900 md:py-5 md:px-16 md:rounded-2xl  text-sm md:flex hidden "> */}
      <div className="navbar static z-10 md:w-full md:max-w-full md:items-center md:justify-between text-black font-bold font-mono md:bg-cyan-500 heading md:py-5 md:px-16 md:rounded-2xl  text-sm md:flex hidden ">
        <ul className="flex list-none items-center flex-row justify-between w-screen">
          <Link href={"/"}>
            <li
              className={`heading hover:bg-yellow-400 transition-all duration-100 cursor-pointer rounded-md  px-5 py-2  ${
                currRoute === "/" ? 'bg-purple-400' : 'bg-red-400'
              }`}>
              About Me
            </li>
          </Link>
          <Link href={"/experience"}>
            <li
              className={`heading hover:bg-yellow-400 transition-all duration-100 cursor-pointer rounded-md  px-5 py-2 ${
                currRoute === "/experience" ? " bg-purple-400 font-bold" : "bg-red-400"
              }`}>
              Experiences
            </li>
          </Link>
          <Link href={"/connect"}>
            <li
              className={`heading hover:bg-yellow-400 transition-all duration-100 cursor-pointer rounded-md  px-5 py-2  ${
                currRoute === "/connect" ? " bg-purple-400 font-bold " : "bg-red-400"
              }`}>
              Lets connect
            </li>
          </Link>
          <li className="text-lg font-Satisfy hidden md:flex">Aditya Singh</li>
        </ul>
      </div>
      {/* ------------------------=================================------------------------------------------ */}

      {/* Mobile Navbar */}
      <div
        className={`heading navbar font-Satisfy transition-all duration-300 justify-center items-center  static z-20 text-black bg-cyan-500 px-8 py-4 rounded-2xl shadow-md md:hidden  `}>
        <ul
          className={`flex list-none items-center flex-row justify-between ${
            userMenu ? "flex-col py-5" : ""
          } `}>
          {!userMenu && <li className=" font-Satisfy md:flex">Aditya Singh</li>}
          <button className={`${userMenu ? "pb-4" : ""}`} onClick={showMenu}>
            {userMenu ? <TfiClose /> : <TfiAlignJustify />}
          </button>
          {userMenu && (
            <>
              <div className="flex flex-col font-mono font-bold space-y-5 py-3 items-center justify-center">
                <Link href={"/"}>
                  <li
                    className={`heading hover:bg-yellow-400 transition-all duration-100 cursor-pointer rounded-md  px-5 py-2 ${
                      currRoute === "/" ? " bg-purple-400 " : "bg-red-400"
                    }`}>
                    About Me
                  </li>
                </Link>
                <Link href={"/experience"}>
                  <li
                    className={`heading hover:bg-yellow-400 transition-all duration-100 cursor-pointer rounded-md  px-5 py-2  ${
                      currRoute === "/experience"
                        ? " bg-purple-400 font-bold"
                        : "bg-red-400"
                    }`}>
                    Experiences
                  </li>
                </Link>
                <Link href={"/connect"}>
                  <li
                    className={`heading hover:bg-yellow-400 transition-all duration-100 cursor-pointer rounded-md  px-5 py-2 ${
                      currRoute === "/connect"
                        ? " bg-purple-400 font-bold "
                        : "bg-red-400"
                    }`}>
                    connect
                  </li>
                </Link>
              </div>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
