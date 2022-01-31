import React from "react";

export default function StorySkelton(props) {
  return (
    <div className={`h-52 w-32 bg-white rounded-lg shadow ${props.className}`}>
      <span className="bg-gray-200 animate-pulse w-10 h-10 block rounded-circle my-2 ml-2"></span>
      <span className="bg-gray-200 animate-pulse w-full h-3/5 block"></span>
      <p className="flex gap-x-1 p-2">
        <span className="bg-gray-200 animate-pulse flex-1 h-3"></span>
        <span className="bg-gray-200 animate-pulse flex-1 h-3"></span>
      </p>
    </div>
  );
}
