import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { BsCameraVideoFill, BsMessenger, BsPencilSquare } from "react-icons/bs";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import Search from "../../../PublicComponents/Search";
import ChatItem from "./ChatItem";

export default function Chat() {
  return (
    <>
      <SimpleBar className="h-[400px]">
        <div className="flex justify-between mb-4">
          <h2 className="font-bold text-2xl">Messenger</h2>
          <div className="space-x-1 ml-2 flex items-center">
            <div className="bg-hover hover:bg-gray-100 text-gray-500 flex-center rounded-circle h-7 w-7">
              <DotsHorizontalIcon className="w-5 h-5" />
            </div>
            <div className="bg-hover hover:bg-gray-100 text-gray-500 flex-center rounded-circle h-7 w-7">
              <BsMessenger className="text-sm" />
            </div>
            <div className="bg-hover hover:bg-gray-100 text-gray-500 flex-center rounded-circle h-7 w-7">
              <BsCameraVideoFill className="text-sm" />
            </div>
            <div className="bg-hover hover:bg-gray-100 text-gray-500 flex-center rounded-circle h-7 w-7">
              <BsPencilSquare className="text-sm" />
            </div>
          </div>
        </div>

        <div className="mb-2">
          <Search />
        </div>

        <div>
          <ChatItem online />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
        </div>
      </SimpleBar>

      <div className="text-center pt-2 border-t border-gray-200">
        <span className="text-primary">See All In Massanger</span>
      </div>
    </>
  );
}
