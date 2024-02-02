import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const { user } = useSelector((state) => state.root.user);
  return user ? <Navigate to="/home" replace /> : <Outlet />;
};

export default PublicRoutes;
