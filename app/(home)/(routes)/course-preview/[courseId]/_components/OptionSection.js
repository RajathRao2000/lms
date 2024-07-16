import Image from "next/image";
import React from "react";

const OptionSection = () => {
  const optionsList = [
    { id: 1, name: "Github", icon: "/github.svg" },
    { id: 2, name: "Demo", icon: "/demo.svg" },
    { id: 3, name: "Youtube", icon: "/youtube.svg" },
  ];
  return (
    <div className="flex  items-center gap-3">
      {optionsList.map((option, index) => (
        <div
          className="p-2 border rounded-lg flex flex-col items-center w-full cursor-pointer "
          key={index}
        >
          <div className="size-[30px]  w-full flex justify-center items-center">
            <Image
              className=" object-contain"
              src={option.icon}
              width="30"
              height="30"
              alt="icons"
            />
          </div>
          <h2 className="w-full text-center text-[14px] text-gray-500">
            {option.name}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default OptionSection;
