import { combineReducers } from "redux";
import notificationReducer from "./notificationsReducer";
import posts from "./postsReducer";
import userReducer from "./userReducer";

export const reducers = combineReducers({
  posts,
  notifications: notificationReducer,
  user: userReducer,
});
