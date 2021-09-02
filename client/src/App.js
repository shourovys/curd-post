import React, { useEffect, useState } from "react";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { useDispatch } from "react-redux";
import { getPosts } from "./redux/actions/postsAction";
import Router from "./router";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <Router />
      <NotificationContainer />
    </>
  );
};

export default App;
