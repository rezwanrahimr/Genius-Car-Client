import React, { useContext } from "react";
import { authContext } from "../../Context/UseContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(authContext);
  const location = useLocation();
  if (loader) {
    return <h1 className="text-5xl font-bold text-center">Loading....</h1>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/signUp" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
