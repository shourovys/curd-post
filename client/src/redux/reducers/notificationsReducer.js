import { notification } from "antd";
import { SHOW_NOTIFICATION } from "../actions/notificationsAction";

const notificationState = {};
const key = "updatable";

function notificationReducer(state = notificationState, action) {
  const massageType = action?.payload?.massageType;
  switch (action.type) {
    case SHOW_NOTIFICATION:
      notification[massageType]({
        message: action.payload?.message,
        description: action.payload?.description,
      });
      return state;

    default:
      return state;
  }
}
export default notificationReducer;
