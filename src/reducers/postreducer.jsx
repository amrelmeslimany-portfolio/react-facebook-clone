// Actions
export const ADD_POST = "ADD_POST";
export const ADD_COMMENT = "ADD_COMMENT";
export const ADD_REPLY = "ADD_REPLY";
export const ADD_POST_LIKE = "ADD_POST_LIKE";

export const REMOVE_POST = "REMOVE_POST";

export const USER_LOGIN = "USER_LOGIN";
// Reducers
let selectedPost;
let posOFSelected;

export const PostReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case ADD_COMMENT:
      selectedPost = state.posts.filter(
        (post) => post.post_id === action.payload.post_id
      )[0];
      posOFSelected = state.posts.indexOf(selectedPost);
      selectedPost.post_comments.unshift(action.payload.newComment);
      state.posts[posOFSelected] = selectedPost;
      return {
        ...state,
        posts: [...state.posts],
      };
    case ADD_REPLY:
      selectedPost = state.posts.filter(
        (post) => post.post_id === action.payload.post_id
      )[0];
      posOFSelected = state.posts.indexOf(selectedPost);
      let theComment = selectedPost.post_comments.filter(
        (comment) => comment.comment_id === action.payload.commentID
      )[0];
      theComment.comment_replys.push(action.payload.newComment);
      state.posts[posOFSelected] = selectedPost;
      return {
        ...state,
        posts: [...state.posts],
      };
    case ADD_POST_LIKE:
      selectedPost = state.posts.filter(
        (post) => post.post_id === action.payload.post_id
      )[0];
      posOFSelected = state.posts.indexOf(selectedPost);
      selectedPost.post_likes = action.payload.likesNumber;
      state.posts[posOFSelected] = selectedPost;
      return {
        ...state,
        posts: [...state.posts],
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(
          (prevPost) => prevPost.post_id !== action.payload
        ),
      };

    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
