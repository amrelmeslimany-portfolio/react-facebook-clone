import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import CreatePost from "./CreatePost";
import Posts from "./Posts/Posts";
import Story from "./Story/Story";

export default function Feed() {
  return (
    <div className="flex-grow">
      <SimpleBar className="h-[calc(100vh-64px)] overflow-x-hidden">
        <div className="md:px-4  pt-2 pb-6">
          {/* Stories */}
          <Story />
          {/* Page Content */}
          <div className="px-4 maxsm:pl-0  xl:px-36">
            {/* Create Post */}
            <CreatePost />
            {/* Display Posts */}
            <Posts />
          </div>
        </div>
      </SimpleBar>
    </div>
  );
}
