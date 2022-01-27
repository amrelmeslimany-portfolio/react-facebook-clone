import React, { useState } from "react";
import CommentInput from "./CommentInput";
import CommentText from "./CommentText";

export default function CommentItem(props) {
  const [toggleReply, setToggleReply] = useState(false);

  const handleReplyComment = () => {
    setToggleReply(true);
  };

  return (
    <li>
      {/* Parent Comment */}
      <CommentText
        comment={props.comment}
        handleReplyComment={handleReplyComment}
        replysNumber={props.comment.comment_replys.length}
      />
      {/* Add Reply On Comment and Replys on Comment*/}
      {props.comment.comment_replys.length > 0 && (
        <div className="pl-14 mt-2 space-y-2">
          {props.comment.comment_replys.map((item) => (
            <CommentText
              key={item.reply_id}
              reply
              replys={item}
              commentRef={props.commentRef}
            />
          ))}
        </div>
      )}

      {toggleReply && (
        <div className="pl-14 mt-2 space-y-2">
          <CommentInput
            reply
            postID={props.postID}
            commentRef={props.commentRef}
            commentID={props.comment.comment_id}
          />
        </div>
      )}
    </li>
  );
}
