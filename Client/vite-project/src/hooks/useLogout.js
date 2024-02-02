import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetUser } from "../redux/reducers/auth/UserReducer";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(resetUser());
    navigate("/");
  };
  return { logout };
};

export default useLogout;
