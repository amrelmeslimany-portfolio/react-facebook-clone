import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";

export const CommentsWrap = (props) => {
  return (
    <div>
      <hr className="mt-1 mb-2 border-gray-300" />

      {/* Add Comment */}
      <CommentInput commentRef={props.commentRef} postID={props.postID} />

      {props.commentsNumber ? (
        <ul className="mt-4 space-y-2">
          {props.comments.reverse().map((item) => (
            <CommentItem
              key={item.comment_id}
              comment={item}
              postID={props.postID}
              commentRef={props.commentRef}
            />
          ))}
        </ul>
      ) : (
        <div className="mt-4">
          <h3 className="text-gray-400">No Comments</h3>
        </div>
      )}
    </div>
  );
};
