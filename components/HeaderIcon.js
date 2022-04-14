import React from "react";

const HeaderIcon = ({ Icon, active }) => {
  return (
    <div
      className={`flex text-gray-500 items-center rounded-xl cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100
    active:border-b-2 active:border-blue-500 group transition ${
      active && "text-blue-500"
    }`}
    >
      <Icon className="h-5 group-hover:text-blue-500 text-center sm:h-7 mx-auto transition" />
    </div>
  );
};

export default HeaderIcon;
