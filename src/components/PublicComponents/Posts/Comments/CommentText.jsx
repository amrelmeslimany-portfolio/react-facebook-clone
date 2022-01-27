import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import ReactTimeago from "react-timeago";
import { formatTimeAgo } from "../../../../helpers";
import avatarImg from "../../../../imgs/avatar.jpg";

export default React.memo(function CommentText(props) {
  let [commentLiked, setCommentLiked] = useState(false);
  let [commentsLikes, setCommentsLikes] = useState(
    props.reply ? props.replys.reply_likes : props.comment.comment_likes
  );
  const handleCommentLike = () => {
    if (commentLiked) {
      setCommentsLikes(commentsLikes - 1);
      setCommentLiked(!commentLiked);
    } else {
      setCommentsLikes(commentsLikes + 1);
      setCommentLiked(!commentLiked);
    }
  };
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-2">
        <img src={avatarImg} className="img-avatar w-9 h-9" alt="me profile" />
      </div>
      <div className="max-w-full break-all whitespace-pre">
        <div className="bg-gray-100 rounded-xl p-2 pt-px relative">
          {commentsLikes > 0 && (
            <span className="absolute -top-3 right-2 px-[5px] pb-px bg-white shadow text-xs font-medium rounded-full flex items-center">
              <FaThumbsUp className="text-primary mr-1" />
              {commentsLikes}
            </span>
          )}
          <strong className="text-base truncate whitespace-normal capitalize">
            {props.reply ? props.replys.reply_user : props.comment.comment_user}
          </strong>
          <p className="text-md leading-5 whitespace-pre-wrap">
            {props.reply ? props.replys.reply_body : props.comment.comment_body}
          </p>
        </div>
        <div className="space-x-1 text-sm mt-1 ml-2">
          <span
            onClick={handleCommentLike}
            className={
              "font-medium cursor-pointer " +
              (commentLiked ? "text-primary" : "hover:text-primary duration-75")
            }
          >
            {commentLiked ? "Liked" : "Like"}
          </span>
          {!props.reply && (
            <>
              <small>•</small>
              <span
                onClick={props.handleReplyComment}
                className="font-medium cursor-pointer"
              >
                Reply
                {props.replysNumber > 0 && (
                  <small className="text-white normal-avatar !inline-flex w-4 h-4 bg-primary bg-opacity-80 ml-1">
                    {props.replysNumber}
                  </small>
                )}
              </span>
            </>
          )}
          <small>•</small>
          <span className="text-gray-500">
            <ReactTimeago
              date={
                props.reply
                  ? props.replys.reply_time
                  : props.comment.comment_time
              }
              formatter={formatTimeAgo}
            />
          </span>
        </div>
      </div>
    </div>
  );
});
