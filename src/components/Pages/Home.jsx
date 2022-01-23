import Feed from "../PublicComponents/Feed";
import LeftSidebar from "../PublicComponents/LeftSidebar";
import RightSidebar from "../PublicComponents/RightSidebar";

export default function Home() {
  return (
    <div className="mt-[64px] flex gap-x-2">
      {/* Left Sidebar */}
      <LeftSidebar />
      {/* Feed */}
      <Feed />
      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
}
