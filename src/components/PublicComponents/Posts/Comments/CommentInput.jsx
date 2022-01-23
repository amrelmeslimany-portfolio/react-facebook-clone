import { useContext, useState } from "react";
import { BsCamera, BsEmojiSmile } from "react-icons/bs";
import { RiFileGifLine } from "react-icons/ri";
import { BiSticker } from "react-icons/bi";
import { PostContext } from "../../../../context/Postcontext";
import { createID } from "../../../../helpers";

export default function CommentInput({ reply, commentID, commentRef, postID }) {
  const [toggleBTN, setToggleBTN] = useState(false);
  const { addComment, addReply } = useContext(PostContext);
  const showBTN = (e) => {
    e.target.value.trim() ? setToggleBTN(true) : setToggleBTN(false);
  };

  // add comment
  const handleAddComment = (e) => {
    if (e.type === "click" || e.code === "Enter") {
      let newComment;
      let value = commentRef ? commentRef.current.value : e.target.value;
      if (value && !value.includes("\n")) {
        if (reply) {
          newComment = {
            reply_id: createID(),
            reply_likes: 0,
            reply_body: value,
            reply_time: new Date(),
            reply_user: "Reply_" + createID(),
            reply_comment_id: commentID,
          };

          addReply(postID, commentID, newComment);
        } else {
          newComment = {
            comment_id: createID(),
            comment_likes: 0,
            comment_body: value,
            comment_replys: [],
            comment_time: new Date(),
            comment_user: "User_" + createID(),
          };
          addComment(postID, newComment);
        }

        setToggleBTN(false);
        if (commentRef) {
          commentRef.current.parentElement.parentElement.remove();
          commentRef.current.value = "";
        } else {
          e.target.parentElement.parentElement.remove();
          e.target.value = "";
        }
        e.target.blur();
      }
    }
  };

  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-2">
        <img
          src="imgs/avatar.jpg"
          className="img-avatar w-9 h-9"
          alt="add comment"
        />
      </div>
      <div className="flex flex-grow py-2 px-3 bg-gray-100 gap-2 rounded-[25px] flex-wrap">
        <textarea
          onKeyPress={handleAddComment}
          onInput={showBTN}
          ref={commentRef}
          type="text"
          className="bg-transparent resize-none overflow-hidden flex-auto ring-0 focus:outline-none pr-2  w-full"
          placeholder={reply ? "Add Reply..." : "Write a comment..."}
        />
        <div className="space-x-2 text-gray-500 self-end ml-auto flex items-center">
          {toggleBTN && (
            <button
              onClick={handleAddComment}
              className="py-1 px-2 rounded bg-primary text-sm text-white"
            >
              {reply ? "Reply" : "Comment"}
            </button>
          )}
          <BsEmojiSmile className="text-base" />
          <BsCamera className="text-lg" />
          <RiFileGifLine className="text-lg" />
          <BiSticker className="text-lg" />
        </div>
      </div>
    </div>
  );
}
