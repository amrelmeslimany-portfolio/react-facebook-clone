import { DotsHorizontalIcon } from "@heroicons/react/solid";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import NotificationItem from "./NotificationItem";

export default function Notification() {
  return (
    <>
      <SimpleBar className="h-[400px]">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl">Notification</h2>
          <div className="space-x-1 ml-2 flex items-center">
            <div className="bg-hover hover:bg-gray-100 text-gray-500 flex-center rounded-circle h-7 w-7">
              <DotsHorizontalIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
        </div>
      </SimpleBar>
    </>
  );
}
