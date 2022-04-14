import React from "react";
import Image from "next/image";

const SideBarRow = ({ Icon, title, src }) => {
  return (
    <div className="flex flex-row items-center justify-start p-3 hover:bg-gray-300 rounded-lg cursor-pointer transition">
      <div className="h-8 w-8  text-blue-500 ">
        {src ? (
          <Image
            src={src}
            width={35}
            height={35}
            layout="fixed"
            className="rounded-full"
          />
        ) : (
          <Icon />
        )}
      </div>
      <p className="hidden sm:inline-flex font-medium ml-2">{title}</p>
    </div>
  );
};

export default SideBarRow;
