import Search from "../../../PublicComponents/Search";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import MenuItem from "./MenuItem";
import {
  BsBookFill,
  BsBookmarkPlusFill,
  BsFlagFill,
  BsPencilSquare,
  BsSpeakerFill,
  BsStars,
} from "react-icons/bs";
import { ShoppingBagIcon, UserGroupIcon } from "@heroicons/react/solid";
import { MdOutlineWork } from "react-icons/md";

export default function Menu() {
  const links = [
    {
      img: "https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/9-o1e6LN_TX.png",
      title: "Events",
      note: "Organise or find events and other things to do online and nearby.",
    },
    {
      img: "https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png",
      title: "Find Friends",
      note: "Search for friends or people you may know.",
    },
    {
      img: "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png",
      title: "Groups",
      note: "Connect with people who share your interests.",
    },
    {
      img: "https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/DOal__ng_AH.png",
      title: "News Feed",
      note: "See relevant posts from people and Pages that you follow.",
    },
    {
      img: "https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png",
      title: "Pages",
      note: "Discover and connect with businesses on Facebook.",
    },
  ];

  return (
    <>
      <h2 className="font-bold text-2xl mb-2 px-2">Menu</h2>
      <SimpleBar className="h-[80vh]">
        <div className="grid grid-cols-7 gap-4 px-2 pb-2">
          <div className="bg-gray-50 rounded shadow col-span-4 p-4">
            <div className="mb-4">
              <Search />
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-2">Social</h2>
              <ul className="list-none">
                {links.map((link) => (
                  <MenuItem
                    key={Math.random() * 563}
                    img={link.img}
                    title={link.title}
                    note={link.note}
                  />
                ))}
              </ul>
            </div>
            <hr className="my-2 border-gray-300" />
            <div>
              <h2 className="font-semibold text-lg mb-2">Entertainment</h2>
              <ul className="list-none">
                {links.reverse().map((link) => (
                  <MenuItem
                    key={Math.random() * 563}
                    img={link.img}
                    title={link.title}
                    note={link.note}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-3">
            <div className="bg-gray-50 rounded shadow sticky w-full top-0 right-0 p-2">
              <h2 className="font-semibold text-lg mb-2">Create</h2>
              <ul className="list-none">
                <MenuItem create Icon={BsPencilSquare} title={"Post"} />
                <MenuItem create Icon={BsBookFill} title={"Story"} />
                <MenuItem create Icon={BsStars} title={"Life Event"} />
              </ul>
              <hr className="my-2 border-gray-300" />
              <ul className="list-none">
                <MenuItem create Icon={BsFlagFill} title={"Page"} />
                <MenuItem create Icon={BsSpeakerFill} title={"Ad"} />
                <MenuItem create Icon={UserGroupIcon} title={"Group"} />
                <MenuItem create Icon={BsBookmarkPlusFill} title={"Event"} />
                <MenuItem create Icon={ShoppingBagIcon} title={"Marketplace"} />
                <MenuItem create Icon={MdOutlineWork} title={"Job"} />
              </ul>
            </div>
          </div>
        </div>
      </SimpleBar>
    </>
  );
}
