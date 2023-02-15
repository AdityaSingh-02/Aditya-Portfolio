import React, { ReactElement, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import NavbarMobileLinks from "./NavbarMobileLinks";
import MainPage from "./MainPage";
import DetailsAbout from "@/Components/AboutPage/DetailsAbout";

function LandingPage(): ReactElement {
  const [showMobileLinks, updtMobileLinks] = useState(false);

  const [hideNavbar, setHiddenNavbar] = useState(false);

  useEffect(() => {
    let prevScroll = window.scrollY;
    window.onscroll = () => {
      let currScroll = window.scrollY;
      if (currScroll > prevScroll) {
        setHiddenNavbar(true);
      } else {
        setHiddenNavbar(false);
      }
      prevScroll = currScroll;
    };
  }, []);

  return (
    <>
      <Head>
        <title>Aditya Singh</title>
      </Head>
      <div
        className={`md:fixed md:h-40 transition-all ease-in duration-300 delay-300 ${
          hideNavbar ? "-translate-y-44" : ""
        } `}>
        <Navbar showLinks={updtMobileLinks} />
        {showMobileLinks && <NavbarMobileLinks />}
      </div>
      <MainPage />
      <DetailsAbout />
    </>
  );
}

export default LandingPage;
