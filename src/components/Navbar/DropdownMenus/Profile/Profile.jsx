import { BiCommentError, BiCog, BiLogOut } from "react-icons/bi";
import { MdArrowForwardIos, MdHelpOutline } from "react-icons/md";
import { BsMoon } from "react-icons/bs";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import avatarImg from "../../../../imgs/avatar.jpg";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <SimpleBar className="h-[415px]">
        {/* Profile Link */}
        <Link to="/profile">
          <div className="flex bg-hover hover:bg-gray-100 p-2 rounded">
            <div className="flex-shrink-0 mr-2">
              <img
                src={avatarImg}
                className="w-20 h-20 img-avatar"
                alt="user"
              />
            </div>
            <div className="flex-grow self-center overflow-hidden">
              <strong className="truncate w-full block font-semibold text-xl capitalize">
                Amr Mohamed
              </strong>
              <span className="text-gray-500 -mt-1 block">
                See your profile
              </span>
            </div>
          </div>
        </Link>

        <hr className="my-2 border-gray-300" />

        {/* Feedback */}
        <div className="flex bg-hover hover:bg-gray-100 p-2 rounded items-center">
          <div className="flex-shrink-0 mr-3">
            <div className="normal-avatar w-10 h-10 bg-gray-200">
              <BiCommentError className="text-xl font-extrabold" />
            </div>
          </div>
          <div className="flex-grow overflow-hidden">
            <strong className="font-semibold capitalize text-[17px]">
              Give Feedback
            </strong>
            <span className="text-gray-500 -mt-1 block text-[16px]">
              Help us improve new Facebook
            </span>
          </div>
        </div>

        <hr className="my-2 border-gray-300" />

        <div>
          <ItemLink Icon={BiCog} text={"Settings & Privacy"} />
          <ItemLink Icon={MdHelpOutline} text={"Help & Support"} />
          <ItemLink Icon={BsMoon} text={"Display & Accessibility"} />
          <ItemLink Icon={BiLogOut} text={"Log Out"} />
        </div>
      </SimpleBar>
    </>
  );
}

export function ItemLink({ Icon, text }) {
  return (
    <div className="flex bg-hover hover:bg-gray-100 p-2 rounded items-center">
      <div className="flex-shrink-0 mr-3">
        <div className="normal-avatar w-10 h-10 bg-gray-200">
          <Icon className="text-2xl font-extrabold" />
        </div>
      </div>
      <div className="flex-grow overflow-hidden flex justify-between items-center">
        <strong className="font-semibold capitalize text-[17px]">{text}</strong>

        <MdArrowForwardIos className="text-xl text-gray-500" />
      </div>
    </div>
  );
}
