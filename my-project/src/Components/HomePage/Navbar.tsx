import React, {
  MouseEventHandler,
  ReactElement,
  ReactEventHandler,
  ReactPropTypes,
  useState,
} from "react";
import navbarLinks from "./navbarLinks";
import Image from "next/image";
import Link from "next/link";

const Navbar = (props: any): ReactElement => {
  const [isClosed, setIsOpened] = useState(true);

  const handleNavbarOptions = (e: React.MouseEvent): void | MouseEvent => {
    e.preventDefault();
    setIsOpened((prevOption) => !prevOption);
    props.showLinks(isClosed);
  };

  const addSmoothScroll =(e:React.MouseEvent | MouseEventHandler | any):void => {
    console.log(e)

  }

  return (
    <>
      <nav className="fixed w-screen bg-[#1e2129] sm:h-20 h-11 items-center sm:pt-4 pt-2 sm:px-28">
        <div className="flex justify-between">
          <div>
            <h1 className="text-blue-700 font-Tangerine sm:text-5xl text-2xl sm:pl-0 pl-10 ">
              Aditya singh
            </h1>
          </div>
          <div className="text-white">
            <ul className="hidden sm:flex sm:space-x-14 font-Caveat text-xl pt-2 text-blue-500 hover:cursor-pointer">
              {navbarLinks.map(({ id, name, to }) => {
                return (
                  <Link href={to}>
                    <li onClick={addSmoothScroll}
                      key={id}
                      className="hover:text-red-600 transition-all duration-150 ">
                      {name}
                    </li>
                  </Link>
                );
              })}
            </ul>
            <div className="sm:hidden pr-2">
              {isClosed ? (
                <button onClick={handleNavbarOptions}>
                  <Image
                    src={"/Hamburger.svg"}
                    alt="hamburger-svg"
                    width={25}
                    height={10}
                  />
                </button>
              ) : (
                <button onClick={handleNavbarOptions}>
                  <Image
                    src={"/Cross.svg"}
                    alt="Cross"
                    width={25}
                    height={10}
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
