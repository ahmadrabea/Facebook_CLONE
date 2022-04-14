import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  HomeIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewGridIcon,
  ChatIcon,
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          height={40}
          width={40}
          layout={"fixed"}
          alt="facebook logo"
        />
        <div className="flex ml-2 items-center rounded-full p-2 bg-gray-100">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex flex outline-none ml-2 bg-transparent placeholder-gray-500 flex-shrink"
            placeholder="Search Facebook"
            type="text"
          />
        </div>
      </div>

      {/* center */}

      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2  ">
          <HeaderIcon active={true} Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* right */}

      <div className="flex items-center justify-end space-x-2">
        {/*profile picture*/}
        {session ? (
          <Image
            onClick={signOut}
            src={session.user.image}
            width={40}
            height={40}
            layout="fixed"
            className="rounded-full cursor-pointer"
          />
        ) : null}

        <p className="whitespace-nowrap font-semibold pr-3">
          {session ? session.user.name : <p>Guest</p>}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
