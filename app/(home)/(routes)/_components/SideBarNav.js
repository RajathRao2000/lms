import Image from "next/image";
import React from "react";

const SideBarNav = () => {
  return (
    <div className="h-full bg-white border-r flex flex-col overflow-y-auto shadow-md">
      <div className="p-5 border-b  flex items-center justify-between w-full">
        <Image
          className="h-7 w-7"
          src={"/logo.svg"}
          alt="logo"
          width={170}
          height={100}
        />
        <p>Some Text</p>
      </div>
    </div>
  );
};

export default SideBarNav;
