import {
  HomeIcon,
  UserGroupIcon,
  VideoCameraIcon,
  TemplateIcon,
  CubeIcon,
} from "@heroicons/react/outline";
import {
  AdjustmentsIcon,
  BellIcon,
  HomeIcon as HomeSolid,
} from "@heroicons/react/solid";
import facebookLogo from "../../imgs/facebook-logo.png";
import avatarImg from "../../imgs/avatar.jpg";
import { BsCaretDownFill, BsList, BsMessenger } from "react-icons/bs";
import NavbarLink from "./NavbarLink";
import Dropdown from "./Dropdown";
import Chat from "./DropdownMenus/Chat/Chat";
import Notification from "./DropdownMenus/Notification/Notification";
import Search from "../PublicComponents/Search";
import { Link } from "react-router-dom";
import Profile from "./DropdownMenus/Profile/Profile";
import Menu from "./DropdownMenus/Menu/Menu";
import { truncate } from "../../helpers";

export default function Navbar() {
  const isPageActive = true;
  return (
    <>
      <nav className="bg-white shadow-md py-3 px-4 flex items-center justify-between fixed top-0 left-0 w-full z-50">
        {/* Search */}
        <div className="flex flex-shrink-0 items-center sm:mr-7">
          <Link to="/">
            <img src={facebookLogo} className="h-10 w-10 mr-2" alt="logo" />
          </Link>
          <Search smHide />
          <div className="md:hidden ml-2 rounded-full w-9 h-9 bg-gray-100 flex items-center justify-center bg-hover group hover:bg-blue-100">
            <BsList className="text-xl text-gray-600 group-hover:text-primary" />
          </div>
        </div>
        {/* Icons Links */}
        <div className="space-x-4 flex-grow justify-center hidden md:flex">
          <Link to="/">
            <NavbarLink Icon={isPageActive ? HomeSolid : HomeIcon} active />
          </Link>
          <NavbarLink Icon={UserGroupIcon} notification={156} />
          <NavbarLink Icon={VideoCameraIcon} />
          <NavbarLink Icon={TemplateIcon} />
          <NavbarLink Icon={CubeIcon} />
        </div>
        {/* Profile Settings */}
        <div className="flex items-center justify-items-end">
          <Link
            to="/profile"
            className="hidden lg:flex bg-hover hover:bg-gray-100 rounded-full w-20 p-1 pr-2 items-center overflow-hidden mr-2"
          >
            <img
              src={avatarImg}
              className="rounded-full h-8 w-8 object-cover"
              alt="profile"
            />
            <p className=" ml-1 text-black font-bold">
              {truncate("amr elmeslimany")}
            </p>
          </Link>

          <div className="space-x-2 flex relative">
            <div className="hidden md:block">
              <Dropdown alert width={680} Icon={AdjustmentsIcon}>
                <Menu />
              </Dropdown>
            </div>
            <Dropdown width={340} Icon={BsMessenger}>
              <Chat />
            </Dropdown>
            <Dropdown width={340} Icon={BellIcon}>
              <Notification />
            </Dropdown>
            <Dropdown width={340} Icon={BsCaretDownFill} alert>
              <Profile />
            </Dropdown>
          </div>
        </div>
      </nav>
    </>
  );
}
