import { useContext } from "react";
import { BsChatLeftFill } from "react-icons/bs";
import { PostContext } from "../../../../context/Postcontext";
import avatarImg from "../../../../imgs/avatar.jpg";
export default function NotificationItem() {
  const {
    state: { user: username },
  } = useContext(PostContext);
  return (
    <div className="flex bg-hover hover:bg-gray-100 rounded p-2">
      <div className="flex-shrink-0 mr-2 relative">
        <img src={avatarImg} className="w-16 h-16 img-avatar" alt="user" />

        <div className="absolute top-10  shadow-md right-0 bg-gradient-to-t from-green-700 to-green-600 w-6 h-6 normal-avatar">
          <BsChatLeftFill className="text-gray-50 text-[10px]" />
        </div>
      </div>
      <div className="flex-grow">
        <p className="leading-tight text-gray-700">
          <strong className="text-black capitalize mr-1">
            {username.slice(0, 5)} User
          </strong>
          {truncateParagraph(
            `invite you to party, Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sapiente suscipit ut iste fuga quo corrupti, nam, sequi aliquam ipsa molestias! Aliquid nemo id, voluptatem ipsa optio blanditiis. Nemo, harum!`
          )}
        </p>
        <small className="text-gray-500">18 hours ago</small>
      </div>
    </div>
  );
}

function truncateParagraph(text) {
  return text.length > 100 ? text.slice(0, 100) + "..." : text;
}
