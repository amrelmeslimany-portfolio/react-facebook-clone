import React, { createContext, useReducer } from "react";
import { postsData } from "../data";
import {
  ADD_COMMENT,
  ADD_POST,
  ADD_POST_LIKE,
  ADD_REPLY,
  PostReducer,
  REMOVE_POST,
} from "../reducers/postreducer";
// Create Context
export const PostContext = createContext();

// Initial State
const initialState = {
  posts: postsData,
};

export default function Postcontext({ children }) {
  // Use Reducer
  const [state, dispatch] = useReducer(PostReducer, initialState);
  // Dispatch Actions And pass them to app
  const addPost = (post) => {
    dispatch({ type: ADD_POST, payload: post });
  };

  const addComment = (post_id, newComment) => {
    dispatch({ type: ADD_COMMENT, payload: { post_id, newComment } });
  };

  const addReply = (post_id, commentID, newComment) => {
    dispatch({ type: ADD_REPLY, payload: { post_id, commentID, newComment } });
  };

  const addPostLike = (postID, likesNumber) => {
    dispatch({
      type: ADD_POST_LIKE,
      payload: { post_id: postID, likesNumber },
    });
  };

  const removePost = (post_id) => {
    dispatch({ type: REMOVE_POST, payload: post_id });
  };

  return (
    <PostContext.Provider
      value={{ state, addPost, addComment, addReply, removePost, addPostLike }}
    >
      {children}
    </PostContext.Provider>
  );
}
