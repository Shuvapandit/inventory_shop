import React from "react";
import { UsersauthContext } from "../Userscontext/UsersContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(UsersauthContext);
  if (loading) {
    return <progress className="progress w-56 ml-1/2"></progress>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoutes;
