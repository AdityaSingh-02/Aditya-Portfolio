import React, { ReactElement } from "react";
import Image from "next/image";

const MainPage = (): ReactElement => {
  return (
    <>
      <div className="flex pt-[80px] justify-center h-screen bg-gradient-to-b from-[#1e2129] to-black">
        <div className="flex w-[95%] h-[85%] bg-gradient-to-b from-[#1e2129] to-black ">
          <div className="w-[60%]">
            
          </div>
          <div>
            <Image src={"/MyImage.jpg"} alt="Me" width={600} height={500} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
