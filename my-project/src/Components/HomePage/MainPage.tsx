import React, { ReactElement } from "react";
import Image from "next/image";

const MainPage = (): ReactElement => {
  return (
    <>
      <div className="flex justify-center h-screen bg-gradient-to-b from-[#1e2129] to-black">
        <div className="w-[95%] h-[85%] bg-gradient-to-b from-[#1e2129] to-black ">
            <Image src={'/MyImage.jpg'} alt="Me" width={900} height={500} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
