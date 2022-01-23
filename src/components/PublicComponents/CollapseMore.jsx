import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export function CollapseMore(props) {
  const [toggleMore, setToggleMore] = useState("See More");
  let [links, setLinks] = useState(
    !props.oneItem && props.cutNumber > 0
      ? props.links.slice(0, props.cutNumber)
      : props.links
  );

  const handleMoreBTN = () => {
    setToggleMore((oldValue) => {
      if (oldValue === "See More") {
        return "See Less";
      } else {
        return "See More";
      }
    });

    if (toggleMore === "See Less") {
      setLinks(links.slice(0, props.cutNumber));
    } else if (toggleMore === "See More") {
      setLinks(props.links);
    }
  };

  const ItemTemp = (link) => {
    return (
      <div
        key={link.id}
        className="p-2 md:rounded bg-hover hover:bg-gray-200 flex items-center"
      >
        <div className="w-[43px]">
          <img
            src={window.location.origin + "/react-facebook-clone/" + link.img}
            className={`${
              link.group ? "rounded" : "rounded-circle"
            } object-cover w-7 h-7  md:w-10 md:h-10`}
            alt="user img profile"
          />
        </div>
        <div className="hidden md:block md:w-[196px] ml-2">
          <span className="text-sm md:text-md font-medium">{link.title}</span>
        </div>
      </div>
    );
  };

  const collapseBTN = (
    <div
      onClick={handleMoreBTN}
      className="p-2 md:rounded bg-hover hover:bg-gray-200 flex items-center"
    >
      <div className="w-[43px]">
        <div className="normal-avatar w-7 h-7  md:w-10 md:h-10 bg-gray-200">
          {toggleMore === "See More" ? (
            <AiOutlineDown className="text-sm md:text-base" />
          ) : (
            <AiOutlineUp className="text-sm md:text-base" />
          )}
        </div>
      </div>
      <div className="hidden md:block md:w-[196px] ml-2">
        <span className="text-md font-medium">{toggleMore}</span>
      </div>
    </div>
  );

  return (
    <>
      {!props.oneItem
        ? links.map((link) => ItemTemp(link))
        : ItemTemp(props.links)}

      {/* See More Button */}
      {props.collapseBTN && collapseBTN}
    </>
  );
}
