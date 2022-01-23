import React from "react";

export default function PostSkelton() {
  return (
    <li className="py-2 px-4 bg-white shadow rounded-md">
      <div className="flex items-center mb-2">
        <div className="flex-shrink-0 mr-2">
          <span className="h-12 w-12 bg-gray-200 rounded-circle inline-block animate-pulse"></span>
        </div>
        <div className="flex-grow">
          <span className="block mb-1 w-16 h-3 bg-gray-200 animate-pulse"></span>
          <span className="block mb-1 w-24 h-2 bg-gray-200 animate-pulse"></span>
        </div>
      </div>
      <p className="overflow-hidden space-y-1">
        <span className="animate-pulse w-4/5 h-2 bg-gray-200 block ml-auto"></span>
        <span className="animate-pulse w-full h-2 bg-gray-200 block"></span>
        <span className="animate-pulse w-full h-2 bg-gray-200 block"></span>
        <span className="animate-pulse w-full h-2 bg-gray-200 block"></span>
      </p>
      <hr className="border-gray-200 my-2" />
      <p className="flex items-center gap-x-8">
        <span className="bg-gray-200 animate-pulse h-4 flex-1"></span>
        <span className="bg-gray-200 animate-pulse h-4 flex-1"></span>
        <span className="bg-gray-200 animate-pulse h-4 flex-1"></span>
      </p>
    </li>
  );
}
