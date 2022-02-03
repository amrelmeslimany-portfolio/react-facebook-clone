import { SearchIcon, XIcon } from "@heroicons/react/solid";
import { AnimatePresence, motion } from "framer-motion";

const searchVariantAnimation = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Search(props) {
  return (
    <>
      <div
        className={`${
          props.search ? "bg-blue-100" : "bg-gray-100"
        } rounded-full p-2 flex items-center relative overflow-hidden`}
      >
        {props.search ? (
          <XIcon
            className="h-5 text-gray-600"
            onClick={props.handleSearchClick}
          />
        ) : (
          <SearchIcon
            className="h-5 text-gray-600 lg:hidden"
            onClick={props.handleSearchClick}
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
      <AnimatePresence>
        {props.search && (
          <motion.div
            variants={searchVariantAnimation}
            initial="hidden"
            exit="hidden"
            animate="visible"
            className="lg:hidden bg-white absolute top-[64px] left-0 p-2 w-full"
          >
            <div className="bg-gray-100 rounded-full p-2 flex items-center relative">
              <SearchIcon className="h-5 text-gray-600" />
              <input
                type="text"
                className={`
          bg-transparent border-0 p-0 ml-1  focus:outline-none w-full`}
                placeholder="Search Facebook"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
