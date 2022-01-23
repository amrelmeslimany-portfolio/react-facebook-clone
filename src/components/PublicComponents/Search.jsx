import { SearchIcon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

export default function Search(props) {
  const [search, toggleSearch] = useState(false);

  const handleSearchClick = () => {
    toggleSearch(!search);
  };

  return (
    <>
      <div className="bg-gray-100 rounded-full p-2 flex items-center relative">
        {search ? (
          <XIcon className="h-5 text-gray-600" onClick={handleSearchClick} />
        ) : (
          <SearchIcon
            className="h-5 text-gray-600 lg:hidden"
            onClick={handleSearchClick}
          />
        )}

        <SearchIcon className="h-5 text-gray-600 hidden lg:inline-block" />

        <input
          type="text"
          className={`${props.smHide && "hidden lg:inline-block"}
          bg-transparent border-0 p-0 ml-1  focus:outline-none w-full`}
          placeholder="Search Facebook"
        />
      </div>

      {search && (
        <div className="lg:hidden bg-white absolute top-[64px] left-0 p-2 w-full">
          <div className="bg-gray-100 rounded-full p-2 flex items-center relative">
            <SearchIcon className="h-5 text-gray-600" />
            <input
              type="text"
              className={`
          bg-transparent border-0 p-0 ml-1  focus:outline-none w-full`}
              placeholder="Search Facebook"
            />
          </div>
        </div>
      )}
    </>
  );
}
