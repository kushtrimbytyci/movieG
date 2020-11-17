import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import authContext from "../Context/Auth/authContext.js";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const AuthContext = useContext(authContext);
  const { isAuthenticated } = AuthContext;
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? <Redirect to="/home" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
