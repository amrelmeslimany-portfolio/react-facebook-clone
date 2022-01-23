import React from "react";

export default function NavbarLink(props) {
  const notification = () => {
    if (props.notification && props.notification > 0) {
      return (
        <span className="absolute -top-2 -right-1 badge">
          {props.notification > 99 ? "99+" : props.notification}
        </span>
      );
    }
  };
  return (
    <div
      className={`h-12 w-12 xl:w-28 rounded flex justify-center relative items-center ${
        props.active ? "relative" : "bg-hover hover:bg-gray-100"
      }`}
    >
      {notification()}
      <props.Icon
        className={`${props.active ? "text-primary" : "text-gray-500"} h-7 `}
      />
      {props.active && (
        <span className="absolute -bottom-3 bg-primary w-full h-1"></span>
      )}
    </div>
  );
}
