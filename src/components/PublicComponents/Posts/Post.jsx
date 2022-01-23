import React, { useContext, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { RiEarthFill, RiLockFill, RiShareForwardLine } from "react-icons/ri";
import { FaRegCommentAlt, FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { AttachItem } from "../CreatePost";
import { CommentsWrap } from "./Comments/CommentsWrap";
import Dropdown from "../../Navbar/Dropdown";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import ReactTimeago from "react-timeago";
import { createID, formatTimeAgo } from "../../../helpers";
import { PostContext } from "../../../context/Postcontext";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import avatarImg from "../../../imgs/avatar.jpg";
Modal.setAppElement("body");

export default function Post({ post }) {
  const { removePost, addPostLike } = useContext(PostContext);
  const [openModal, setOpenModal] = useState(false);
  const [postsModal, setPostsModal] = useState(false);
  const commentRef = useRef();
  let [commentInput, setCommentInput] = useState(false);
  let commentsNumber = post.post_comments.length;
  let [isLiked, setIsLiked] = useState(false);
  const modalStyle = {
    overlay: { zIndex: 999 },
    content: {
      margin: "auto",
      padding: "0",
      maxWidth: 520,
      backgroundColor: "white",
      border: "none",
      boxShadow: "0px 0px 30px #00000045",
      height: "fit-content",
    },
  };
  const handleComment = () => {
    setCommentInput(true);
    setTimeout((_) => commentRef.current.focus(), 10);
  };

  const handleLike = () => {
    if (isLiked) {
      addPostLike(post.post_id, post.post_likes - 1);
      setIsLiked(!isLiked); // this make code repeated in profile an home
    } else {
      addPostLike(post.post_id, post.post_likes + 1);
      setIsLiked(!isLiked);
    }
  };

  const handleRestOfImgs = () => {
    setPostsModal(true);
  };

  const handleRemovePost = (id) => {
    removePost(id);
  };
  return (
    <li className="shadow rounded-md">
      {/* Post Header */}
      <div className="bg-white rounded-t-md py-2 px-4">
        <div className="flex justify-between">
          <div className="flex-grow">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  src={avatarImg}
                  className="img-avatar w-10 h-10 mr-2"
                  alt="user img"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-medium text-lg">{post.post_user}</h3>
                <p className="text-gray-500 text-sm">
                  <ReactTimeago
                    date={post.post_time}
                    className="mr-1"
                    formatter={formatTimeAgo}
                  />
                  &bull;
                  {post.post_privacy === "public" ? (
                    <RiEarthFill className="text-md inline-block align-text-bottom ml-1 " />
                  ) : (
                    <RiLockFill className="text-md inline-block align-text-bottom ml-1 " />
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 relative">
            <Dropdown
              Icon={<BsThreeDots className="text-lg text-gray-500" />}
              notNavbar
              width={200}
            >
              <ul>
                <li className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded">
                  <PencilIcon className="w-6 h-6 text-gray-500" />
                  <span>Edit</span>
                </li>
                <li
                  className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded"
                  onClick={() => setOpenModal(true)}
                >
                  <TrashIcon className="w-6 h-6 text-gray-500" />
                  <span>Delete</span>
                </li>
              </ul>
            </Dropdown>

            {openModal && (
              <Modal
                portalClassName="modals"
                isOpen={openModal}
                style={modalStyle}
                onRequestClose={() => setOpenModal(false)}
              >
                <div className="flex justify-between p-4 items-center">
                  <h4 className="font-bold text-xl capitalize">
                    Sure to delete this post ?
                  </h4>
                  <button
                    onClick={() => setOpenModal(false)}
                    className="normal-avatar p-1 bg-gray-100"
                  >
                    <MdClose className="text-gray-500 w-6 h-6" />
                  </button>
                </div>
                <hr />
                <p className="px-4 pt-2 text-base leading-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Incidunt cumque at quam, magni officiis assumenda omnis
                  molestias, consequatur ex sunt doloremque soluta molestiae eos
                  quae ullam autem totam voluptas ad.
                </p>
                <div className="float-right p-4">
                  <button
                    onClick={() => setOpenModal(false)}
                    className="text-primary p-2"
                  >
                    Cancle
                  </button>
                  <button
                    onClick={() => handleRemovePost(post.post_id)}
                    className="bg-primary py-1 px-2 rounded text-white"
                  >
                    Delete
                  </button>
                </div>
              </Modal>
            )}
          </div>
        </div>
        {/* If Text found */}
        {post.post_body && post.post_imgs.length === 0 ? (
          <p className="mt-2 break-words text-2xl font-normal -mb-3">
            {post.post_body}
          </p>
        ) : (
          <p className="mt-2 break-words">{post.post_body}</p>
        )}
      </div>
      {/* Post Img */}
      {post.post_imgs.length > 0 && (
        <div
          className={`w-full relative overflow-hidden  bg-white ${
            post.post_imgs.length > 1
              ? "grid grid-cols-2 gap-[3px]"
              : "h-[400px] maxsm:h-72"
          }`}
        >
          {post.post_imgs.slice(0, 4).map((img, index) => (
            <img
              key={createID()}
              src={img}
              className={`h-full w-full object-cover ${
                post.post_imgs.length === 3 && index === 0 ? "col-span-2" : ""
              } ${post.post_imgs.length > 1 ? "h-56" : ""}`}
              alt="cake"
            />
          ))}

          {post.post_imgs.length > 4 && (
            <span
              onClick={handleRestOfImgs}
              className="text-xl absolute bg-white text-primary font-medium shadow cursor-pointer rounded p-2 bg-opacity-95 bottom-2 right-2"
            >
              +{post.post_imgs.length - 4} More
            </span>
          )}
        </div>
      )}

      {postsModal && (
        <Modal
          isOpen={postsModal}
          style={modalStyle}
          onRequestClose={() => setPostsModal(false)}
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={8}
            pagination
            navigation
            slidesPerView={1}
            className="h-[400px]"
          >
            {post.post_imgs.map((img, index) => (
              <SwiperSlide key={createID()}>
                <img
                  src={img}
                  alt="cake"
                  className="shadow-md w-full object-cover h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Modal>
      )}

      {/* Post Footer */}
      <div className="rounded-b-md bg-white px-4 py-2">
        <div className="flex justify-between flex-wrap">
          {/* Likes Number */}
          {post.post_likes > 0 && (
            <div className="flex items-center">
              <div className="normal-avatar bg-gradient-to-t from-primary to-blue-500 w-5 h-5">
                <FaThumbsUp className="text-white text-[10px]" />
              </div>
              <small className="text-base ml-2 text-gray-500">
                {post.post_likes}
              </small>
            </div>
          )}
          {/* Comments Number */}
          <p className="text-gray-500">
            {/* Was Commenst Data.length */}
            {commentsNumber > 0 ? (
              <span
                className="cursor-pointer hover:underline"
                onClick={() => setCommentInput(true)}
              >
                {commentsNumber} comments
              </span>
            ) : (
              "no comments"
            )}
          </p>
        </div>
        <hr className="mt-2 mb-1 border-gray-300" />
        {/* If no reactive from user */}
        <ul className="flex">
          <AttachItem
            handleClick={handleLike}
            Icon={{
              icon: isLiked ? FaThumbsUp : FaRegThumbsUp,
              color: isLiked
                ? "text-primary text-[18px]"
                : "text-gray-500 text-[18px]",
            }}
            title={isLiked ? "Liked" : "Like"}
          />
          <AttachItem
            handleClick={handleComment}
            Icon={{
              icon: FaRegCommentAlt,
              color: "text-gray-500 text-[18px]",
            }}
            title="Comment"
          />
          <AttachItem
            Icon={{ icon: RiShareForwardLine, color: "text-gray-500 text-xl" }}
            title="Share"
          />
        </ul>
        {commentInput && (
          <CommentsWrap
            commentsNumber={commentsNumber}
            comments={post.post_comments}
            postID={post.post_id}
            commentRef={commentRef}
          />
        )}
      </div>
    </li>
  );
}
