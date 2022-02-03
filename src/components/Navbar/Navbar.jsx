import { useState, useContext } from "react";
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
  CubeIcon as CubeSolid,
  TemplateIcon as TempSolid,
  VideoCameraIcon as VidSolid,
  UserGroupIcon as GrpSolid,
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
import { Link, NavLink, useLocation } from "react-router-dom";
import Profile from "./DropdownMenus/Profile/Profile";
import Menu from "./DropdownMenus/Menu/Menu";
import { truncate } from "../../helpers";
import { PostContext } from "../../context/Postcontext";

export default function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [search, toggleSearch] = useState(false);
  const {
    state: { user: username },
  } = useContext(PostContext);

  const lc = useLocation();
  const handleSearchClick = () => {
    if (toggleNavbar) {
      setToggleNavbar(false);
    }
    toggleSearch(!search);
  };
  const handleNavbar = () => {
    if (search) {
      toggleSearch(false);
    }
    setToggleNavbar(!toggleNavbar);
  };
  return (
    <nav className="bg-white shadow-md py-3 px-4 flex items-center justify-between fixed top-0 left-0 w-full z-50">
      {/* Search */}
      <div className="flex flex-shrink-0 items-center sm:mr-7">
        <Link to="/">
          <img src={facebookLogo} className="h-10 w-10 mr-2" alt="logo" />
        </Link>
        <Search
          smHide
          search={search}
          handleSearchClick={handleSearchClick}
          isNavbarOpen={{ val: toggleNavbar, setVal: setToggleNavbar }}
        />
        <div
          onClick={handleNavbar}
          className={`md:hidden ml-2 rounded-full w-9 h-9  flex items-center justify-center bg-hover group md:hover:bg-blue-100 ${
            toggleNavbar ? "bg-blue-100" : "bg-gray-100"
          }`}
        >
          <BsList className="text-xl text-gray-600 group-hover:text-primary" />
        </div>
      </div>
      {/* Icons Links */}

      <div
        className={`md:space-x-4 flex flex-grow justify-center ${
          !toggleNavbar && "maxmd:hidden"
        } maxmd:absolute maxmd:top-[64px] maxmd:w-full maxmd:justify-evenly maxmd:bg-white maxmd:left-0 `}
      >
        <NavLink to="/">
          {lc.pathname === "/" || lc.pathname === "/profile" ? (
            <NavbarLink Icon={HomeSolid} active />
          ) : (
            <NavbarLink Icon={HomeIcon} />
          )}
        </NavLink>

        <NavLink to="/groups">
          {lc.pathname === "/groups" ? (
            <NavbarLink Icon={GrpSolid} notification={156} active />
          ) : (
            <NavbarLink Icon={UserGroupIcon} notification={156} />
          )}
        </NavLink>
        <NavLink to="/watchs">
          {lc.pathname === "/watchs" ? (
            <NavbarLink Icon={VidSolid} active />
          ) : (
            <NavbarLink Icon={VideoCameraIcon} />
          )}
        </NavLink>
        <NavLink to="/store">
          {lc.pathname === "/store" ? (
            <NavbarLink Icon={TempSolid} active />
          ) : (
            <NavbarLink Icon={TemplateIcon} />
          )}
        </NavLink>
        <NavLink to="/cube">
          {lc.pathname === "/cube" ? (
            <NavbarLink Icon={CubeSolid} active />
          ) : (
            <NavbarLink Icon={CubeIcon} />
          )}
        </NavLink>
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
          <p className=" ml-1 text-black font-bold">{truncate(username)}</p>
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
  );
}
