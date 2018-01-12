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

import api from '../../api';

export const getPost = id => async (dispatch) => {
  dispatch({ type: GET_POST_REQ });

  try {
    const req = await api.post.current(id);
    dispatch({ type: GET_POST_RES, payload: req });
  } catch (error) {
    dispatch({ type: GET_POST_FAIL, payload: error.message });
  }
}
export const getPosts = () => async (dispatch, getState) => {
  const count = getState().main.posts.length + 3;

  dispatch({ type: GET_POSTS_REQ });

  try {
    const req = await api.post.all();
    dispatch({ type: GET_POSTS_RES, payload: req.reverse().slice(0, count) });
  } catch (error) {
    dispatch({ type: GET_POSTS_FAIL, payload: error.message });
  }
}
export const savePost = data => async (dispatch) => {
  dispatch({ type: ADD_POST_REQ });

  try {
    const req = await api.post.save(data);
    dispatch({ type: ADD_POST_RES, payload: req });
  } catch (error) {
    dispatch({ type: ADD_POST_FAIL, payload: error.message });
  }
}
