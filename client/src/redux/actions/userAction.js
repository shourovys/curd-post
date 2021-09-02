import { createUserApi, loginUserApi } from "../../api";
import { showNotification } from "./notificationsAction";

export const Add_LOGIN_USER = "Add_LOGIN_USER";
export const LOGOUT = "LOGOUT";

export const createAccount =
  (formData, setLoading, history) => async (dispatch) => {
    try {
      const { data } = await createUserApi(formData);
      dispatch({ type: Add_LOGIN_USER, payload: data });
      dispatch(
        showNotification({
          massageType: "success",
          message: "Account created successfully",
        })
      );
      setLoading(false);
      history.push("/");
    } catch (error) {
      dispatch(
        showNotification({
          message: error?.response?.data?.message,
          massageType: "error",
        })
      );
      setLoading(false);
      console.log(error);
    }
  };

export const loginAccount =
  (formData, setLoading, history) => async (dispatch) => {
    try {
      const { data } = await loginUserApi(formData);
      console.log("🚀 ~ file: actions.js ~ line 34 ~ data", data);
      dispatch({ type: Add_LOGIN_USER, payload: data });
      dispatch(
        showNotification({
          massageType: "success",
          message: `welcome ${data.userInfo.name}`,
        })
      );
      setLoading(false);
      history.push("/");
    } catch (error) {
      dispatch(
        showNotification({
          message: error?.response?.data?.message,
          massageType: "error",
        })
      );
      setLoading(false);
      console.log(error);
    }
  };

export const logOut = () => async (dispatch) => {
  localStorage.setItem("profile", "null");
  dispatch(
    showNotification({
      message: "Log Out Successful",
      massageType: "success",
    })
  );
  dispatch({
    type: LOGOUT,
    payload: {
      token: null,
      userInfo: {
        id: "",
        name: "",
        email: "",
        isAdmin: false,
      },
    },
  });
};
