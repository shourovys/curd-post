import * as api from "../../api/index.js";
import { showNotification } from "./notificationsAction.js";

export const CREATE_POST = "CREATE_POST";
export const DELETE_POST = "DELETE_POST";
export const FETCH_ALL_POST = "FETCH_ALL_POST";
export const UPDATE_POST = "UPDATE_POST";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL_POST, payload: data });
  } catch (error) {
    dispatch(
      showNotification({
        message: error.message,
        massageType: "error",
      })
    );
  }
};

export const createPost = (postInfo,setLoading,onClose) => async (dispatch) => {
  try {
    const { data } = await api.createPost(postInfo);
    dispatch(
      showNotification({
        massageType: "success",
        message: "Post created successfully",
      })
    );
    dispatch({ type: CREATE_POST, payload: data });
    setLoading(false)
    onClose()
  } catch (error) {
    dispatch(
      showNotification({
        message: error.message,
        massageType: "error",
      })
    );
    setLoading(false)
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch(
      showNotification({
        massageType: "success",
        message: "Post Updated successfully",
      })
    );
    dispatch({ type: UPDATE_POST, payload: data });
  } catch (error) {
    dispatch(
      showNotification({
        message: error.message,
        massageType: "error",
      })
    );
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await await api.deletePost(id);
    dispatch(
      showNotification({
        massageType: "success",
        message: "Post Delete successfully",
      })
    );
    dispatch({ type: DELETE_POST, payload: id });
  } catch (error) {
    dispatch(
      showNotification({
        message: error.message,
        massageType: "error",
      })
    );
  }
};
