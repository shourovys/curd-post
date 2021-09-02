import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "../helpers/PrivateRoute";
import LoginForm from "../pages/Auth/Login";
import SignUpForm from "../pages/Auth/SignUp";
import Post from "../pages/Posts/Post";
import Posts from "../pages/Posts/Posts";
const routes = [
  {
    path: "/",
    Component: Posts,
    exact: true,
    ComponentRoute: PrivateRoute,
  },
  {
    path: "/posts",
    Component: Posts,
    exact: true,
    ComponentRoute: PrivateRoute,
  },
  {
    path: "/post/:id",
    Component: Post,
    exact: true,
    ComponentRoute: PrivateRoute,
  },

  // Auth Pages
  {
    path: "/auth/login",
    Component: LoginForm,
    exact: true,
    ComponentRoute: Route,
  },

  {
    path: "/auth/sineUp",
    Component: SignUpForm,
    exact: true,
    ComponentRoute: Route,
  },
];

const mapStateToProps = ({ settings }) => ({
  routerAnimation: settings.routerAnimation,
});

const Router = () => {
  return (
    <>
      {routes.map(({ path, Component, exact, ComponentRoute }) => (
        <ComponentRoute path={path} key={path} exact={exact}>
          <Component />
        </ComponentRoute>
      ))}
    </>
  );
};

export default Router;
