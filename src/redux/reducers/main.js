import {
  GET_POST_REQ,
  GET_POST_RES,
  GET_POST_FAIL,
  GET_POSTS_REQ,
  GET_POSTS_RES,
  GET_POSTS_FAIL,
  ADD_POST_REQ,
  ADD_POST_RES,
  ADD_POST_FAIL,
} from '../constants/actionTypes';

const defaultState = {
  posts: [],
  current: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_POST_RES:
      return {
        ...state,
        current: action.payload,
      };
    case GET_POSTS_RES:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_POST_RES:
      const posts = [].concat(state.posts);
      posts.unshift(action.payload)
      return {
        ...state,
        posts,
      };
    case GET_POST_REQ:
    case GET_POST_FAIL:
    case GET_POSTS_REQ:
    case GET_POSTS_FAIL:
    case ADD_POST_REQ:
    case ADD_POST_FAIL:
      return state
  }
  return state;
}