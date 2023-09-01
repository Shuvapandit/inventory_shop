import React from "react";
import { UsersauthContext } from "../Userscontext/UsersContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(UsersauthContext);
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
        }}
      >
        <span className="loading loading-spinner  text-sky-600 loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoutes;
