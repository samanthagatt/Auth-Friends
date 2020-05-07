import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getAuthToken } from "../utils/cookiesUtil";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={
      props => {
          return getAuthToken() ? 
            <Component {...props} /> : 
            <Redirect to="/login" />
      }
    } />
  )
};