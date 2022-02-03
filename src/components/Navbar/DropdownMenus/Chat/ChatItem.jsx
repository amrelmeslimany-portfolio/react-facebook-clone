import { useContext } from "react";
import avatarImg from "../../../../imgs/avatar.jpg";
import { BsCircleFill } from "react-icons/bs";
import { PostContext } from "../../../../context/Postcontext";

export default function ChatItem(props) {
  const {
    state: { user: username },
  } = useContext(PostContext);
  return (
    <div className="bg-hover hover:bg-gray-100 rounded p-2 flex">
      <div className="flex-shrink-0 relative mr-2">
        <img src={avatarImg} className="w-16 h-16 img-avatar" alt="name user" />

        {props.online && (
          <BsCircleFill className="absolute bottom-1 right-1 text-green-500 text-sm border-2 rounded-circle border-white" />
        )}
      </div>
      <div className="flex-grow self-center overflow-hidden">
        <h3 className="text-[19px] truncate capitalize">{username}</h3>
        <div className="text-gray-500 flex items-center -mt-2">
          <span className="truncate">
            here is message from this user now we can do it
          </span>
          <BsCircleFill className="text-[5px] ml-1" />
          <span className="w-16 block text-right">3 w</span>
        </div>
      </div>
      <div className="w-14 ml-2 flex items-center justify-center">
        <img
          src={avatarImg}
          className="w-4 h-4 rounded-circle"
          alt="seen message"
        />
      </div>
    </div>
  );
}
