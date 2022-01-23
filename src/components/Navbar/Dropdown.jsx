import React, { useState, useRef, useEffect } from "react";

export default function Dropdown(props) {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const refDropdownWrap = useRef();
  useEffect(() => {
    const checkClickedOutside = (e) => {
      if (
        toggleDropdown &&
        refDropdownWrap.current &&
        !refDropdownWrap.current.contains(e.target)
      ) {
        setToggleDropdown(false);
      }
    };

    document.addEventListener("click", checkClickedOutside);

    return () => {
      document.removeEventListener("click", checkClickedOutside);
    };
  }, [toggleDropdown]);

  const alert = props.alert && (
    <span className="bg-red-500 absolute p-1 top-0 right-1 rounded-circle"></span>
  );

  return (
    <div ref={refDropdownWrap}>
      <button
        onClick={() => setToggleDropdown(!toggleDropdown)}
        className={`hover:bg-blue-100 group bg-hover
        ${props.alert ? "relative" : ""}
          ${
            toggleDropdown ? "bg-blue-100" : "bg-gray-100"
          } rounded-full  flex items-center justify-center h-10 w-10`}
      >
        {!props.notNavbar ? (
          <props.Icon
            className={`${
              toggleDropdown && "text-primary"
            } h-6 group-hover:text-primary`}
          />
        ) : (
          props.Icon
        )}
        {alert}
      </button>
      <div
        style={{ width: props.width + "px" }}
        className={`${
          !toggleDropdown
            ? "opacity-0 invisible top-16"
            : "opacity-100 visible top-12"
        }  border-gray-100 border p-2 overflow-hidden absolute right-0 transition-all duration-500  shadow-md rounded bg-white z-10
        `}
      >
        {props.children}
      </div>
    </div>
  );
}
