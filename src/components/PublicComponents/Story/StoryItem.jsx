import { BsPlus } from "react-icons/bs";

export default function StoryItem(props) {
  const truncate = (text) => {
    return text.length >= 12 ? text.slice(0, 12) + "..." : text;
  };

  if (props.createStory) {
    return (
      <div className="h-52 w-32 flex-shrink-0 rounded-lg relative overflow-hidden group">
        <img
          src={
            window.location.origin + "/react-facebook-clone/imgs/happiness.jpg"
          }
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50 group-hover:scale-105 group-hover:brightness-75 duration-500 z-0"
          alt="story img"
          draggable="false"
        />
        <div className="absolute w-full h-full top-0 flex items-end left-0 z-[1]">
          <div className="p-2 pt-0 w-full text-center bg-white group-hover:bg-gray-50">
            <div className="w-11 h-11 border-4 border-white bg-primary normal-avatar mx-auto -mt-5">
              <BsPlus className="text-white text-3xl" />
            </div>
            <span className="text-black break-words">Create Story</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-52 w-32 flex-shrink-0 rounded-lg relative overflow-hidden group">
        <img
          src={
            window.location.origin + "/react-facebook-clone/imgs/happiness.jpg"
          }
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50 group-hover:scale-105 group-hover:brightness-75 duration-500 z-0"
          alt="story img"
          draggable="false"
        />
        <div className="absolute w-full h-full top-0 left-0 flex justify-between flex-col z-[1]">
          <div className="rounded-circle w-11 h-11 overflow-hidden border-4 border-primary mt-2 ml-2">
            <img
              src={
                window.location.origin + "/react-facebook-clone/imgs/avatar.jpg"
              }
              alt="user profile img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-2">
            <strong className="text-white break-words">
              {truncate("Amr Mohamed")}
            </strong>
          </div>
        </div>
      </div>
    );
  }
}
