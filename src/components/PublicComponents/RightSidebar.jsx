import { FaUserAlt } from "react-icons/fa";
import {
  BsCameraVideoFill,
  BsCircleFill,
  BsMessenger,
  BsPencilSquare,
  BsPlus,
} from "react-icons/bs";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import happyImg from "../../imgs/happiness.jpg";
import avatarImg from "../../imgs/avatar.jpg";
export default function RightSidebar() {
  return (
    <div className="hidden lg:block lg:w-[300px] flex-shrink-0">
      <SimpleBar className="h-[calc(100vh-64px)]">
        <div className="lg:p-4">
          {/* Sponsored */}
          <div>
            <h3 className="font-semibold text-lg text-gray-500 mb-4">
              Suggested
            </h3>
            {/* Card */}
            <div>
              <div className="relative h-40 flex items-center p-2">
                <img
                  className="w-full h-full object-cover rounded-t brightness-50 absolute top-0 left-0 z-0"
                  src={happyImg}
                  alt="suggested"
                  draggable="false"
                />
                <div className="z-[1]">
                  <strong className="text-xl text-gray-100 mb-1 block">
                    <FaUserAlt className="inline-block mr-2" />
                    <span className="align-middle">Friends</span>
                  </strong>
                  <p className="w-11/12 text-gray-50 font-light leading-4">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <button className="bg-gray-100 py-1 px-3 rounded outline-none mt-2 font-medium">
                    Find Friends
                  </button>
                </div>
              </div>
              <div className="rounded-b bg-white flex items-center p-2">
                <div className="-space-x-3 flex mr-2">
                  <img
                    src={avatarImg}
                    className=" w-7 h-7 img-avatar"
                    alt="friend img"
                  />
                  <img
                    src={avatarImg}
                    className=" w-7 h-7 img-avatar"
                    alt="friend img"
                  />
                  <img
                    src={avatarImg}
                    className=" w-7 h-7 img-avatar"
                    alt="friend img"
                  />
                </div>
                <p className="text-gray-500 text-sm truncate">
                  <span className="text-black font-medium">Amr'</span> You have
                  new suggestion
                </p>
              </div>
            </div>
          </div>
          <hr className="my-4 border-gray-300" />
          {/* Contacts */}
          <div>
            {/* Contacts Header */}
            <div className="flex justify-between">
              <h3 className="font-semibold text-lg text-gray-500 mb-4">
                Contacts
              </h3>

              <div className="space-x-4 flex mt-2">
                <BsMessenger className="text-base text-gray-500" />
                <BsCameraVideoFill className="text-base text-gray-500" />
                <BsPencilSquare className="text-base text-gray-500" />
              </div>
            </div>
            {/* Contacts Items */}
            <ul className="list-none">
              <ContactItem online />
              <ContactItem lastSeen={0} />
              <ContactItem lastSeen={0} />
              <ContactItem lastSeen={32} />
              <ContactItem lastSeen={0} />
              <ContactItem lastSeen={42} />
              <ContactItem online />
              <ContactItem lastSeen={0} />
              <ContactItem lastSeen={3} />
              <ContactItem lastSeen={0} />
              <ContactItem lastSeen={13} />
            </ul>
          </div>
          <hr className="my-4 border-gray-300" />
          {/* Create Group */}
          <div>
            <h3 className="font-semibold text-lg text-gray-500 mb-4">
              Group conversations
            </h3>
            <div className="p-2 rounded bg-hover hover:bg-gray-200 flex items-center">
              <div className="flex-shrink-0 mr-4">
                <div className="rounded-circle bg-gray-300 h-10 w-10 flex items-center justify-center">
                  <BsPlus className="text-4xl" />
                </div>
              </div>
              <span className="text-md truncate font-medium">
                Create New Group
              </span>
            </div>
          </div>
        </div>
      </SimpleBar>
    </div>
  );
}

export function ContactItem(props) {
  return (
    <li className="bg-hover hover:bg-gray-200 p-2 flex items-center rounded">
      <div className="flex-shrink-0 mr-4 relative">
        <img
          src={avatarImg}
          className="img-avatar h-10 w-10"
          alt="user img profle"
        />

        {props.online && (
          <BsCircleFill className="absolute text-green-500 top-7 border-2 border-white rounded-circle right-0 w-3 h-3" />
        )}

        {!props.online && props.lastSeen !== 0 ? (
          <span className="rounded-full py-px px-[4px] text-xs bg-green-100 absolute top-6 -right-1 text-green-600 font-medium">
            {props.lastSeen}m
          </span>
        ) : (
          false
        )}
      </div>
      <span className="text-base truncate font-medium">Amr Mohamed</span>
    </li>
  );
}
