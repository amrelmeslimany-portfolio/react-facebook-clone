import { useContext } from "react";
import FooterLinks from "./FooterLinks";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { CollapseMore } from "./CollapseMore";
import {
  leftSidebarGroupLinks as groupLinks,
  leftSidebarLinks as links,
} from "../../data";
import avatarImg from "../../imgs/avatar.jpg";
import { Link } from "react-router-dom";
import { PostContext } from "../../context/Postcontext";

export default function LeftSidebar() {
  const {
    state: { user: username },
  } = useContext(PostContext);
  return (
    <div className="w-[43px] flex-shrink-0 md:w-[300px]">
      <SimpleBar className="h-[calc(100vh-64px)]">
        <div className="md:p-4">
          {/* Links */}
          <div>
            <Link to="/profile">
              <CollapseMore
                oneItem
                links={{
                  img: avatarImg,
                  title: username,
                }}
              />
            </Link>
            <CollapseMore links={links} cutNumber={6} collapseBTN />
          </div>
          {/* Shortcuts */}
          <div className="hidden md:block group">
            <hr className="my-2 border-gray-300" />
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg text-gray-500 my-2 ">
                Your Shortcuts
              </h3>
              <span className="text-primary  duration-200 group-hover:scale-100 scale-0">
                Edit
              </span>
            </div>
            <CollapseMore links={groupLinks} cutNumber={4} collapseBTN />
          </div>
          {/* Footer Links */}
          <FooterLinks />
        </div>
      </SimpleBar>
    </div>
  );
}
