import { useSession } from "next-auth/react";
import React from "react";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import SideBarRow from "./SideBarRow";

const LeftSideBar = () => {
  const { data: session } = useSession();
  return (
    <div className="p-2 mt-5 max-w-[310px] xl:min-w-[300px] flex flex-col">
      {session ? (
        <SideBarRow src={session.user.image} title={session.user.name} />
      ) : (
        <SideBarRow icon={UserCircleIcon} title="Guest" />
      )}

      <SideBarRow Icon={UsersIcon} title="Friends" />
      <SideBarRow Icon={UserGroupIcon} title="Groups" />
      <SideBarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SideBarRow Icon={DesktopComputerIcon} title="Watch" />
      <SideBarRow Icon={CalendarIcon} title="Events" />
      <SideBarRow Icon={ClockIcon} title="Memories" />
      <SideBarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
};

export default LeftSideBar;
