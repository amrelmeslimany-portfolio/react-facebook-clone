import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.css";

import { FaUserPlus, FaUniversity } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { RiHandbagFill, RiFilterFill } from "react-icons/ri";
import Posts from "../PublicComponents/Posts/Posts";
import { Mousewheel, Navigation } from "swiper";
import FooterLinks from "../PublicComponents/FooterLinks";
export default function Profile() {
  return (
    <SimpleBar className="h-[100vh] overflow-x-hidden">
      <div className="bg-white shadow">
        <div className="mt-[64px] container">
          {/* Cover */}
          <img
            src={
              window.location.origin + "/react-facebook-clone/imgs/cover.jpg"
            }
            className="h-[380px] brightness-75 object-cover rounded-b-md w-full"
            alt="cover"
          />

          {/* Profile Intro Info */}
          <div className="-mt-28 relative z-10">
            <div className="text-center">
              <img
                src={
                  window.location.origin +
                  "/react-facebook-clone/imgs/avatar.jpg"
                }
                className="img-avatar w-40 h-40 mx-auto !border-4 !border-gray-50 mb-2"
                alt="profile"
              />

              <h2 className="font-medium text-3xl mb-1 capitalize">
                Amr Elmeslimany
              </h2>
              <span className="text-gray-500 text-lg">This is the Bio</span>
            </div>

            <hr className="mt-2 mb-1 border-gray-400" />

            <div className="flex justify-between pt-1 pb-2 flex-wrap gap-y-6">
              <div className="flex-grow pb-px">
                <span className="px-4 pt-2 pb-2 xs:pb-[17px] text-lg text-primary font-semibold border-b-4 border-primary">
                  Posts
                </span>

                <button className="px-4 py-2 bg-hover hover:bg-gray-100 rounded text-lg text-gray-600">
                  About
                </button>

                <button className="px-4 py-2 bg-hover hover:bg-gray-100 rounded text-lg text-gray-600">
                  Friends <small className="text-gray-400">35</small>
                </button>

                <button className="px-4 py-2 bg-hover hover:bg-gray-100 rounded text-lg text-gray-600">
                  Photes
                </button>

                <button className="px-4 py-2 bg-hover hover:bg-gray-100 rounded text-lg text-gray-600">
                  Videos
                </button>
              </div>
              <div className="flex-shrink-0 space-x-2">
                <button className="px-4 py-2  inline-flex items-center bg-hover hover:brightness-95 font-medium bg-primary rounded text-lg text-white">
                  <FaUserPlus className="mr-2 text-xl" />
                  Add Friend
                </button>
                <button className="px-4 py-2  inline-flex items-center bg-hover hover:brightness-95 font-medium bg-gray-100 rounded text-lg text-black">
                  <AiFillMessage className="mr-2 text-xl" />
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-4">
        <div className="segment my-4 flex justify-between flex-wrap gap-y-2">
          <div>
            <strong className="font-medium text-xl capitalize">
              Do you know Amr ?
            </strong>
            <p className="text-gray-600 text-md">
              To see what she shares with friends, send her a friend request.
            </p>
          </div>
          <div className="self-center">
            <button className="px-4 py-2 ml-auto  inline-flex items-center bg-hover hover:brightness-95 font-medium bg-primary rounded text-lg text-white">
              <FaUserPlus className="mr-2 text-xl" />
              Add Friend
            </button>
          </div>
        </div>

        <div className="flex maxlg:flex-wrap gap-4">
          <div className="w-[550px] maxlg:w-full">
            <div className="sticky top-[-1050px] space-y-4">
              {/* Information */}
              <div className="!py-4 segment">
                <strong className="font-medium text-2xl mb-4 block">
                  Intro
                </strong>

                <ul className="space-y-3">
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <RiHandbagFill className="mr-2 text-2xl text-gray-400" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-gray-500 text-lg leading-5">
                        Works at Student
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <FaUniversity className="mr-2 text-2xl text-gray-400" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-gray-500 text-lg leading-5">
                        Studied at
                        <span className="text-gray-700 ml-1 font-medium">
                          faculty of computer science and informations damnhour
                          univeristy
                        </span>
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <RiHandbagFill className="mr-2 text-2xl text-gray-400" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-gray-500 text-lg leading-5">
                        Works at Student
                      </p>
                    </div>
                  </li>
                </ul>

                <Swiper
                  modules={[Navigation, Mousewheel]}
                  spaceBetween={8}
                  mousewheel
                  navigation
                  breakpoints={{
                    468: {
                      slidesPerView: 3,
                    },
                    768: {
                      slidesPerView: 4,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                  slidesPerView={2}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  className="mt-4"
                >
                  <SwiperSlide className="text-center">
                    <div className="h-64 rounded-md overflow-hidden brightness-75 group">
                      <img
                        src={
                          window.location.origin +
                          "/react-facebook-clone/imgs/happiness.jpg"
                        }
                        className="w-full h-full object-cover group-hover:scale-105 duration-500"
                        alt="stories"
                      />
                    </div>
                    <span className="mt-2 block">🤍👀</span>
                  </SwiperSlide>
                  <SwiperSlide className="text-center">
                    <div className="h-64 rounded-md overflow-hidden brightness-75 group">
                      <img
                        src={
                          window.location.origin +
                          "/react-facebook-clone/imgs/happiness.jpg"
                        }
                        className="w-full h-full object-cover group-hover:scale-105 duration-500"
                        alt="stories"
                      />
                    </div>
                    <span className="mt-2 block">🤍👀</span>
                  </SwiperSlide>
                  <SwiperSlide className="text-center">
                    <div className="h-64 rounded-md overflow-hidden brightness-75 group">
                      <img
                        src={
                          window.location.origin +
                          "/react-facebook-clone/imgs/happiness.jpg"
                        }
                        className="w-full h-full object-cover group-hover:scale-105 duration-500"
                        alt="stories"
                      />
                    </div>
                    <span className="mt-2 block">🤍👀</span>
                  </SwiperSlide>
                  <SwiperSlide className="text-center">
                    <div className="h-64 rounded-md overflow-hidden brightness-75 group">
                      <img
                        src={
                          window.location.origin +
                          "/react-facebook-clone/imgs/happiness.jpg"
                        }
                        className="w-full h-full object-cover group-hover:scale-105 duration-500"
                        alt="stories"
                      />
                    </div>
                    <span className="mt-2 block">🤍👀</span>
                  </SwiperSlide>
                </Swiper>
              </div>
              {/* Photos */}
              <div className="!py-4 segment">
                <div className="flex justify-between mb-2">
                  <strong className="font-medium text-2xl block">Photos</strong>
                  <span className="text-primary text-md ">See All Photos</span>
                </div>

                <ul className="grid xs:grid-cols-3 grid-cols-2 gap-1">
                  <li className="overflow-hidden rounded-md h-40">
                    <img
                      src={
                        window.location.origin +
                        "/react-facebook-clone/imgs/cover.jpg"
                      }
                      alt="cover"
                      className="w-full h-full object-cover"
                    />
                  </li>
                  <li className="overflow-hidden rounded-md h-40">
                    <img
                      src={
                        window.location.origin +
                        "/react-facebook-clone/imgs/react.jpg"
                      }
                      alt="react"
                      className="w-full h-full object-cover"
                    />
                  </li>
                  <li className="overflow-hidden rounded-md h-40">
                    <img
                      src={
                        window.location.origin +
                        "/react-facebook-clone/imgs/happiness.jpg"
                      }
                      alt="happiness"
                      className="w-full h-full object-cover"
                    />
                  </li>
                  <li className="overflow-hidden rounded-md h-40">
                    <img
                      src={
                        window.location.origin +
                        "/react-facebook-clone/imgs/cover.jpg"
                      }
                      alt="cover"
                      className="w-full h-full object-cover"
                    />
                  </li>
                  <li className="overflow-hidden rounded-md h-40">
                    <img
                      src={
                        window.location.origin +
                        "/react-facebook-clone/imgs/react.jpg"
                      }
                      alt="react"
                      className="w-full h-full object-cover"
                    />
                  </li>
                  <li className="overflow-hidden rounded-md h-40">
                    <img
                      src={
                        window.location.origin +
                        "/react-facebook-clone/imgs/happiness.jpg"
                      }
                      alt="happiness"
                      className="w-full h-full object-cover"
                    />
                  </li>
                  <li className="overflow-hidden rounded-md h-40">
                    <img
                      src={
                        window.location.origin +
                        "/react-facebook-clone/imgs/cover.jpg"
                      }
                      alt="cover"
                      className="w-full h-full object-cover"
                    />
                  </li>
                  <li className="overflow-hidden rounded-md h-40">
                    <img
                      src={
                        window.location.origin +
                        "/react-facebook-clone/imgs/react.jpg"
                      }
                      alt="react"
                      className="w-full h-full object-cover"
                    />
                  </li>
                  <li className="overflow-hidden rounded-md h-40">
                    <img
                      src={
                        window.location.origin +
                        "/react-facebook-clone/imgs/happiness.jpg"
                      }
                      alt="happiness"
                      className="w-full h-full object-cover"
                    />
                  </li>
                </ul>
              </div>
              {/* Friends */}
              <div className="!py-4 segment">
                <div className="flex justify-between mb-2">
                  <div>
                    <strong className="font-medium text-2xl block">
                      Friends
                    </strong>
                    <small className="text-gray-500 text-base">
                      3,120 Friends
                    </small>
                  </div>
                  <span className="text-primary text-md ">See All Friends</span>
                </div>

                <ul className="grid xs:grid-cols-3 grid-cols-2 gap-2">
                  <li>
                    <img
                      src={
                        window.location.origin +
                        "/react-facebook-clone/imgs/cover.jpg"
                      }
                      alt="cover"
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h5 className="font-normal text-md capitalize mt-1">
                      amr mohamed
                    </h5>
                  </li>
                  <li>
                    <img
                      src={
                        window.location.origin +
                        "/react-facebook-clone/imgs/cover.jpg"
                      }
                      alt="cover"
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h5 className="font-normal text-md capitalize mt-1">
                      amr mohamed
                    </h5>
                  </li>
                  <li>
                    <img
                      src={
                        window.location.origin +
                        "/react-facebook-clone/imgs/cover.jpg"
                      }
                      alt="cover"
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h5 className="font-normal text-md capitalize mt-1">
                      amr mohamed
                    </h5>
                  </li>
                  <li>
                    <img
                      src={
                        window.location.origin +
                        "/react-facebook-clone/imgs/cover.jpg"
                      }
                      alt="cover"
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h5 className="font-normal text-md capitalize mt-1">
                      amr mohamed
                    </h5>
                  </li>
                  <li>
                    <img
                      src={
                        window.location.origin +
                        "/react-facebook-clone/imgs/cover.jpg"
                      }
                      alt="cover"
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h5 className="font-normal text-md capitalize mt-1">
                      amr mohamed
                    </h5>
                  </li>
                  <li>
                    <img
                      src={
                        window.location.origin +
                        "/react-facebook-clone/imgs/cover.jpg"
                      }
                      alt="cover"
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h5 className="font-normal text-md capitalize mt-1">
                      amr mohamed
                    </h5>
                  </li>
                  <li>
                    <img
                      src={
                        window.location.origin +
                        "/react-facebook-clone/imgs/cover.jpg"
                      }
                      alt="cover"
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h5 className="font-normal text-md capitalize mt-1">
                      amr mohamed
                    </h5>
                  </li>
                  <li>
                    <img
                      src={
                        window.location.origin +
                        "/react-facebook-clone/imgs/cover.jpg"
                      }
                      alt="cover"
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h5 className="font-normal text-md capitalize mt-1">
                      amr mohamed
                    </h5>
                  </li>
                  <li>
                    <img
                      src={
                        window.location.origin +
                        "/react-facebook-clone/imgs/cover.jpg"
                      }
                      alt="cover"
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h5 className="font-normal text-md capitalize mt-1">
                      amr mohamed
                    </h5>
                  </li>
                </ul>
              </div>

              {/* Footer */}
              <FooterLinks />
            </div>
          </div>

          {/* Posts */}
          <div className="flex-grow">
            <div className="segment">
              <div className="flex items-center justify-between">
                <strong className="font-medium text-xl">Posts</strong>
                <div className="flex-shrink-0">
                  <button className="bg-gray-100 px-2 py-2 rounded flex items-center font-medium">
                    <RiFilterFill className="mr-1" />
                    Filters
                  </button>
                </div>
              </div>
            </div>
            <Posts />
          </div>
        </div>
      </div>
    </SimpleBar>
  );
}
