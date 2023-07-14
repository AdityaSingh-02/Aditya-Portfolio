"use client";
import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";
import { Pacifico } from "@next/font/google";
const vibes = Pacifico({ subsets: ["latin"], weight: "400" });

const Navbar: FC = () => {
  const [currRoute, setRoute] = useState("");
  const [userMenu, setUserMenu] = useState(false);
  const params = usePathname();

  useEffect(() => {
    setRoute(params);
  }, [params]);

  const showMenu = () => {
    setUserMenu(!userMenu);
  };

  return (
    <>
      {/* Test Navbar  ------------------------------------------------- */}
      {/* <div className="navbar font-Satisfy static z-10 md:w-full md:max-w-full md:items-center md:justify-between md:bg-slate-900 md:py-5 md:px-16 md:rounded-2xl  text-sm md:flex hidden "> */}
      <div className="navbar static z-10 w-[50%] flex-row-reverse items-center  text-black  font-roboto py-5 px-16 rounded-md  text-sm md:flex hidden bg-transparent ">
        <ul className="flex list-none items-center flex-row justify-between w-screen">
          <Link href={"/"}>
            <li
              className={`transition-all duration-100 cursor-pointer rounded-sm  px-5 py-2  ${
                currRoute === "/" ? "text-teal-400 text-shadow-xl shadow-teal-500 " : "text-cyan-400"
              }`}>
              ABOUT
            </li>
          </Link>
          <Link href={"/experience"}>
            <li
              className={`transition-all duration-100 cursor-pointer rounded-sm  px-5 py-2 ${
                currRoute === "/experience"
                  ? "text-teal-400 text-shadow-xl shadow-teal-500 "
                  : "text-cyan-400"
              }`}>
              EXPERIENCES
            </li>
          </Link>
          <Link href={"/connect"}>
            <li
              className={`transition-all duration-100 cursor-pointer rounded-sm  px-5 py-2  ${
                currRoute === "/connect" ? "text-teal-400 text-shadow-xl shadow-teal-500 " : "text-cyan-400"
              }`}>
              CONNECT
            </li>
          </Link>
          <li
            className={`text-2xl text-teal-400 hidden md:flex ${vibes.className} `}>
            Aditya
          </li>
        </ul>
      </div>
      {/* ------------------------=================================------------------------------------------ */}

      {/* Mobile Navbar */}
      <div
        className={`navbar transition-all duration-300 w-[100%] items-center py-4  md:hidden text-xs  `}>
        <ul
          className="flex justify-around px-2"
          // className={`flex list-none items-center flex-row justify-between ${
          //   userMenu ? "flex-col py-5" : ""
          // } `}
        >
          {/* {!userMenu && } */}
          {/* <button className={`${userMenu ? "pb-4 flex justify-center mx-auto" : ""}`} onClick={showMenu}>
            {userMenu ? <TfiClose /> : <TfiAlignJustify />}
          </button> */}
          <Link href={"/"}>
            <li
              className={`transition-all duration-100 cursor-pointer rounded-sm  py-2 ${
                currRoute === "/" ? "text-teal-400 text-shadow-xl shadow-teal-500" : "text-cyan-400"
              }`}>
              ABOUT
            </li>
          </Link>
          <Link href={"/experience"}>
            <li
              className={`transition-all duration-100 cursor-pointer rounded-sm  py-2  ${
                currRoute === "/experience"
                  ? "text-teal-400 text-shadow-xl shadow-teal-500"
                  : "text-cyan-400"
              }`}>
              EXPERIENCES
            </li>
          </Link>
          <Link href={"/connect"}>
            <li
              className={`transition-all duration-100 cursor-pointer rounded-sm  py-2 ${
                currRoute === "/connect" ? "text-teal-400 text-shadow-xl " : "text-cyan-400"
              }`}>
              CONNECT
            </li>
          </Link>
          <li className={`text-teal-400 text-lg ${vibes.className}`}>Aditya </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
